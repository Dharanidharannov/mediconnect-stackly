// AccountCreated.jsx
import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  Alert,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  Email as EmailIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';
import mediconnectlogo from '../../assets/Logo.svg';

const AccountCreated = ({ initialValues, onNext, onBack }) => {
  const patientId = initialValues?.patientId || '7N6S93';
  const email = initialValues?.emailAddress || 'abcd123@gmail.com';

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '800px',
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        py: 4,
      }}
    ><Box
  sx={{
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    mb: { xs: 2, md: 4 },
  }}
>
  <img
    src={mediconnectlogo}
    alt="MediConnect"
    style={{
      width: "200px",
      height: "auto",
      display: "block",
    }}
  />
</Box>
               

      <Paper
        elevation={0}
        sx={{
          width: '80%',
          p: { xs: 4, sm: 6 },
          borderRadius: '16px',
          backgroundColor: '#ffffff',
          border: '1px solid #e5e7eb',
          textAlign: 'center',
        }}
      >

        {/* Success Icon */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3,
          }}
        >
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: '#e8f5e9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CheckCircleIcon
              sx={{
                fontSize: 48,
                color: '#0a6650',
              }}
            />
          </Box>
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: '#111827',
            mb: 2,
          }}
        >
          Account Created Successfully!
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: '#6b7280',
            mb: 4,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          Your patient account has been created successfully. You can now access your healthcare dashboard and manage your records securely.
        </Typography>

        {/* Unique ID Section */}
        <Box
          sx={{
            backgroundColor: '#f9fafb',
            borderRadius: '12px',
            p: 3,
            mb: 3,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              color: '#374151',
              mb: 2,
            }}
          >
            Unique ID
          </Typography>

          {/* Patient ID Display */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
              mb: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                color: '#374151',
              }}
            >
              PAT
            </Typography>
            {patientId.split('').map((char, index) => (
              <Paper
                key={index}
                sx={{
                  width: 48,
                  height: 48,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#ffffff',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: '#111827',
                }}
              >
                {char}
              </Paper>
            ))}
          </Box>

          {/* Email Note - Using the email from Personal Details */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <EmailIcon
              sx={{
                fontSize: 16,
                color: '#6b7280',
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: '#6b7280',
              }}
            >
              Your unique ID has also been sent to {email}
            </Typography>
          </Box>
        </Box>

        {/* Note - Updated to match Figma exactly */}
        <Box
          severity="info"
          sx={{
            mb: 4,
            backgroundColor: '#f0fdf4',
            border: '1px solid #d1fae5',
            borderRadius: '8px',
            '& .MuiAlert-message': {
              color: '#374151',
              width: '100%',
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
            }}
          >
            Use this ID or your registered phone number to securely access your healthcare workspace.
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
          }}
        >
          <Button
            variant="outlined"
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              color: '#0a6650',
              borderColor: '#0a6650',
              px: 4,
              py: 1.5,
              '&:hover': {
                borderColor: '#08543d',
                backgroundColor: '#f0fdf4',
              },
            }}
          >
            View Profile
          </Button>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              backgroundColor: '#0a6650',
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#08543d',
              },
            }}
          >
            Go to Dashboard
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AccountCreated;