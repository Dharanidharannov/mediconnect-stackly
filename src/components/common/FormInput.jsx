import {
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";

const FormInput = ({
  label,
  required = false,
  name,
  placeholder,
  icon: Icon,
  formik,
  type = "text",
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
          <span style={{ color: "#ff4d4f" }}>
            {" "}*
          </span>
        )}
      </Typography>

      <TextField
        fullWidth
        name={name}
        type={type}
        placeholder={placeholder}
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
        InputProps={{
          startAdornment: Icon && (
            <InputAdornment position="start">
              <Icon
                sx={{
                  color: "#9ca3af",
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default FormInput;