import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Pagination } from '@mui/material';

import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import FormPage3 from './FormPage3';
import FormPage4 from './FormPage4';
import FormPage5 from './FormPage5';

export default function IntakeFormFillable() {
  // Total number of form pages
  const totalFormPages = 5; // Update this based on the number of form pages you have

  // Current page state for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // State to store form data
  const [formData, setFormData] = useState({
    // Your form data fields...
  });

  // Function to handle form submission
  const handleSubmit = () => {
    // Here you can submit the formData to your API or handle it as needed
    console.log(formData);
    // Reset the form after submission (optional)
    setFormData({
      // Reset form data fields...
    });
  };

  // Function to handle changes in form fields
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      // Handle checkbox field
      setFormData((prevFormData) => ({
        ...prevFormData,
        // Update checkbox value in form data
      }));
    } else {
      // Handle other fields
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === 'radio' ? value : value.trim(),
      }));
    }
  };

  // Function to handle next page button click
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page button click
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Function to handle page changes when the user selects a different page from the pagination component
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // Function to render the current form page based on the currentPage state
  const renderFormPage = () => {
    switch (currentPage) {
      case 1:
        return <FormPage1 formData={formData} handleChange={handleChange} />;
      case 2:
        return <FormPage2 formData={formData} handleChange={handleChange} />;
      case 3:
        return <FormPage3 formData={formData} handleChange={handleChange} />;
      case 4:
        return <FormPage4 formData={formData} handleChange={handleChange} />;
      case 5:
        return <FormPage5 formData={formData} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Intake Form</h1>
      {/* Pagination component */}
      <Pagination
        count={totalFormPages}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        color="primary"
      />
      <Box>

        {/* Render the current form page */}
        {renderFormPage()}

        {/* Next, Previous, and Submit buttons */}
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {/* Show "Previous" button if not on the first page */}
          {currentPage > 1 && (
            <Button variant="contained" onClick={handlePreviousPage} sx={{ margin: 5 }}>
              Previous
            </Button>
          )}

          {/* Show "Next" button if not on the last page */}
          {currentPage < totalFormPages && (
            <Button variant="contained" onClick={handleNextPage} sx={{ margin: 5 }}>
              Next
            </Button>
          )}

          {/* Show "Submit" button on the last page */}
          {currentPage === totalFormPages && (
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
