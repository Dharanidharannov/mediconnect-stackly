import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Typography,
  Grid,
  TextField,
} from '@mui/material';

import FormHeader from '../common/FormHeader';
import RequiredInfo from '../common/RequiredInfo';
import FormActions from '../common/FormActions';

const validationSchema = Yup.object().shape({
  allergies: Yup.string()
    .optional(),
  currentMedications: Yup.string()
    .optional(),
  existingConditions: Yup.string()
    .optional(),
  previousSurgeries: Yup.string()
    .optional(),
});

const MedicalHistory = ({ initialValues, onNext, onBack }) => {
  const formik = useFormik({
    initialValues: {
      allergies: initialValues.allergies || '',
      currentMedications: initialValues.currentMedications || '',
      existingConditions: initialValues.existingConditions || '',
      previousSurgeries: initialValues.previousSurgeries || '',
    },
    validationSchema,
    onSubmit: (values) => {
      onNext(values);
    },
  });

  // Check if any field has value (to enable next button)
  const hasAnyValue = 
    formik.values.allergies ||
    formik.values.currentMedications ||
    formik.values.existingConditions ||
    formik.values.previousSurgeries;

  // Helper function for text input fields
  const renderTextField = (name, label, placeholder = '', multiline = false, rows = 3) => {
    const hasError = formik.touched[name] && Boolean(formik.errors[name]);
    
    return (
      <Box>
        <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#374151' }}>
          {label}
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
          multiline={multiline}
          rows={multiline ? rows : 1}
          sx={{
            '& .MuiOutlinedInput-root': {
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

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1100px',
        mx: 'auto',
      }}
    >
      <FormHeader
        title="Medical History"
        subtitle="Add information about your past treatments, medications, and health conditions."
      />

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          {/* Allergies */}
          <Grid size={{ xs: 12 }}>
            {renderTextField(
              'allergies', 
              'Allergies', 
              'List any allergies you have (if any)',
              true,
              3
            )}
          </Grid>

          {/* Current Medications */}
          <Grid size={{ xs: 12 }}>
            {renderTextField(
              'currentMedications', 
              'Current Medications', 
              'List your current medications with dosage',
              true,
              3
            )}
          </Grid>

          {/* Existing Conditions */}
          <Grid size={{ xs: 12 }}>
            {renderTextField(
              'existingConditions', 
              'Existing Conditions', 
              'Enter any Conditions (e.g., diabetes, hypertension, asthma, etc.)',
              true,
              3
            )}
          </Grid>

          {/* Previous Surgeries */}
          <Grid size={{ xs: 12 }}>
            {renderTextField(
              'previousSurgeries', 
              'Previous Surgeries', 
              'Enter details of any past surgeries (if any)',
              true,
              3
            )}
          </Grid>


          {/* Navigation Buttons */}
          <Grid size={{ xs: 12 }}>
            <FormActions
             onSkip={() => onNext(formik.values)}
              onBack={onBack}
              nextText="Add Insurance Information"
              disabled={false}
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default MedicalHistory;