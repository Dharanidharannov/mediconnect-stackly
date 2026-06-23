import { Box, Typography } from "@mui/material";

function FormHeader({ title, subtitle }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 1,
          fontSize: "1.5rem",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
      >
        {subtitle}
      </Typography>
    </Box>
  );
}

export default FormHeader;