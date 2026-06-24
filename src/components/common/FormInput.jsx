import React from 'react';
import { TextField, InputAdornment, Typography } from '@mui/material';

const FormInput = ({ 
  label, 
  required, 
  name, 
  placeholder, 
  icon: Icon, 
  formik,
  type = 'text',
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
        type={type}
        name={name}
        placeholder={placeholder}
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
      />
    </>
  );
};

export default FormInput;