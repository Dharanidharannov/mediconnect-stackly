import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box, Link, Typography } from '@mui/material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import theme from './theme';

// Sidebar layout
import Sidebar from './components/Sidebar';

// Steps components
import PersonalDetails from './components/forms/PersonalDetails';


function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showProfileSummary, setShowProfileSummary] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    fullName: '',
    dob: '',
    phoneNumber: '+91 9876 543 210',
    emailAddress: '',
    gender: '',
    bloodGroup: '',
    state: '',
    currentCity: '',
    
    // Step 2: Additional Info
    emergencyName: '',
    emergencyPhone: '',
    relationship: '',
    occupation: '',
    maritalStatus: '',
    address: '',

    // Step 3: Medical History
    chronicConditions: [],
    currentMedications: '',
    allergies: '',
    surgeries: '',
    smoking: '',
    alcohol: '',
    exercise: '',

    // Step 4: Insurance Info
    hasInsurance: 'No',
    providerName: '',
    policyNumber: '',
    groupNumber: '',
    policyHolderName: '',
    relationshipToHolder: '',
    expiryDate: '',

    // Step 5: Health Records
    uploadedFiles: [],

    // Step 6: Review & Complete (Password + Patient ID)
    patientId: '7G3H81',
    password: '',
  });

  const handleNextStep = (stepData) => {
    setFormData((prev) => ({ ...prev, ...stepData }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleBackStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleLogout = () => {
    // Reset form state and go back to step 1
    setFormData({
      fullName: '',
      dob: '',
      phoneNumber: '+91 9876 543 210',
      emailAddress: '',
      gender: '',
      bloodGroup: '',
      state: '',
      currentCity: '',
      emergencyName: '',
      emergencyPhone: '',
      relationship: '',
      occupation: '',
      maritalStatus: '',
      address: '',
      chronicConditions: [],
      currentMedications: '',
      allergies: '',
      surgeries: '',
      smoking: '',
      alcohol: '',
      exercise: '',
      hasInsurance: 'No',
      providerName: '',
      policyNumber: '',
      groupNumber: '',
      policyHolderName: '',
      relationshipToHolder: '',
      expiryDate: '',
      uploadedFiles: [],
      patientId: '7G3H81',
      password: '',
    });
    setShowProfileSummary(false);
    setCurrentStep(1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalDetails initialValues={formData} onNext={handleNextStep} />;
          
      default:
        return <PersonalDetails initialValues={formData} onNext={handleNextStep} />;
    }
  };

  const isOnboardingStep = currentStep >= 1 && currentStep <= 6;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {isOnboardingStep ? (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '100vh' }}>
          {/* Left Sidebar timeline panel */}
          <Sidebar currentStep={currentStep} />

          {/* Right Main Form Container */}
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fcfdfd' }}>
            
            {/* Top Contact Support header bar */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '24px 32px 12px',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <HeadsetMicIcon sx={{ color: '#4b5563', fontSize: 20 }} />
                <Box sx={{ display: 'inline-flex', flexDirection: 'row', gap: 0.5 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    Need Help?
                  </Typography>
                  <Link
                    href="#"
                    underline="always"
                    sx={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#0a6650',
                      '&:hover': { color: '#084f3e' },
                    }}
                  >
                    Contact Support
                  </Link>
                </Box>
              </Box>
            </Box>

            {/* Active Onboarding Form Panel */}
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: { xs: '20px 24px', sm: '32px 48px', md: '48px 64px' },
              }}
            >
              {renderStep()}
            </Box>
          </Box>
        </Box>
      ) : (
        // Steps 7 (Success Page/Profile Summary) and Step 8 (Dashboard)
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', py: currentStep === 8 ? 0 : 4 }}>
          <Box sx={{ width: '100%' }}>{renderStep()}</Box>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;