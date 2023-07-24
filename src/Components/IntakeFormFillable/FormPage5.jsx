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


export default function FormPage5({ formData, handleChange }) {

  return (
    <Box>
          <div style={{ display: 'flex', flexDirection: 'column', minWidth:500 ,maxWidth:800 }}>
        <div>
          <p>We would love you to help us create Helen House’s community agreements. What are some guidelines you would like to
            honor as part of your time at Helen House? (for example: no judgmental statements, no stealing, etc.)</p>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            rows={4}
            defaultValue=""
            value={formData.q25}
            onChange={handleChange}
          />


          <p>What kind of things would you like to see at Helen House? Any particular activities you’d like us to bring in, or regular
            programming you’d like to see implemented?</p>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            rows={4}
            defaultValue=""
            value={formData.activitiesYouWantToSee}
            onChange={handleChange}
          />
          <p>Lastly, we would love to know why Helen House is important to you?</p>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            rows={4}
            defaultValue=""
            value={formData.whyHelenHouseIsImportant}
            onChange={handleChange}
          />
        </div>
      </div>
    </Box>
  );
}
