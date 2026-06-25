import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  LinearProgress,
  Alert,
  Chip,
  Stack,
  Button,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Warning as WarningIcon,
  HelpOutlineOutlined as HelpOutlineIcon,
} from '@mui/icons-material';

import FormHeader from '../common/FormHeader';

const ReviewComplete = ({ initialValues, onNext, onBack }) => {
  const [patientId, setPatientId] = useState(initialValues?.patientId || '7G3H81');
  const [password, setPassword] = useState(initialValues?.password || '');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isIdAvailable, setIsIdAvailable] = useState(false);
  const [isIdTaken, setIsIdTaken] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState('Weak');

  // Password strength checker
  const checkPasswordStrength = (pass) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass) || /[!@#$%^&*(),.?":{}|<>]/.test(pass)) score++;
    
    if (score === 4) return 'Very Good';
    if (score === 3) return 'Good';
    if (score === 2) return 'Weak';
    return 'Weak';
  };

  // Password requirements
  const getPasswordRequirements = () => {
    return [
      { text: 'At least 8 Characters', met: password.length >= 8 },
      { text: 'At least one small letter', met: /[a-z]/.test(password) },
      { text: 'At least one capital letter', met: /[A-Z]/.test(password) },
      { text: 'At least one number or symbol', met: /[0-9]/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password) },
    ];
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordStrength(checkPasswordStrength(newPassword));
  };

  const handlePatientIdChange = (e) => {
    const newId = e.target.value;
    setPatientId(newId);
    // Simulate ID availability check
    if (newId === '7G3H81') {
      setIsIdTaken(true);
      setIsIdAvailable(false);
    } else if (newId.length >= 3) {
      setIsIdTaken(false);
      setIsIdAvailable(true);
    } else {
      setIsIdTaken(false);
      setIsIdAvailable(false);
    }
  };

  const handleSubmit = () => {
    onNext({
      patientId,
      password,
    });
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 'Very Good') return '#0ab38c';
    if (passwordStrength === 'Good') return '#f59e0b';
    return '#ff4d4f';
  };

  const isPasswordValid = password.length >= 8 && 
    /[a-z]/.test(password) && 
    /[A-Z]/.test(password) && 
    (/[0-9]/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password));

  const isFormValid = patientId.length > 0 && isPasswordValid && password === confirmPassword;

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1100px',
        mx: 'auto',
      }}
    >
      <FormHeader
        title="Review & Complete"
        subtitle="Review your information and create your account credentials to securely access your healthcare services."
      />

      {/* Patient Unique ID Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
          Create Your Unique Patient ID
        </Typography>
        <Typography variant="body2" sx={{ color: '#6b7280', mb: 3 }}>
          Your MediConnect ID is a unique username that lets you securely sign in and access appointments, reports, prescriptions, and healthcare services.
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1 }}>
            Patient Unique ID
          </Typography>
          
          {/* Patient ID Display */}
          <Paper
            sx={{
              p: 3,
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              mb: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Typography variant="body1" sx={{ fontWeight: 600, color: '#374151' }}>
                PAT
              </Typography>
              {patientId.split('').map((char, index) => (
                <Paper
                  key={index}
                  sx={{
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontWeight: 600,
                    fontSize: '16px',
                    color: '#111827',
                  }}
                >
                  {char}
                </Paper>
              ))}
            </Box>
          </Paper>

          {isIdTaken && (
            <Alert 
              severity="error" 
              icon={<ErrorIcon />}
              sx={{ mb: 1 }}
            >
              This ID is already taken
            </Alert>
          )}

          {!isIdTaken && isIdAvailable && (
            <Alert 
              severity="success" 
              icon={<CheckCircleIcon />}
              sx={{ mb: 1 }}
            >
              PAT-{patientId} is available
            </Alert>
          )}

          {!isIdTaken && !isIdAvailable && patientId.length > 0 && (
            <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 1 }}>
              This is auto generated ID, you can select your own ID
            </Typography>
          )}

          <TextField
            fullWidth
            placeholder="Enter your Patient ID"
            value={patientId}
            onChange={handlePatientIdChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f9fafb',
                '&:hover': {
                  backgroundColor: '#ffffff',
                },
                '&.Mui-focused': {
                  backgroundColor: '#ffffff',
                },
              },
            }}
          />
        </Box>

        {/* Suggestions */}
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1 }}>
            Suggestions
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {['PAT-7G3H81', 'PAT-7G3H81', 'PAT-7G3H81', 'PAT-7G3H81'].map((suggestion, index) => (
              <Chip
                key={index}
                label={suggestion}
                onClick={() => setPatientId(suggestion.replace('PAT-', ''))}
                sx={{
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  fontWeight: 500,
                  borderRadius: '6px',
                  '&:hover': {
                    backgroundColor: '#e5e7eb',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Password Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#111827', mb: 1 }}>
          Create a strong password
        </Typography>
        <Typography variant="body2" sx={{ color: '#6b7280', mb: 3 }}>
          Create a strong password with a mix of letters, numbers and symbols.
        </Typography>

        {/* Create New Password */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1 }}>
            Create New Password
          </Typography>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your new password"
            value={password}
            onChange={handlePasswordChange}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f9fafb',
                '&:hover': {
                  backgroundColor: '#ffffff',
                },
                '&.Mui-focused': {
                  backgroundColor: '#ffffff',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          
          {password && (
            <Box sx={{ mt: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ flex: 1 }}>
                  <LinearProgress
                    variant="determinate"
                    value={passwordStrength === 'Very Good' ? 100 : passwordStrength === 'Good' ? 75 : 50}
                    sx={{
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: '#e5e7eb',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: getPasswordStrengthColor(),
                        borderRadius: 2,
                      },
                    }}
                  />
                </Box>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: getPasswordStrengthColor(), 
                    fontWeight: 600,
                    minWidth: 70,
                  }}
                >
                  {passwordStrength}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        {/* Confirm Password */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1 }}>
            Confirm Password
          </Typography>
          <TextField
            fullWidth
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPassword.length > 0 && password !== confirmPassword}
            helperText={
              confirmPassword.length > 0 && password !== confirmPassword 
                ? 'Confirm Password should be same as entered password!' 
                : ''
            }
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f9fafb',
                '&:hover': {
                  backgroundColor: '#ffffff',
                },
                '&.Mui-focused': {
                  backgroundColor: '#ffffff',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Password Requirements */}
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1 }}>
            Should Contain:
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            {getPasswordRequirements().map((req, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {req.met ? (
                  <CheckCircleIcon sx={{ fontSize: 16, color: '#0ab38c' }} />
                ) : (
                  <Box sx={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid #d1d5db' }} />
                )}
                <Typography 
                  variant="caption" 
                  sx={{ 
                    color: req.met ? '#0ab38c' : '#6b7280',
                    fontWeight: req.met ? 600 : 400,
                  }}
                >
                  {req.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Profile Progress */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151' }}>
            Profile Progress
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#0a6650' }}>
            90% Complete
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={90}
          sx={{
            height: 6,
            borderRadius: 3,
            backgroundColor: '#e5e7eb',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#0a6650',
              borderRadius: 3,
            },
          }}
        />
        <Typography variant="caption" sx={{ color: '#6b7280', mt: 0.5, display: 'block' }}>
          Estimated Time: 2-3 Minutes
        </Typography>
      </Box>

      {/* Navigation Buttons */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 4, pt: 2, borderTop: '1px solid #e5e7eb' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Button
            onClick={onBack}
            sx={{
              textTransform: 'none',
              color: '#6b7280',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#374151',
              },
            }}
          >
            Go Back
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              color: '#6b7280',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#374151',
              },
            }}
          >
            Need Help?
          </Button>
          <Typography variant="body2" sx={{ color: '#6b7280' }}>
            Contact Support
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!isFormValid}
          sx={{
            textTransform: 'none',
            backgroundColor: '#0a6650',
            fontWeight: 600,
            px: 4,
            py: 1.5,
            '&:hover': {
              backgroundColor: '#08543d',
            },
            '&:disabled': {
              backgroundColor: '#d1d5db',
            },
          }}
        >
          Create Profile
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewComplete;