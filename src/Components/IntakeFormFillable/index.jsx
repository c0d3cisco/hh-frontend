import React, { useEffect, useState } from 'react';
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
  const totalFormPages = 5;
  const userId = localStorage.getItem('userId');
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [hasCompletedIntake, setHasCompletedIntake] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem('formData');

    return storedFormData ? JSON.parse(storedFormData) : {
      first_name: '',
      last_name: '',
      preferred_name: null,
      date_of_birth: '',
      pronouns: null,
      em_name: '',
      em_relationship: '',
      em_phone: '',
      em_knowledge: '',
      em_name2: null,
      em_relationship2: null,
      em_phone2: null,
      em_knowledge2: null,
      q1: null,
      q1_other: null,
      q2: null,
      q2_other: null,
      email: null,
      phone: null,
      contact: null,
      ethnicity: null,
      ethnicity_other: null,
      englishUnderstanding: null,
      englishUnderstanding_other: null,
      englishAtHome: null,
      englishAtHome_other: null,
      q3: null,
      safePlace: null,
      q5: null,
      q6: null,
      q7: null,
      q8: null,
      q9: null,
      school: null,
      q10: null,
      q11: null,
      q12: null,
      q13: null,
      q14: null,
      q15: null,
      q16: null,
      q17: null,
      q18: null,
      q19: null,
      q20: null,
      q20_other: null,
      q21: null,
      q21_other: null,
      q22: null,
      q23: null,
      q24: null,
      q24_other: null,
      q25: null,
      q26: null,
      q27: null
    };
  });

  const handleSubmit = async () => {
    console.log('Form Data', formData);
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

      // const response = await axios.post(
      //   `https://helen-house-backend-v3uq.onrender.com/api/userData`,
      //   {
      //     userId: userId,
      //     ...formData
      //   },
      //   { headers }
      // );
      // console.log('Intake Form Record Created', response);

      const response = await axios.put(
        `https://helen-house-backend-v3uq.onrender.com/api/userData/${userId}`,
        {
          userId: userId,
          ...formData
        },
        { headers }
      );
      console.log('Intake Form Record Created', response);

      // Clear the form data from local storage after successful submission
      localStorage.removeItem('formData');
      // Reset the form after submission (optional)
      setFormData({
        first_name: '',
        last_name: '',
        preferred_name: null,
        date_of_birth: '',
        pronouns: null,
        em_name: '',
        em_relationship: '',
        em_phone: '',
        em_knowledge: '',
        em_name2: null,
        em_relationship2: null,
        em_phone2: null,
        em_knowledge2: null,
        q1: null,
        q1_other: null,
        q2: null,
        q2_other: null,
        email: null,
        phone: null,
        contact: null,
        ethnicity: null,
        ethnicity_other: null,
        englishUnderstanding: null,
        englishUnderstanding_other: null,
        englishAtHome: null,
        englishAtHome_other: null,
        q3: null,
        safePlace: null,
        q5: null,
        q6: null,
        q7: null,
        q8: null,
        q9: null,
        school: null,
        q10: null,
        q11: null,
        q12: null,
        q13: null,
        q14: null,
        q15: null,
        q16: null,
        q17: null,
        q18: null,
        q19: null,
        q20: null,
        q20_other: null,
        q21: null,
        q21_other: null,
        q22: null,
        q23: null,
        q24: null,
        q24_other: null,
        q25: null,
        q26: null,
        q27: null
      });

      // Refresh the page after successful submission
      window.location.reload();

      // Redirect or show a success message if needed
    } catch (error) {
      console.log('Error message:', error.message);
      console.log('Error response:', error.response);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: checked,
      }));
    } else if (type === 'radio') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value.trim(),
      }));
    }
  };

  useEffect(() => {
    const initialValues = {
      first_name: localStorage.getItem('first_name') || '',
      last_name: localStorage.getItem('last_name') || '',
      preferred_name: localStorage.getItem('preferred_name') || null,
      date_of_birth: localStorage.getItem('date_of_birth') || '',
      pronouns: localStorage.getItem('pronouns') || null,
      em_name: localStorage.getItem('em_name') || '',
      em_relationship: localStorage.getItem('em_relationship') || '',
      em_phone: localStorage.getItem('em_phone') || '',
      em_knowledge: localStorage.getItem('em_knowledge') || '',
      em_name2: localStorage.getItem('em_name2') || null,
      em_relationship2: localStorage.getItem('em_relationship2') || null,
      em_phone2: localStorage.getItem('em_phone2') || null,
      em_knowledge2: localStorage.getItem('em_knowledge2') || null,
      q1: localStorage.getItem('q1') || null,
      q1_other: localStorage.getItem('q1_other') || null,
      q2: localStorage.getItem('q2') || null,
      q2_other: localStorage.getItem('q2_other') || null,
      email: localStorage.getItem('email') || null,
      phone: localStorage.getItem('phone') || null,
      contact: localStorage.getItem('contact') || null,
      ethnicity: localStorage.getItem('ethnicity') || null,
      ethnicity_other: localStorage.getItem('ethnicity_other') || null,
      englishUnderstanding: localStorage.getItem('englishUnderstanding') || null,
      englishUnderstanding_other: localStorage.getItem('englishUnderstanding_other') || null,
      englishAtHome: localStorage.getItem('englishAtHome') || null,
      englishAtHome_other: localStorage.getItem('englishAtHome_other') || null,
      q3: localStorage.getItem('q3') || null,
      safePlace: localStorage.getItem('safePlace') || null,
      q5: localStorage.getItem('q5') || null,
      q6: localStorage.getItem('q6') || null,
      q7: localStorage.getItem('q7') || null,
      q8: localStorage.getItem('q8') || null,
      q9: localStorage.getItem('q9') || null,
      school: localStorage.getItem('school') || null,
      q10: localStorage.getItem('q10') || null,
      q11: localStorage.getItem('q11') || null,
      q12: localStorage.getItem('q12') || null,
      q13: localStorage.getItem('q13') || null,
      q14: localStorage.getItem('q14') || null,
      q15: localStorage.getItem('q15') || null,
      q16: localStorage.getItem('q16') || null,
      q17: localStorage.getItem('q17') || null,
      q18: localStorage.getItem('q18') || null,
      q19: localStorage.getItem('q19') || null,
      q20: localStorage.getItem('q20') || null,
      q20_other: localStorage.getItem('q20_other') || null,
      q21: localStorage.getItem('q21') || null,
      q21_other: localStorage.getItem('q21_other') || null,
      q22: localStorage.getItem('q22') || null,
      q23: localStorage.getItem('q23') || null,
      q24: localStorage.getItem('q24') || null,
      q24_other: localStorage.getItem('q24_other') || null,
      q25: localStorage.getItem('q25') || null,
      q26: localStorage.getItem('q26') || null,
      q27: localStorage.getItem('q27') || null
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      ...initialValues,
    }));
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

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
      <Pagination
        count={totalFormPages}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        color="primary"
      />
      <Box>
        {renderFormPage()}
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {currentPage > 1 && (
            <Button variant="contained" onClick={handlePreviousPage} sx={{ margin: 5 }}>
              Previous
            </Button>
          )}
          {currentPage < totalFormPages && (
            <Button variant="contained" onClick={handleNextPage} sx={{ margin: 5 }}>
              Next
            </Button>
          )}
          {currentPage === totalFormPages && (
            <Button variant="contained" onClick={handleSubmit} sx={{ margin: 5 }}>
              Submit
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
