import {
  Button,
  Box,
} from "@mui/material";

function FormActions({
  onBack,
  nextText,
  disabled,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 2,
      }}
    >
      {onBack && (
        <Button onClick={onBack}>
          Go Back
        </Button>
      )}

      <Button
        type="submit"
        variant="contained"
        disabled={disabled}
      >
        {nextText}
      </Button>
    </Box>
  );
}

export default FormActions;