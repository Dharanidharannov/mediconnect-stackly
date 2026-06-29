import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  InputAdornment,
} from '@mui/material';

import FormHeader from '../common/FormHeader';
import RequiredInfo from '../common/RequiredInfo';
import FormActions from '../common/FormActions';

// Validation schema with proper validations
const validationSchema = Yup.object().shape({
  height: Yup.number()
    .min(50, 'Height should be between 50 cm and 250 cm')
    .max(250, 'Height should be between 50 cm and 250 cm')
    .optional(),
  heightUnit: Yup.string().optional(),
  weight: Yup.number()
    .min(2, 'Weight should be between 2 kg and 500 kg')
    .max(500, 'Weight should be between 2 kg and 500 kg')
    .optional(),
  weightUnit: Yup.string().optional(),
  bloodPressure: Yup.string()
    .matches(
      /^(\d{2,3})\s*\/\s*(\d{2,3})$/,
      'Enter blood pressure in the format: 120/80 mmHg'
    )
    .test('is-healthy', 'Please enter a healthy blood pressure value', (value) => {
      if (!value) return true;
      const match = value.match(/^(\d{2,3})\s*\/\s*(\d{2,3})$/);
      if (!match) return false;
      const systolic = parseInt(match[1]);
      const diastolic = parseInt(match[2]);
      return systolic >= 90 && systolic <= 180 && diastolic >= 60 && diastolic <= 120;
    })
    .optional(),
  bloodSugar: Yup.number()
    .typeError('Blood sugar must be a number')
    .min(0, 'Blood sugar content cannot be negative')
    .max(300, 'Please enter a valid blood sugar value')
    .optional(),
  physicalActivityLevel: Yup.string()
    .typeError('Please select your physical activity level!')
    .optional(),
  dietaryPreference: Yup.string()
    .typeError('Please select your dietary preference!')
    .optional(),
  smokingStatus: Yup.string()
    .typeError('Please select a valid smoking status.')
    .optional(),
  alcoholConsumption: Yup.string()
    .typeError('Please select your alcohol consumption!')
    .optional(),
  emergencyContactNumber: Yup.string()
    .required('Emergency contact number is required')
    .matches(
      /^(\+91\s?)?[6-9]\d{9}$/,
      'Enter a valid mobile number'
    )
    .test(
      'different-from-phone',
      'Emergency contact should be different from your mobile number',
      function(value) {
        if (!value) return true;
        const phoneNumber = this.parent?.phoneNumber || '';
        const cleanValue = value.replace(/[\s+]/g, '');
        const cleanPhone = phoneNumber.replace(/[\s+]/g, '');
        return cleanValue !== cleanPhone;
      }
    ),
  emergencyContactRelationship: Yup.string()
    .required('Please select your relationship with the emergency contact.'),
});

const physicalActivityLevels = ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active', 'Highly Active'];
const dietaryPreferences = ['No Preference','Vegetarian','Vegan','Eggetarain','Pescatarian','Non-Vegetarian','Other'];
const smokingStatusOptions = ['Never Smoked', 'Former Smoker', 'Occasional Smoker','Regular Smoker','Prefer not to say'];
const alcoholConsumptionOptions = ['Never', 'Occasionally', 'Monthly', 'Weekly', 'Frequently','Prefer not to say'];
const relationships = ['Parent', 'Spouse', 'Sibling', 'Child', 'Relative', 'Friend', 'Caregiver','Guardian','Other'];
const heightUnits = ['cm', 'ft'];
const weightUnits = ['kg', 'lb'];

