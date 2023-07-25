import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Pagination } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';


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

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  // Function to handle form submission
  const handleSubmit = async () => {
    // TODO: connect submit to userData table
    if (!isAuthenticated) {
      console.log('User not authenticated');
      return;
    }

    try {
      const accessToken = await getAccessTokenSilently({
      authorizationParams: {
        audience: "https://helen-house-backend-v3uq.onrender.com",
        scope: "read:current_user",
      },
    });

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    }
// !! verified we are hitting the /api/userData endpoints with the correct auth but needs to be reworked in the todos below
// TODO - update to POST on /api/userData with the correct association for userId to avoid error (violates foreign key constraint \"userData_userId_fkey\")
    const response = await axios.put(
      'https://helen-house-backend-v3uq.onrender.com/api/userData/1',
      {      
        formData    
          // "userId": 1,
          // "approved": false,
          // "first_name": "Alex",
          // "last_name": "Martinez",
          // "preferred_name": "AM",
          // "date_of_birth": "1992-04-10",
          // "pronouns": "they/them",
          // "em_name": "Emergency Contact 1",
          // "em_relationship": "Friend",
          // "em_phone": "123-456-7890",
          // "em_knowledge": "Yes",
          // "em_name2": "Emergency Contact 2",
          // "em_relationship2": "Partner",
          // "em_phone2": "987-654-3210",
          // "em_knowledge2": "No",
          // "q1": "Female",
          // "q1_other": null,
          // "q2": "Bisexual",
          // "q2_other": null,
          // "email": "alexmartinez@example.com",
          // "phone": "555-246-8135",
          // "contact": "Phone",
          // "ethnicity": "Japanese",
          // "ethnicity_other": null,
          // "englishUnderstanding": "No",
          // "englishUnderstanding_other": null,
          // "englishAtHome": "No",
          // "englishAtHome_other": null,
          // "q3": "No specific health conditions",
          // "safePlace": "Yes",
          // "q5": "No",
          // "q6": "Yes",
          // "q7": "Yes",
          // "q8": "Yes",
          // "q9": "Yes",
          // "school": "Sample School",
          // "q10": "No",
          // "q11": "No",
          // "q12": "No",
          // "q13": "No",
          // "q14": "No",
          // "q15": "No",
          // "q16": "No",
          // "q17": "No",
          // "q18": "No",
          // "q19": "Yes",
          // "q20": "Problems with Family",
          // "q20_other": null,
          // "q21": "Friend",
          // "q21_other": null,
          // "q22": "4",
          // "q23": "3",
          // "q24": "A leader",
          // "q24_other": null,
          // "q25": "Be kind to others",
          // "q26": "Sample data for q26",
          // "q27": "Sample data for q27"        
      },
                // TODO: use formData instead of hardcoded data; verify formData is working as expected

      { headers }
    );

    console.log('Intake Form Record Created', response);
    console.log('formData: ', formData);
  } catch (error) {
    console.log('Error message:', error.message);
    console.log('Error response:', error.response);
  }

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
