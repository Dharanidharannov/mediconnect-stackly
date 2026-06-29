import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  IconButton,
  Stack,
  LinearProgress,
  Button,
  Avatar,
} from '@mui/material';
import {
  CloudUpload as CloudUploadIcon,
  Delete as DeleteIcon,
  PictureAsPdf as PdfIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon,
  Pause as PauseIcon,
} from '@mui/icons-material';

import FormHeader from '../common/FormHeader';
import FormActions from '../common/FormActions';

import prescriptionIcon from '../../assets/Prescriptionimg.svg';
import labReportIcon from '../../assets/labimg.svg';
import scanIcon from '../../assets/scanimg.svg';
import dischargeSummaryIcon from '../../assets/Dischargeimg.svg';

const FILE_STATUS = {
  QUEUED: 'queued',
  UPLOADING: 'uploading',
  SUCCESS: 'success',
  FAILED: 'failed',
};

const HealthRecords = ({ initialValues, onNext, onBack }) => {
  const [uploadedFiles, setUploadedFiles] = useState(initialValues?.uploadedFiles || []);
  const [isDragging, setIsDragging] = useState(false);

  // Supported Documents data with SVG icons
  const supportedDocuments = [
    { id: 1, icon: prescriptionIcon, label: 'Prescription' },
    { id: 2, icon: labReportIcon, label: 'Lab reports' },
    { id: 3, icon: scanIcon, label: 'Scan' },
    { id: 4, icon: dischargeSummaryIcon, label: 'Discharge summary' },
  ];

  // Simulate file upload with progress
  const simulateUpload = (fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        const isSuccess = Math.random() > 0.2;
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === fileId 
              ? { 
                  ...f, 
                  progress: 100, 
                  status: isSuccess ? FILE_STATUS.SUCCESS : FILE_STATUS.FAILED,
                  uploadComplete: true 
                }
              : f
          )
        );
      } else {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === fileId 
              ? { ...f, progress: Math.min(progress, 99), status: FILE_STATUS.UPLOADING }
              : f
          )
        );
      }
    }, 300);
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    const validFiles = files.filter(file => {
      const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      const isValidType = validTypes.includes(file.type);
      const isValidSize = file.size <= 20 * 1024 * 1024;
      return isValidType && isValidSize;
    });

    const newFiles = validFiles.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
      preview: URL.createObjectURL(file),
      progress: 0,
      status: FILE_STATUS.QUEUED,
      uploadComplete: false,
    }));

    const updatedFiles = [...uploadedFiles, ...newFiles];
    setUploadedFiles(updatedFiles);

    newFiles.forEach(file => {
      setTimeout(() => simulateUpload(file.id), 500);
    });
  };

  // Handle retry upload
  const handleRetryUpload = (fileId) => {
    setUploadedFiles(prev => 
      prev.map(f => 
        f.id === fileId 
          ? { ...f, progress: 0, status: FILE_STATUS.QUEUED, uploadComplete: false }
          : f
      )
    );
    setTimeout(() => simulateUpload(fileId), 500);
  };

  // Handle file removal
  const handleRemoveFile = (fileId) => {
    setUploadedFiles(uploadedFiles.filter(f => f.id !== fileId));
  };

  // Handle drag events
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    const validFiles = files.filter(file => {
      const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      const isValidType = validTypes.includes(file.type);
      const isValidSize = file.size <= 20 * 1024 * 1024;
      return isValidType && isValidSize;
    });

    const newFiles = validFiles.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file,
      preview: URL.createObjectURL(file),
      progress: 0,
      status: FILE_STATUS.QUEUED,
      uploadComplete: false,
    }));

    const updatedFiles = [...uploadedFiles, ...newFiles];
    setUploadedFiles(updatedFiles);

    newFiles.forEach(file => {
      setTimeout(() => simulateUpload(file.id), 500);
    });
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  // Get file extension
  const getFileExtension = (type) => {
    if (type?.startsWith('image/')) {
      return type.split('/')[1].toUpperCase();
    }
    if (type === 'application/pdf') {
      return 'PDF';
    }
    return 'FILE';
  };

  // Get thumbnail for image or icon for PDF
  const getFileThumbnail = (file) => {
    if (file.type?.startsWith('image/') && file.preview) {
      return (
        <Avatar
          src={file.preview}
          variant="rounded"
          sx={{
            width: 48,
            height: 48,
            borderRadius: '8px',
            objectFit: 'cover',
          }}
        />
      );
    }
    if (file.type === 'application/pdf') {
      return (
        <Box
          sx={{
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fef2f2',
            borderRadius: '8px',
          }}
        >
          <PdfIcon sx={{ color: '#ff4d4f', fontSize: 28 }} />
        </Box>
      );
    }
    return (
      <Box
        sx={{
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
        }}
      >
        <PdfIcon sx={{ color: '#6b7280', fontSize: 28 }} />
      </Box>
    );
  };

  // Render file card based on status
  const renderFileCard = (file) => {
    const fileExt = getFileExtension(file.type);
    const fileSize = formatFileSize(file.size);

    switch (file.status) {
      case FILE_STATUS.QUEUED:
        return (
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {getFileThumbnail(file)}
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500, color: '#374151' }}>
                  {file.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>
                  {fileExt} = {fileSize}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PauseIcon sx={{ fontSize: 16, color: '#6b7280' }} />
              <Typography variant="caption" sx={{ color: '#6b7280', fontWeight: 500 }}>
                Queued
              </Typography>
            </Box>
          </Paper>
        );

      case FILE_STATUS.UPLOADING:
        return (
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
              {getFileThumbnail(file)}
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500, color: '#374151' }}>
                  {file.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>
                  {fileExt} = {fileSize}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                  <LinearProgress
                    variant="determinate"
                    value={file.progress}
                    sx={{
                      flex: 1,
                      height: 4,
                      borderRadius: 2,
                      backgroundColor: '#e5e7eb',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: '#0a6650',
                        borderRadius: 2,
                      },
                    }}
                  />
                  <Typography variant="caption" sx={{ color: '#0a6650', fontWeight: 600, minWidth: 35 }}>
                    {Math.round(file.progress)}%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        );

      case FILE_STATUS.SUCCESS:
        return (
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {getFileThumbnail(file)}
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500, color: '#374151' }}>
                  {file.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>
                  {fileExt} = {fileSize}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CheckCircleIcon sx={{ fontSize: 16, color: '#0ab38c' }} />
                <Typography variant="caption" sx={{ color: '#0ab38c', fontWeight: 500 }}>
                  Upload Successful!
                </Typography>
              </Box>
              <IconButton 
                size="small" 
                onClick={() => handleRemoveFile(file.id)}
                sx={{
                  color: '#6b7280',
                  '&:hover': {
                    color: '#ff4d4f',
                  },
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Paper>
        );

      case FILE_STATUS.FAILED:
        return (
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#fef2f2',
              borderRadius: '8px',
              border: '1px solid #fecaca',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {getFileThumbnail(file)}
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 500, color: '#374151' }}>
                  {file.name}
                </Typography>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>
                  {fileExt} = {fileSize}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ErrorIcon sx={{ fontSize: 16, color: '#ff4d4f' }} />
                <Typography variant="caption" sx={{ color: '#ff4d4f', fontWeight: 500 }}>
                  Upload Failed!
                </Typography>
                <Button
                  size="small"
                  onClick={() => handleRetryUpload(file.id)}
                  sx={{
                    textTransform: 'none',
                    color: '#0a6650',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    p: 0,
                    minWidth: 'auto',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Retry
                </Button>
              </Box>
              <IconButton 
                size="small" 
                onClick={() => handleRemoveFile(file.id)}
                sx={{
                  color: '#6b7280',
                  '&:hover': {
                    color: '#ff4d4f',
                  },
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          </Paper>
        );

      default:
        return null;
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    onNext({ uploadedFiles });
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1100px',
        mx: 'auto',
      }}
    >
      <FormHeader
        title="Health Records"
        subtitle="Upload your medical documents for a complete health profile."
      />

      {/* Upload Area */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 2 }}>
          Upload your health records
        </Typography>

        <Paper
          variant="outlined"
          sx={{
            p: 4,
            textAlign: 'center',
            backgroundColor: isDragging ? '#f0fdf4' : '#f9fafb',
            borderColor: isDragging ? '#0a6650' : '#e5e7eb',
            borderStyle: isDragging ? 'solid' : 'dashed',
            borderWidth: isDragging ? '2px' : '1px',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              borderColor: '#0a6650',
              backgroundColor: '#f0fdf4',
            },
          }}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-upload').click()}
        >
          <input
            id="file-upload"
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.pdf"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
          
          <CloudUploadIcon 
            sx={{ 
              fontSize: 48, 
              color: '#6b7280',
              mb: 1,
            }} 
          />
          
          <Typography variant="body1" sx={{ fontWeight: 600, color: '#374151' }}>
            Drag and drop your health records here, or browse
          </Typography>
          
          <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mt: 0.5 }}>
            JPG, PNG or PDF (Max. 20MB)
          </Typography>
        </Paper>
      </Box>

      {/* Supported Documents Section - Horizontal layout with SVG icons */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 2 }}>
          Supported Documents
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            alignItems: 'center',
          }}
        >
          {supportedDocuments.map((doc, index) => (
            <React.Fragment key={doc.id}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 24,
                    height: 24,
                  }}
                >
                  <img 
                    src={doc.icon} 
                    alt={doc.label}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 500,
                    color: '#374151',
                    fontSize: '0.875rem',
                  }}
                >
                  {doc.label}
                </Typography>
              </Box>
              {index < supportedDocuments.length - 1 && (
                <Typography
                  sx={{
                    color: '#d1d5db',
                    fontWeight: 300,
                    fontSize: '1.25rem',
                  }}
                >
                  |
                </Typography>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Stack spacing={1.5}>
            {uploadedFiles.map((file) => (
              <Box key={file.id}>
                {renderFileCard(file)}
              </Box>
            ))}
          </Stack>
        </Box>
      )}

      {/* Navigation Buttons - Using FormActions */}
      <FormActions
        onSkip={() => onNext({ uploadedFiles })}
        onBack={onBack}
        nextText="Review & Complete"
        disabled={false}
      />
    </Box>
  );
};

export default HealthRecords;