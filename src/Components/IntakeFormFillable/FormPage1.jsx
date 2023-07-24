import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { Button } from '@mui/material';
import { useState } from 'react';


export default function FormPage1({ formData, handleChange }) {

  return (
    <Box>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
          value={formData.first_name}
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
          value={formData.last_name}
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Preferred Name"
          variant="outlined"
          value={formData.preferred_name}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Pronouns"
          variant="outlined"
          value={formData.pronouns}
          onChange={handleChange}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <p>Emergency Contact: </p>
          <TextField
            required
            id="outlined-required"
            label="Emergency Contact"
            defaultValue=""
            value={formData.em_name}
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Relationship"
            defaultValue=""
            value={formData.em_relationship}
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            defaultValue=""
            value={formData.em_phone}
            onChange={handleChange}
          />
          <TextField
            required
            id="outlined-required"
            label="Knowledge"
            defaultValue=""
            value={formData.em_knowledge}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>Second Emergency Contact: </p>
          <TextField
            id="outlined-basic"
            label="Emergency Contact"
            variant="outlined"
            value={formData.em_name2}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Relationship"
            variant="outlined"
            value={formData.em_relationship2}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={formData.em_phone2}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Knowledge"
            variant="outlined"
            value={formData.em_knowledge2}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>
    </Box>
  );
}
