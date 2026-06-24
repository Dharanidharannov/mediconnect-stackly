import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';

// Sidebar layout
import Sidebar from './components/Sidebar';

// Steps components
import PersonalDetails from './components/forms/PersonalDetails';
import AdditionalInformation from './components/forms/AdditionalInformation';
import MedicalHistory from './components/forms/MedicalHistory';

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
    height: '',
    weight: '',
    bloodPressure: '',
    bloodSugar: '',
    physicalActivityLevel: '',
    dietaryPreference: '',
    smokingStatus: '',
    alcoholConsumption: '',
    emergencyContactName: '',
    emergencyContactNumber: '+91 ',
    emergencyContactRelationship: '',

    // Step 3: Medical History
    allergies: '',
    currentMedications: '',
    existingConditions: '',
    previousSurgeries: '',
    smoking: '',

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

    // Step 6: Review & Complete
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
    setFormData({
      fullName: '',
      dob: '',
      phoneNumber: '+91 9876 543 210',
      emailAddress: '',
      gender: '',
      bloodGroup: '',
      state: '',
      currentCity: '',
      height: '',
      weight: '',
      bloodPressure: '',
      bloodSugar: '',
      physicalActivityLevel: '',
      dietaryPreference: '',
      smokingStatus: '',
      alcoholConsumption: '',
      emergencyContactName: '',
      emergencyContactNumber: '+91 ',
      emergencyContactRelationship: '',
      allergies: '',
      currentMedications: '',
      existingConditions: '',
      previousSurgeries: '',
      smoking: '',
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
      case 2:
        return (
          <AdditionalInformation 
            initialValues={formData} 
            onNext={handleNextStep} 
            onBack={handleBackStep} 
          />
        );
      case 3:
        return (
          <MedicalHistory 
            initialValues={formData} 
            onNext={handleNextStep} 
            onBack={handleBackStep} 
          />
        );
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
          <Sidebar currentStep={currentStep} />

          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#fcfdfd' }}>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: {
                  xs: '16px 20px',
                  sm: '20px 32px',
                  md: '2px 48px',
                },
              }}
            >
            </Box>

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
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f3f4f6', py: currentStep === 8 ? 0 : 4 }}>
          <Box sx={{ width: '100%' }}>{renderStep()}</Box>
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App;