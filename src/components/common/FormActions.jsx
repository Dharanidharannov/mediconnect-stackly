import React from "react";
import { Button, Box } from "@mui/material";

function FormActions({
  onBack,
  onSkip,
  nextText,
  disabled,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        mt: 4,
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {/* Left Side - Skip */}
      <Box>
        {onSkip && (
          <Button
            onClick={onSkip}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              color: "#0A6650",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#f3faf8",
              },
            }}
          >
            Skip for now
          </Button>
        )}
      </Box>

      {/* Right Side - Back + Next */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {onBack && (
          <Button
            onClick={onBack}
            sx={{
              minWidth: "120px",
              height: "56px",
              borderRadius: "12px",
              textTransform: "none",
              fontWeight: 600,
              color: "#6b7280",
              border: "1px solid #d1d5db",
              backgroundColor: "transparent",
              "&:hover": {
                borderColor: "#0a6650",
                color: "#0a6650",
                backgroundColor: "#f3faf8",
              },
            }}
          >
            Go Back
          </Button>
        )}

        <Button
          type="submit"
          variant="contained"
          disabled={disabled}
          sx={{
            minWidth: "240px",
            height: "56px",
            borderRadius: "12px",
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "none",
            backgroundColor: "#0a6650",
            "&:hover": {
              backgroundColor: "#085a47",
            },
            "&.Mui-disabled": {
              backgroundColor: "#d1d5db",
              color: "#9ca3af",
            },
          }}
        >
          {nextText}
        </Button>
      </Box>
    </Box>
  );
}

export default FormActions;