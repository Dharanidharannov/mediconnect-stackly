import React from 'react';
import { Box, Typography, Card, LinearProgress, useTheme } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ShieldIcon from '@mui/icons-material/Shield';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import mediconnectlogo from '../assets/Logo.svg';

const steps = [
  { label: 'Personal Information', labelCompleted: 'Personal Details', icon: PersonIcon },
  { label: 'Additional Information', labelCompleted: 'Additional Information', icon: InfoIcon },
  { label: 'Medical History', labelCompleted: 'Medical History', icon: MedicalServicesIcon },
  { label: 'Insurance Information', labelCompleted: 'Insurance Information', icon: ShieldIcon },
  { label: 'Health Records', labelCompleted: 'Health Records', icon: CloudUploadIcon },
  { label: 'Review & Complete', labelCompleted: 'Review & Complete', icon: AssignmentTurnedInIcon },
];

const progressMap = {
  1: 10,
  2: 30,
  3: 45,
  4: 60,
  5: 75,
  6: 90,
};

const Sidebar = ({ currentStep }) => {
  const theme = useTheme();
  const progressPercent = progressMap[currentStep] || 100;
  const activeStepObj = steps[currentStep - 1] || steps[0];

  return (
    <Box
      sx={{
        width: { xs: '100%', md: 320 },
        height: { xs: 'auto', md: '100%' },
        minHeight: { md: '100vh' },
        borderRight: { xs: 'none', md: '1px solid #E5E7EB' },
        borderBottom: { xs: '1px solid', md: 'none' },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', md: 'column' },
        alignItems: { xs: 'stretch', sm: 'center', md: 'stretch' },
        justifyContent: 'space-between',
        padding: { xs: '20px 20px', sm: '24px 32px', md: '32px 24px' },
        backgroundColor: '#ffffff',
        gap: { xs: 2.5, sm: 4, md: 0 },
      }}
    >
      {/* Brand logo & Desktop timeline */}
       <Box sx={{ flexGrow: { sm: 1, md: 0 }, display: 'flex', flexDirection: 'column' }}>
        {/* Logo Section - Added here */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: { xs: 2, md: 4 },
            px: 1,
          }}
        >
          <img
            src={mediconnectlogo}
            alt="MediConnect"
            style={{
              width: "200px",
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
       
        

        {/* Desktop timeline view - hidden on mobile/tablet */}
        <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'relative', mt: 4 }}>
          {/* Vertical line indicator */}
          <Box
            sx={{
              position: 'absolute',
              left: 21,
              top: 24,
              bottom: 24,
              width: 2,
              backgroundColor: '#e5e7eb',
              zIndex: 1,
            }}
          />

          {steps.map((step, idx) => {
            const stepNum = idx + 1;
            const isCompleted = currentStep > stepNum;
            const isActive = currentStep === stepNum;
            const StepIcon = step.icon;

            return (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: '24px',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                {/* Timeline Circle Badge: Checkmark if complete, Icon if active/pending */}
                {isCompleted ? (
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      borderRadius: '20%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2.5,
                      ml: 0.8,
                      backgroundColor: '#0ab38c',
                      color: '#ffffff',
                      boxShadow: '0 2px 4px rgba(10, 179, 140, 0.2)',
                    }}
                  >
                    <CheckIcon sx={{ fontSize: 16, strokeWidth: 3 }} />
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2.5,
                      ml: 0.8,
                      border: '2px solid',
                      backgroundColor: isActive ? '#0a6650' : '#ffffff',
                      borderColor: isActive ? '#0a6650' : '#d1d5db',
                      color: isActive ? '#ffffff' : '#9ca3af',
                      transition: 'all 0.3s ease',
                      boxShadow: isActive ? '0 2px 8px rgba(10, 102, 80, 0.3)' : 'none',
                    }}
                  >
                    <StepIcon sx={{ fontSize: 14 }} />
                  </Box>
                )}

                {/* Step Item label container */}
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    backgroundColor: isActive ? 'primary.light' : 'transparent',
                    border: isActive ? '1px solid' : '1px solid transparent',
                    borderColor: isActive ? 'rgba(10, 102, 80, 0.15)' : 'transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: isActive || isCompleted ? 600 : 500,
                      color: isActive ? '#0a6650' : isCompleted ? '#374151' : '#9ca3af',
                      fontSize: '0.875rem',
                    }}
                  >
                    {isCompleted ? step.labelCompleted : step.label}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Mobile/Tablet Step Header Info - hidden on desktop */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, flexGrow: { xs: 0, sm: 2 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Typography variant="body2" sx={{ fontWeight: 700, color: '#0a6650', backgroundColor: '#f3faf8', p: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>
            Step {currentStep} of 6
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 750, color: '#374151' }}>
            {activeStepObj ? activeStepObj.label : ''}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <LinearProgress
            variant="determinate"
            value={progressPercent}
            sx={{
              flexGrow: 1,
              height: 6,
              borderRadius: 3,
              backgroundColor: '#e5e7eb',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#0a6650',
                borderRadius: 3,
              },
            }}
          />
          <Typography variant="caption" sx={{ fontWeight: 800, color: '#0a6650' }}>
            {progressPercent}%
          </Typography>
        </Box>
      </Box>

      {/* Progress Card - hidden on mobile, compact on tablet, full on desktop */}
      <Card
        variant="outlined"
        sx={{
          padding: { xs: '12px 16px', sm: '16px', md: '20px' },
          borderRadius: '16px',
          borderColor: '#e5e7eb',
          backgroundColor: '#fcfdfd',
          boxShadow: 'none',
          display: { xs: 'none', sm: 'block', md: 'block' },
          width: { sm: 240, md: 'auto' },
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: { xs: 'block', md: 'block' } }}>
          <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', mb: { xs: 0.5, md: 1 } }}>
            Profile Progress
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'baseline', mb: { xs: 0.5, md: 1 } }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#0a6650', mr: 0.5, fontSize: { sm: '1.15rem', md: '1.25rem' } }}>
              {progressPercent}%
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
              Complete
            </Typography>
          </Box>

          {/* Progress bar (desktop only) */}
          <LinearProgress
            variant="determinate"
            value={progressPercent}
            sx={{
              display: { xs: 'none', md: 'block' },
              height: 8,
              borderRadius: 4,
              backgroundColor: '#e5e7eb',
              '& .MuiLinearProgress-bar': {
                backgroundColor: '#0a6650',
                borderRadius: 4,
              },
              mb: 2,
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <AccessTimeIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.7rem' }}>
            Est. Time: 2-3 Mins
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Sidebar;
