import {
  Paper,
  Typography,
} from "@mui/material";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlineOutlined";

function RequiredInfo() {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <ErrorOutlineIcon color="error" />

      <Typography>
        <span style={{ color: "red" }}>
          *
        </span>
        {" "}
        These fields are required!
      </Typography>
    </Paper>
  );
}

export default RequiredInfo;