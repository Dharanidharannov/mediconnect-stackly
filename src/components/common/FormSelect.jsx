import React from 'react';
import { TextField, InputAdornment, MenuItem, Typography } from '@mui/material';

const FormSelect = ({ 
  label, 
  required, 
  name, 
  options, 
  icon: Icon, 
  formik,
  placeholder,
  ...props 
}) => {
  const { values, handleChange, handleBlur, touched, errors } = formik;
  
  return (
    <>
      <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#374151' }}>
        {label} {required && <span style={{ color: '#ff4d4f' }}>*</span>}
      </Typography>
      <TextField
        fullWidth
        select
        name={name}
        value={values[name] || ''}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched[name] && Boolean(errors[name])}
        helperText={touched[name] && errors[name]}
        slotProps={{
          input: {
            startAdornment: Icon && (
             <InputAdornment position="start">
               {typeof Icon === "string" ? (
                 <img
                   src={Icon}
                   alt="icon"
                   width="20"
                   height="20"
                 />
               ) : (
                 <Icon
                   sx={{
                     color: '#9ca3af',
                     fontSize: 20,
                   }}
                 />
               )}
             </InputAdornment>
            ),
          },
          select: {
            displayEmpty: true,
            renderValue: (selected) => {
              if (!selected) {
                return <span style={{ color: '#9ca3af' }}>{placeholder || `Select your ${label.toLowerCase()}`}</span>;
              }
              return selected;
            },
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            height: 56,
          },
          '& .MuiFormHelperText-root': {
            color: '#ff4d4f',
            marginLeft: 0,
            marginTop: '4px',
            fontWeight: 500,
          },
        }}
        {...props}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default FormSelect;