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


export default function FormPage4({ formData, handleChange }) {

  return (
    <Box>
           <div style={{ display: 'flex', flexDirection: 'column', minWidth:500 ,maxWidth:800 }}>
      <div>
          <p>What specific needs, questions or concerns brought you to Helen House? (Please Check all that apply):</p>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Problems with Family" />
            <FormControlLabel control={<Checkbox />} label="Feelings of sadness or depression" />
            <FormControlLabel control={<Checkbox />} label="Questions about religion" />
            <FormControlLabel control={<Checkbox />} label="Alcohol, drug, or tobacco concerns" />
            <FormControlLabel control={<Checkbox />} label="Coming out questions" />
            <FormControlLabel control={<Checkbox />} label="Health/medical concerns" />
            <FormControlLabel control={<Checkbox />} label="HIV testing" />
            <FormControlLabel control={<Checkbox />} label="Problems at school" />
            <FormControlLabel control={<Checkbox />} label="Loneliness or isolation" />
            <FormControlLabel control={<Checkbox />} label="Safer sex information" />
            <FormControlLabel control={<Checkbox />} label="Sexually transmitted infections" />
            <FormControlLabel control={<Checkbox />} label="New social opportunities" />
            <FormControlLabel control={<Checkbox />} label="Want to help others/volunteer" />
            <FormControlLabel control={<Checkbox />} label="Other (please specify):" />
          </FormGroup>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            value={formData.q20}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>How did you learn about Helen House? (Please Check all that apply):</p>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Friend" />
            <FormControlLabel control={<Checkbox />} label="Social Media" />
            <FormControlLabel control={<Checkbox />} label="Faith/Religious Community" />
            <FormControlLabel control={<Checkbox />} label="Helen House Flyer" />
            <FormControlLabel control={<Checkbox />} label="Online Search/Website" />
            <FormControlLabel control={<Checkbox />} label="Parent or Guardian" />
            <FormControlLabel control={<Checkbox />} label="School Staff or Teacher" />
            <FormControlLabel control={<Checkbox />} label="Other (please specify):" />
          </FormGroup>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            value={formData.q21}
            onChange={handleChange}
          />
        </div>
        <div>
          <p>On a scale of 1-5, how do you feel your life is going most of the time? (Please choose one):</p>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={formData.q22}
              onChange={handleChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Terrible" />
              <FormControlLabel value="2" control={<Radio />} label="Bad" />
              <FormControlLabel value="3" control={<Radio />} label="Ok" />
              <FormControlLabel value="4" control={<Radio />} label="Good" />
              <FormControlLabel value="5" control={<Radio />} label="Excellent" />
            </RadioGroup>
          </FormControl>
          <p>ON a scale of 1-5, how much support do you feel you currently have? (Please choose one):</p>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={formData.q23}
              onChange={handleChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="No Support" />
              <FormControlLabel value="2" control={<Radio />} label="Very Little Support" />
              <FormControlLabel value="3" control={<Radio />} label="Ok Support" />
              <FormControlLabel value="4" control={<Radio />} label="Good Support" />
              <FormControlLabel value="5" control={<Radio />} label="Excellent Support" />
            </RadioGroup>
          </FormControl>
          <p>Please Check all that apply to you:</p>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="A follower " />
            <FormControlLabel control={<Checkbox />} label="A Leader" />
            <FormControlLabel control={<Checkbox />} label="Angry" />
            <FormControlLabel control={<Checkbox />} label="Artistic/creative" />
            <FormControlLabel control={<Checkbox />} label="Athletic" />
            <FormControlLabel control={<Checkbox />} label="Content" />
            <FormControlLabel control={<Checkbox />} label="Happy" />
            <FormControlLabel control={<Checkbox />} label="In counseling" />
            <FormControlLabel control={<Checkbox />} label="Intellectual" />
            <FormControlLabel control={<Checkbox />} label="Lonely" />
            <FormControlLabel control={<Checkbox />} label="On parole/probation" />
            <FormControlLabel control={<Checkbox />} label="Optimistic" />
            <FormControlLabel control={<Checkbox />} label="Out to Family" />
            <FormControlLabel control={<Checkbox />} label="Out to friends" />
            <FormControlLabel control={<Checkbox />} label="Out to no one" />
            <FormControlLabel control={<Checkbox />} label="Outgoing" />
            <FormControlLabel control={<Checkbox />} label="Pessimistic" />
            <FormControlLabel control={<Checkbox />} label="Shy" />
            <FormControlLabel control={<Checkbox />} label="Vegetarian/Vegan" />
            <FormControlLabel control={<Checkbox />} label="Other (please specify):" />
          </FormGroup>
          <TextField
            id="outlined-basic"
            label=""
            variant="outlined"
            value={formData.q24}
            onChange={handleChange}
          />
        </div>
        </div>
    </Box>
  );
}
