import React from "react";
import {
  TextField,
  Typography,
  MenuItem,
  InputAdornment,
} from "@mui/material";

const FormSelect = ({
  label,
  required = false,
  name,
  options = [],
  icon: Icon,
  formik,
  placeholder,
}) => {
  return (
    <>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
          mb: 1,
          color: "#374151",
        }}
      >
        {label}
        {required && (
          <span style={{ color: "#ff4d4f" }}> *</span>
        )}
      </Typography>

      <TextField
        select
        fullWidth
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched[name] &&
          Boolean(formik.errors[name])
        }
        helperText={
          formik.touched[name] &&
          formik.errors[name]
        }
        SelectProps={{
          displayEmpty: true,
          renderValue: (selected) => {
            if (!selected) {
              return (
                <span
                  style={{
                    color: "#9ca3af",
                  }}
                >
                  {placeholder || `Select ${label}`}
                </span>
              );
            }
            return selected;
          },
        }}
        InputProps={{
          startAdornment: Icon ? (
            <InputAdornment position="start">
              <Icon
                sx={{
                  color: "#9ca3af",
                  fontSize: 20,
                }}
              />
            </InputAdornment>
          ) : null,
        }}
        sx={{
          width: "100%",

          "& .MuiOutlinedInput-root": {
            height: 56,
            borderRadius: "12px",
            backgroundColor: "#fff",

            "& fieldset": {
              borderColor: "#d1d5db",
            },

            "&:hover fieldset": {
              borderColor: "#9ca3af",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#0a6650",
              borderWidth: "2px",
            },
          },

          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
          },

          "& .MuiFormHelperText-root": {
            color: "#ff4d4f",
            marginLeft: 0,
            marginTop: "4px",
            fontWeight: 500,
          },
        }}
      >
        <MenuItem value="" disabled>
          {placeholder || `Select ${label}`}
        </MenuItem>

        {options.map((item) => (
          <MenuItem
            key={item}
            value={item}
          >
            {item}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
};

export default FormSelect;