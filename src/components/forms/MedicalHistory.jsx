import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Typography,
  Grid,
  TextField,
  Paper,
  Chip,
  IconButton,
  InputAdornment,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

import FormHeader from '../common/FormHeader';
import RequiredInfo from '../common/RequiredInfo';
import FormActions from '../common/FormActions';

const validationSchema = Yup.object().shape({
  allergies: Yup.array()
    .of(Yup.string())
    .optional(),
  currentMedications: Yup.string()
    .max(500, 'Maximum 500 characters allowed')
    .optional(),
  existingConditions: Yup.array()
    .of(Yup.string())
    .optional(),
  previousSurgeries: Yup.string()
    .max(500, 'Maximum 500 characters allowed')
    .optional(),
});

const MedicalHistory = ({ initialValues, onNext, onBack }) => {
  // State for allergies
  const [allergyInput, setAllergyInput] = useState('');
  const [allergies, setAllergies] = useState(initialValues.allergies || []);

  // State for existing conditions
  const [conditionInput, setConditionInput] = useState('');
  const [existingConditions, setExistingConditions] = useState(initialValues.existingConditions || []);

  const formik = useFormik({
    initialValues: {
      allergies: initialValues.allergies || [],
      currentMedications: initialValues.currentMedications || '',
      existingConditions: initialValues.existingConditions || [],
      previousSurgeries: initialValues.previousSurgeries || '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Update arrays from state before submitting
      const updatedValues = {
        ...values,
        allergies: allergies,
        existingConditions: existingConditions,
      };
      onNext(updatedValues);
    },
  });

  // Count total characters across text fields
  const totalCharacters = 
    (formik.values.currentMedications || '').length +
    (formik.values.previousSurgeries || '').length;

  const maxCharacters = 500;
  const remainingCharacters = maxCharacters - totalCharacters;

  // Handle adding allergy
  const handleAddAllergy = () => {
    const trimmedInput = allergyInput.trim();
    if (trimmedInput && !allergies.includes(trimmedInput)) {
      const newAllergies = [...allergies, trimmedInput];
      setAllergies(newAllergies);
      formik.setFieldValue('allergies', newAllergies);
      setAllergyInput('');
    }
  };

  // Handle removing allergy
  const handleRemoveAllergy = (allergyToRemove) => {
    const newAllergies = allergies.filter((allergy) => allergy !== allergyToRemove);
    setAllergies(newAllergies);
    formik.setFieldValue('allergies', newAllergies);
  };

  // Handle adding condition
  const handleAddCondition = () => {
    const trimmedInput = conditionInput.trim();
    if (trimmedInput && !existingConditions.includes(trimmedInput)) {
      const newConditions = [...existingConditions, trimmedInput];
      setExistingConditions(newConditions);
      formik.setFieldValue('existingConditions', newConditions);
      setConditionInput('');
    }
  };

  // Handle removing condition
  const handleRemoveCondition = (conditionToRemove) => {
    const newConditions = existingConditions.filter((condition) => condition !== conditionToRemove);
    setExistingConditions(newConditions);
    formik.setFieldValue('existingConditions', newConditions);
  };

  // Handle Enter key press
  const handleAllergyKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddAllergy();
    }
  };

  const handleConditionKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCondition();
    }
  };

  // Helper function for rendering chip section
  const renderChipSection = (
    title,
    items,
    inputValue,
    setInputValue,
    handleAdd,
    handleRemove,
    handleKeyPress,
    placeholder,
    exampleText
  ) => {
    return (
      <Paper
        elevation={0}
        sx={{
          p: 2,
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          backgroundColor: '#ffffff',
          '&:hover': {
            borderColor: '#d1d5db',
          },
        }}
      >
        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontWeight: 600, 
            mb: 1.5, 
            color: '#111827',
            fontSize: '1rem',
          }}
        >
          {title}
        </Typography>
        
        {/* Input field for adding items */}
        <TextField
          fullWidth
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton 
                    onClick={handleAdd}
                    disabled={!inputValue.trim()}
                    sx={{
                      backgroundColor: inputValue.trim() ? '#3b82f6' : '#e5e7eb',
                      color: '#ffffff',
                      '&:hover': {
                        backgroundColor: inputValue.trim() ? '#2563eb' : '#e5e7eb',
                      },
                      '&.Mui-disabled': {
                        backgroundColor: '#e5e7eb',
                        color: '#9ca3af',
                      },
                      width: 32,
                      height: 32,
                    }}
                  >
                    <AddIcon sx={{ fontSize: 20 }} />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          sx={{
            mb: 2,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#fafafa',
              '&:hover': {
                backgroundColor: '#ffffff',
              },
              '&.Mui-focused': {
                backgroundColor: '#ffffff',
              },
              '& input': {
                fontSize: '0.95rem',
                color: '#1f2937',
              },
            },
          }}
        />

        {/* Chips container */}
        {items.length > 0 ? (
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              mt: 1,
              p: 1.5
            }}
          >
            {items.map((item, index) => (
              <Chip
                key={index}
                label={item}
                onDelete={() => handleRemove(item)}
                deleteIcon={<CloseIcon sx={{ fontSize: 16 }} />}
                sx={{
                  backgroundColor: '#e5e7eb',
                  color: '#1f2937',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  '& .MuiChip-label': {
                    px: 1,
                  },
                  '& .MuiChip-deleteIcon': {
                    color: '#6b7280',
                    '&:hover': {
                      color: '#ef4444',
                    },
                  },
                }}
              />
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              p: 1.5,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" sx={{ color: '#9ca3af', fontStyle: 'italic' }}>
              No items added yet
            </Typography>
          </Box>
        )}

        <Typography 
          variant="caption" 
          sx={{ 
            display: 'block', 
            mt: 1, 
            color: '#9ca3af',
            fontSize: '0.8rem',
          }}
        >
          {exampleText}
        </Typography>
      </Paper>
    );
  };

  // Helper function for text input fields
  const renderTextField = (name, label, placeholder = '', exampleText = '') => {
    const hasError = formik.touched[name] && Boolean(formik.errors[name]);
    const currentLength = (formik.values[name] || '').length;
    const isOverLimit = currentLength > 500;
    
    return (
      <Paper
        elevation={0}
        sx={{
          p: 2,
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          backgroundColor: '#ffffff',
          '&:hover': {
            borderColor: '#d1d5db',
          },
        }}
      >
        <Typography 
          variant="subtitle1" 
          sx={{ 
            fontWeight: 600, 
            mb: 1, 
            color: '#111827',
            fontSize: '1rem',
          }}
        >
          {label}
        </Typography>
        
        <Box sx={{ position: 'relative' }}>
          <TextField
            fullWidth
            name={name}
            placeholder={placeholder}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={hasError || isOverLimit}
            helperText={(hasError || isOverLimit) && formik.errors[name]}
            multiline
            rows={3}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fafafa',
                '&:hover': {
                  backgroundColor: '#ffffff',
                },
                '&.Mui-focused': {
                  backgroundColor: '#ffffff',
                },
                '& textarea': {
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  color: '#1f2937',
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

        {exampleText && (
          <Typography 
            variant="caption" 
            sx={{ 
              display: 'block', 
              mt: 1, 
              color: '#9ca3af',
              fontSize: '0.8rem',
            }}
          >
            {exampleText}
          </Typography>
        )}
      </Paper>
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
          {/* Allergies - with chips */}
          <Grid size={{ xs: 12 }}>
            {renderChipSection(
              'Allergies',
              allergies,
              allergyInput,
              setAllergyInput,
              handleAddAllergy,
              handleRemoveAllergy,
              handleAllergyKeyPress,
              'Enter allergy (e.g., dust, pollen, seafood)',
            )}
          </Grid>

          {/* Current Medications */}
          <Grid size={{ xs: 12 }}>
            {renderTextField(
              'currentMedications', 
              'Current Medications', 
              'Enter medications you are currently taking',
              'Example: Metformin 500 mg twice daily'
            )}
          </Grid>

          {/* Existing Conditions - with chips */}
          <Grid size={{ xs: 12 }}>
            {renderChipSection(
              'Existing Conditions',
              existingConditions,
              conditionInput,
              setConditionInput,
              handleAddCondition,
              handleRemoveCondition,
              handleConditionKeyPress,
              'Enter condition (e.g., diabetes, hypertension, asthma)',
              
            )}
          </Grid>

          {/* Previous Surgeries */}
          <Grid size={{ xs: 12 }}>
            {renderTextField(
              'previousSurgeries', 
              'Previous Surgeries', 
              'Enter details of any past surgeries (if any)',

            )}
          </Grid>

          {/* Character Counter */}
          <Grid size={{ xs: 12 }}>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'flex-end',
                mt: -1,
                mb: 2,
              }}
            >
              <Typography 
                variant="body2" 
                sx={{ 
                  color: remainingCharacters < 0 ? '#ff4d4f' : '#6b7280',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                }}
              >
                {remainingCharacters < 0 ? '0' : remainingCharacters}/500 Characters left
              </Typography>
            </Box>
          </Grid>

          {/* Required fields indicator box */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <RequiredInfo />
          </Grid>

          {/* Navigation Buttons */}
          <Grid size={{ xs: 12 }}>
            <FormActions
              onSkip={() => {
                const values = {
                  ...formik.values,
                  allergies: allergies,
                  existingConditions: existingConditions,
                };
                onNext(values);
              }}
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