import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import humanicon from '../../assets/humanicon.svg';
import calendericon from '../../assets/Dateicon.svg';
import phoneicon from '../../assets/phoneicon.svg';
import mailicon from '../../assets/mailicon.svg';
import gendericon from '../../assets/gendericon.svg';
import bloodicon from '../../assets/bloodicon.svg';
import locationicon from '../../assets/locationicon.svg';

import FormHeader from '../common/FormHeader';
import RequiredInfo from '../common/RequiredInfo';
import FormInput from '../common/FormInput';
import FormSelect from '../common/FormSelect';
import FormActions from '../common/FormActions';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .trim()
    .required('Please enter your full name!'),
  dob: Yup.string()
    .required('Please select your date of birth!'),
  emailAddress: Yup.string()
    .email('Enter a valid email address!')
    .optional(),
  gender: Yup.string()
    .required('Please select your gender!'),
  bloodGroup: Yup.string()
    .required('Please select your blood group!'),
  state: Yup.string()
    .required('Please select your state!'),
  currentCity: Yup.string()
    .required('Please select your current city!'),
});

const states = [
  'Tamil Nadu',
  'Karnataka',
  'Maharashtra',
  'Kerala',
  'Delhi',
];

const citiesByState = {
  'Tamil Nadu': ['Coimbatore', 'Chennai', 'Madurai', 'Trichy', 'Salem','Erode'],
  'Karnataka': ['Bangalore', 'Mysore', 'Mangalore', 'Hubli'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane'],
  'Kerala': ['Kochi', 'Trivandrum', 'Calicut', 'Thrissur'],
  'Delhi': ['New Delhi', 'North Delhi', 'South Delhi'],
};

const bloodGroups = ['A +ve', 'A -ve', 'B +ve', 'B -ve', 'O +ve', 'O -ve', 'AB +ve', 'AB -ve'];
const genders = ['Male', 'Female', 'Other'];

const PersonalDetails = ({ initialValues, onNext }) => {
  const formik = useFormik({
    initialValues: {
      fullName: initialValues.fullName || '',
      dob: initialValues.dob || '',
      phoneNumber: '+91 9876 543 210',
      emailAddress: initialValues.emailAddress || '',
      gender: initialValues.gender || '',
      bloodGroup: initialValues.bloodGroup || '',
      state: initialValues.state || '',
      currentCity: initialValues.currentCity || '',
    },
    validationSchema,
    onSubmit: (values) => {
      onNext(values);
    },
  });

  const isFormValid =
    formik.values.fullName &&
    formik.values.dob &&
    formik.values.gender &&
    formik.values.bloodGroup &&
    formik.values.state &&
    formik.values.currentCity &&
    Object.keys(formik.errors).length === 0;

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1100px',
        mx: 'auto',
      }}
    >
      <FormHeader
        title="Personal Information"
        subtitle="Add your basic information to complete your profile and personalize your healthcare journey."
      />

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          {/* Full Name */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FormInput
              label="Full Name"
              required
              name="fullName"
              placeholder="Enter your full name"
              icon={humanicon}
              formik={formik}
            />
          </Grid>

          {/* Date of Birth */}
<Grid size={{ xs: 12, md: 6 }}>
  <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#374151' }}>
    Date of Birth <span style={{ color: '#ff4d4f' }}>*</span>
  </Typography>
  <TextField
    fullWidth
    name="dob"
    type="date"
    value={formik.values.dob}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    error={formik.touched.dob && Boolean(formik.errors.dob)}
    helperText={formik.touched.dob && formik.errors.dob}
    slotProps={{
      input: {
        placeholder: 'Select date of birth',
        startAdornment: (
          <InputAdornment position="start">
  <img
    src={calendericon}
    alt="calendar"
    style={{
      width: 20,
      height: 20,
    }}
  />
</InputAdornment>
        ),
      },
    }}
    sx={{
      '& .MuiOutlinedInput-root': {
        height: 56,
      },
      '& .MuiFormHelperText-root': {
        color: '#ff4d4f',
        marginLeft: 0,
        marginTop: '4px',
        fontWeight: 500,
      },
    }}
  />
</Grid>

          {/* Phone Number */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#374151' }}>
              Phone Number
            </Typography>
            <TextField
              fullWidth
              disabled
              name="phoneNumber"
              value={formik.values.phoneNumber}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src={phoneicon}
                        alt="phone"
                        style={{
                          width: 20,
                          height: 20,
                        }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#f3f4f6',
                  color: '#6b7280',
                },
              }}
            />
          </Grid>

          {/* Email Address */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FormInput
              label="Email Address"
              name="emailAddress"
              placeholder="Enter your email"
              icon={mailicon}
              formik={formik}
            />
          </Grid>

          {/* Gender */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FormSelect
              label="Gender"
              required
              name="gender"
              options={genders}
              icon={gendericon}
              formik={formik}
            />
          </Grid>

          {/* Blood Group */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FormSelect
              label="Blood Group"
              required
              name="bloodGroup"
              options={bloodGroups}
              icon={bloodicon}
              formik={formik}
            />
          </Grid>

          {/* State */}
          <Grid size={{ xs: 12, md: 6 }}>
            <FormSelect
              label="State"
              required
              name="state"
              options={states}
              icon={locationicon}
              formik={formik}
            />
          </Grid>

          {/* Current City - Updated with MapIcon */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body2" sx={{ fontWeight: 600, mb: 1, color: '#374151' }}>
              Current City <span style={{ color: '#ff4d4f' }}>*</span>
            </Typography>
            <TextField
              fullWidth
              select
              name="currentCity"
              value={formik.values.currentCity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.currentCity && Boolean(formik.errors.currentCity)}
              helperText={formik.touched.currentCity && formik.errors.currentCity}
              disabled={!formik.values.state}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <img
                        src={locationicon}
                        alt="location"
                        style={{
                          width: 20,
                          height: 20,
                        }}
                      />
                    </InputAdornment>
                  ),
                },
                select: {
                  displayEmpty: true,
                  renderValue: (selected) => {
                    if (!selected) {
                      return <span style={{ color: '#9ca3af' }}>Select your current city</span>;
                    }
                    return selected;
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderColor: formik.touched.currentCity && formik.errors.currentCity ? '#ff4d4f' : '#e5e7eb',
                },
                '& .MuiFormHelperText-root': {
                  color: '#ff4d4f',
                  marginLeft: 0,
                  marginTop: '4px',
                  fontWeight: 500,
                },
              }}
            >
              {(citiesByState[formik.values.state] || []).map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Required fields indicator box */}
          <Grid size={{ xs: 12, sm: 6 }}>
            <RequiredInfo />
          </Grid>

          {/* Next Button */}
          <Grid size={{ xs: 12 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
              <FormActions
                nextText="Add Additional Information"
                disabled={!isFormValid}
              />
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default PersonalDetails;