import { Box, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

export default function FormPage1({ formData, handleChange }) {

  return (
    <Box>
      <p>Personal Information: </p>
      <div style={{ display: 'flex', flexDirection: 'row',  width:800, minWidth:500 ,maxWidth:1000 }}>
        
        <TextField
          required
          id="outlined-required"
          label="First Name"
          defaultValue=""
          value={formData.first_name}
          onChange={handleChange}
          name='first_name'
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          defaultValue=""
          value={formData.last_name}
          onChange={handleChange}
          name='last_name'
        />
        <TextField
          id="outlined-basic"
          label="Preferred Name"
          variant="outlined"
          value={formData.preferred_name}
          onChange={handleChange}
          name='preferred_name'
        />
        <TextField
          id="outlined-basic"
          label="Pronouns"
          variant="outlined"
          value={formData.pronouns}
          onChange={handleChange}
          name='pronouns'
        />
            <TextField
          required
          id="outlined-basic"
          label="Date of Birth"
          variant="outlined"
          value={formData.date_of_birth}
          onChange={handleChange}
          name='date_of_birth'
          type='date' // Set the input type to 'date' for a date picker
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div>
          <p>Your Contact Information: </p>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            name='email'
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={formData.phone}
            onChange={handleChange}
            name='phone'
          />
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Preferred form of contact:</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="none"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
            >
              <FormControlLabel value="email" control={<Radio />} label="Email" />
              <FormControlLabel value="phone" control={<Radio />} label="Phone" />
              <FormControlLabel value="text" control={<Radio />} label="Text" />
              <FormControlLabel value="do not contact" control={<Radio />} label="Do Not Contact" />
            </RadioGroup>
          </FormControl>
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
            name='em_name'
          />
          <TextField
            required
            id="outlined-required"
            label="Relationship"
            defaultValue=""
            value={formData.em_relationship}
            onChange={handleChange}
            name='em_relationship'
          />
          <TextField
            required
            id="outlined-required"
            label="Phone Number"
            defaultValue=""
            value={formData.em_phone}
            onChange={handleChange}
            name='em_phone'
          />
          <TextField
            required
            id="outlined-required"
            label="Knowledge"
            defaultValue=""
            value={formData.em_knowledge}
            onChange={handleChange}
            name='em_knowledge'
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
            name='em_name2'
          />
          <TextField
            id="outlined-basic"
            label="Relationship"
            variant="outlined"
            value={formData.em_relationship2}
            onChange={handleChange}
            name='em_relationship2'
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            value={formData.em_phone2}
            onChange={handleChange}
            name='em_phone2'
          />
          <TextField
            id="outlined-basic"
            label="Knowledge"
            variant="outlined"
            value={formData.em_knowledge2}
            onChange={handleChange}
            name='em_knowledge2'
          />
  
        </div>
      </div>
    </Box>
  );
}
