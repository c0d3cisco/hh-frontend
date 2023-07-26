import {Box, TextField} from '@mui/material';

export default function FormPage5({ formData, handleChange }) {

  return (
    <Box>
          <div style={{ display: 'flex', flexDirection: 'column', width:800, minWidth:500 ,maxWidth:1000 }}>
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
            name='q25'
          />


          <p>What kind of things would you like to see at Helen House? Any particular activities you’d like us to bring in, or regular
            programming you’d like to see implemented?</p>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            rows={4}
            defaultValue=""
            value={formData.q26}
            onChange={handleChange}
            name='q26'
          />
          <p>Lastly, we would love to know why Helen House is important to you?</p>
          <TextField
            id="outlined-multiline-static"
            label=""
            multiline
            rows={4}
            defaultValue=""
            value={formData.q27}
            onChange={handleChange}
            name='q27'
          />
        </div>
      </div>
    </Box>
  );
}
