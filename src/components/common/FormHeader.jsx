import { Box, Typography, Link } from "@mui/material";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

function FormHeader({ title, subtitle }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        mb: 4,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "2rem",
            color: "#111827",
            mb: 1,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#666666",
            fontSize: "16px",
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <HeadsetMicIcon sx={{ color: "#4B5563", fontSize: 24 }} />

        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#6B7280",
              lineHeight: 1.2,
            }}
          >
            Need Help?
          </Typography>

          <Link
            href="#"
            underline="always"
            sx={{
              color: "#0A6650",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Contact Support
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default FormHeader;