const AdditionalInformation = ({ initialValues, onNext, onBack }) => {
  const formik = useFormik({
    initialValues: {
      height: initialValues.height || '',
      heightUnit: initialValues.heightUnit || 'cm',
      weight: initialValues.weight || '',
      weightUnit: initialValues.weightUnit || 'kg',
      bloodPressure: initialValues.bloodPressure || '',
      bloodSugar: initialValues.bloodSugar || '',
      physicalActivityLevel: initialValues.physicalActivityLevel || '',
      dietaryPreference: initialValues.dietaryPreference || '',
      smokingStatus: initialValues.smokingStatus || '',
      alcoholConsumption: initialValues.alcoholConsumption || '',
      emergencyContactNumber: initialValues.emergencyContactNumber || '+91 ',
      emergencyContactRelationship: initialValues.emergencyContactRelationship || '',
      phoneNumber: initialValues.phoneNumber || '+91 ',
    },
    validationSchema,
    onSubmit: (values) => {
      onNext(values);
    },
  });

  const isFormValid = 
    formik.values.height &&
    formik.values.weight &&
    formik.values.physicalActivityLevel &&
    formik.values.dietaryPreference &&
    formik.values.smokingStatus &&
    formik.values.alcoholConsumption &&
    formik.values.emergencyContactNumber &&
    formik.values.emergencyContactRelationship &&
    Object.keys(formik.errors).length === 0;

  // Helper function for text input fields with unit selector
  const renderTextFieldWithUnit = (name, label, required = false, placeholder = '', unitName, unitOptions, defaultUnit) => {
    const hasError = formik.touched[name] && Boolean(formik.errors[name]);
    
    return (
      <Box>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, mb: 1, color: '#374151' }}
        >
          {label} {required && <span style={{ color: '#ff4d4f' }}>*</span>}
        </Typography>
        <TextField
          fullWidth
          name={name}
          placeholder={placeholder}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={hasError}
          helperText={hasError && formik.errors[name]}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <TextField
                    select
                    name={unitName}
                    value={formik.values[unitName] || defaultUnit}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    variant="standard"
                    sx={{
                      '& .MuiInput-root': {
                        '&:before': {
                          borderBottom: 'none',
                        },
                        '&:hover:before': {
                          borderBottom: 'none',
                        },
                        '&.Mui-focused:before': {
                          borderBottom: 'none',
                        },
                        '&:after': {
                          borderBottom: 'none',
                        },
                      },
                      '& .MuiSelect-select': {
                        padding: '4px 24px 4px 8px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#6b7280',
                        minWidth: '50px',
                      },
                      '& .MuiSelect-icon': {
                        right: '4px',
                      },
                    }}
                  >
                    {unitOptions.map((unit) => (
                      <MenuItem key={unit} value={unit}>
                        {unit}
                      </MenuItem>
                    ))}
                  </TextField>
                </InputAdornment>
              ),
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: 56,
              backgroundColor: '#f9fafb',
              '&:hover': {
                backgroundColor: '#ffffff',
              },
              '&.Mui-focused': {
                backgroundColor: '#ffffff',
              },
            },
            '& .MuiFormHelperText-root': {
              color: '#ff4d4f',
              marginLeft: 0,
              marginTop: '4px',
              fontWeight: 500,
            },
          }}
        />
      </Box>
    );
  };

  // Helper function for text input fields (without unit)
  const renderTextField = (name, label, required = false, placeholder = '', endAdornment = null) => {
    const hasError = formik.touched[name] && Boolean(formik.errors[name]);
    
    return (
      <Box>
        <Typography
          variant="body2"
          sx={{ fontWeight: 600, mb: 1, color: '#374151' }}
        >
          {label} {required && <span style={{ color: '#ff4d4f' }}>*</span>}
        </Typography>
        <TextField
          fullWidth
          name={name}
          placeholder={placeholder}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={hasError}
          helperText={hasError && formik.errors[name]}
          slotProps={{
            input: {
              endAdornment: endAdornment ? (
                <InputAdornment position="end">
                  <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 500 }}>
                    {endAdornment}
                  </Typography>
                </InputAdornment>
              ) : null,
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: 56,
              backgroundColor: '#f9fafb',
              '&:hover': {
                backgroundColor: '#ffffff',
              },
              '&.Mui-focused': {
                backgroundColor: '#ffffff',
              },
            },
            '& .MuiFormHelperText-root': {
              color: '#ff4d4f',
              marginLeft: 0,
              marginTop: '4px',
              fontWeight: 500,
            },
          }}
        />
      </Box>
    );
  };

  // Helper function for select fields
  const renderSelectField = (name, label, required = false, options, placeholder = '') => {
    const hasError = formik.touched[name] && Boolean(formik.errors[name]);
    
    return (
      <Box>
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#374151' }}>
          {label} {required && <span style={{ color: '#ff4d4f' }}>*</span>}
        </Typography>
        <TextField
          fullWidth
          select
          name={name}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={hasError}
          helperText={hasError && formik.errors[name]}
          slotProps={{
            select: {
              displayEmpty: true,
              renderValue: (selected) => {
                if (!selected) {
                  return <span style={{ color: '#9ca3af' }}>{placeholder}</span>;
                }
                return selected;
              },
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: 56,
              backgroundColor: '#f9fafb',
              '&:hover': {
                backgroundColor: '#ffffff',
              },
              '&.Mui-focused': {
                backgroundColor: '#ffffff',
              },
            },
            '& .MuiFormHelperText-root': {
              color: '#ff4d4f',
              marginLeft: 0,
              marginTop: '4px',
              fontWeight: 500,
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1100px',
        mx: 'auto',
      }}
    >
      <FormHeader
        title="Additional Information"
        subtitle="Enhance your profile with optional details for a more personalized healthcare journey."
      />

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          {/* Height */}
          <Grid size={{ xs: 12, md: 6 }}>
            {renderTextFieldWithUnit(
              'height', 
              'Height', 
              false, 
              'Enter height', 
              'heightUnit', 
              heightUnits, 
              'cm'
            )}
          </Grid>

          {/* Weight */}
          <Grid size={{ xs: 12, md: 6 }}>
            {renderTextFieldWithUnit(
              'weight', 
              'Weight', 
              false, 
              'Enter weight', 
              'weightUnit', 
              weightUnits, 
              'kg'
            )}
          </Grid>

          {/* Blood Pressure */}
          <Grid size={{ xs: 12, md: 6 }}>
            {renderTextField('bloodPressure', 'Blood Pressure (if Known)', false, 'Enter Blood Pressure (If Known), e.g. 120/80', 'mmHg')}
          </Grid>

          {/* Blood Sugar */}
          <Grid size={{ xs: 12, md: 6 }}>
            {renderTextField('bloodSugar', 'Blood Sugar (if Known)', false, 'Enter Blood Sugar (If Known), e.g. 90 mg/dl', 'mg/dL')}
          </Grid>

          {/* Physical Activity Level */}
          <Grid size={{ xs: 12, md: 6 }}>
            {renderSelectField('physicalActivityLevel', 'Physical Activity Level', false, physicalActivityLevels, 'Select your physical activity level')}
          </Grid>

          {/* Dietary Preference */}
          <Grid size={{ xs: 12, md: 6 }}>
            {renderSelectField('dietaryPreference', 'Dietary Preference', false, dietaryPreferences, 'Select your dietary preference')}
          </Grid>

          {/* Smoking Status */}
          <Grid size={{ xs: 12, md: 6 }}>
            {renderSelectField('smokingStatus', 'Smoking Status', false, smokingStatusOptions, 'Select your smoking status')}
          </Grid>

          {/* Alcohol Consumption */}
          <Grid size={{ xs: 12, md: 6 }}>
            {renderSelectField('alcoholConsumption', 'Alcohol Consumption', false, alcoholConsumptionOptions, 'Select your alcohol consumption')}
          </Grid>

          {/* Emergency Contact Relationship */}
          <Grid size={{ xs: 12, md: 6 }}>
            {renderSelectField('emergencyContactRelationship', 'Emergency Contact Relationship', true, relationships, 'Select relationship with emergency contact')}
          </Grid>

          {/* Emergency Contact Number */}
          <Grid size={{ xs: 12, md: 6 }}>
            {renderTextField('emergencyContactNumber', 'Emergency Contact Number', true, '+91 9876 543 210')}
          </Grid>

          {/* Required fields indicator box */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <RequiredInfo />
          </Grid>

          {/* Navigation Buttons */}
          <Grid size={{ xs: 12 }}>
            <FormActions
              onSkip={() => onNext(formik.values)}
              onBack={onBack}
              nextText="Add Medical History"
              disabled={false}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AdditionalInformation;