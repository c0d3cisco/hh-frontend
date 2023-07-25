import { Box, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox } from '@mui/material';

export default function FormPage2({ formData, handleChange }) {

  return (
    <Box>
      <div style={{ display: 'flex', flexDirection: 'column',  width:800, minWidth:500 ,maxWidth:1000  }}>

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">How would you describe your gender? How would you like to identify?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="none"
            name="radio-buttons-group"
            value={formData.q1}
            onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="genderqueer" control={<Radio />} label="Genderqueer" />
            <FormControlLabel value="intersex" control={<Radio />} label="Intersex" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="transgender" control={<Radio />} label="Transgender" />
            <FormControlLabel value="transgender male to female (MTF)" control={<Radio />} label="Transgender Male to Female (MTF)" />
            <FormControlLabel value="transgender female to male (FTM)" control={<Radio />} label="Transgender Female to Male (FTM)" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Other"
          variant="outlined"
          value={formData.q1_other}
          onChange={handleChange}
        />

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">How would you describe your sexual orientation? How would you like to identify?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="none"
            name="radio-buttons-group"
            value={formData.q2}
            onChange={handleChange}
          >
            <FormControlLabel value="asexual" control={<Radio />} label="Asexual" />
            <FormControlLabel value="bisexual" control={<Radio />} label="Bisexual" />
            <FormControlLabel value="gay" control={<Radio />} label="Gay" />
            <FormControlLabel value="lesbian" control={<Radio />} label="Lesbian" />
            <FormControlLabel value="pansexual" control={<Radio />} label="Pansexual" />
            <FormControlLabel value="queer" control={<Radio />} label="Queer" />
            <FormControlLabel value="questioning" control={<Radio />} label="Questioning" />
            <FormControlLabel value="straight" control={<Radio />} label="Straight" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
            <p>If you don't feel like these options fit, use your own words to describe below:</p>
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Other"
          variant="outlined"
          value={formData.sexualOrientationOther}
          onChange={handleChange}
        />

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">How would you describe your ethnicity:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="none"
            name="radio-buttons-group"
            value={formData.ethnicity}
            onChange={handleChange}
          >
            <FormControlLabel control={<Checkbox />} label="American Indian/Native American" />
            <FormControlLabel control={<Checkbox />} label="Black/African American" />
            <FormControlLabel control={<Checkbox />} label="Chinese" />
            <FormControlLabel control={<Checkbox />} label="Filipino" />
            <FormControlLabel control={<Checkbox />} label="Hispanic, Latino, Spanish" />
            <FormControlLabel control={<Checkbox />} label="Japanese" />
            <FormControlLabel control={<Checkbox />} label="Korean" />
            <FormControlLabel control={<Checkbox />} label="Other Asian" />
            <FormControlLabel control={<Checkbox />} label="Multiracial" />
            <FormControlLabel control={<Checkbox />} label="Other Pacific Islander" />
            <FormControlLabel control={<Checkbox />} label="South Asian" />
            <FormControlLabel control={<Checkbox />} label="Vietnamese" />
            <FormControlLabel control={<Checkbox />} label="White" />
            <p>If you don't feel like these options fit, use your own words to describe below:</p>
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Other"
          variant="outlined"
          value={formData.ethnicity_other}
          onChange={handleChange}
        />

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Do you speak or understand another language other than English?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="none"
            name="radio-buttons-group"
            value={formData.englishUnderstanding}
            onChange={handleChange}
          >
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <p>If yes, which language?</p>
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Other Language"
          variant="outlined"
          value={formData.englishUnderstanding_other}
          onChange={handleChange}
        />
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Does your family speak a language at home that is not English?</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="none"
            name="radio-buttons-group"
            value={formData.englishAtHome}
            onChange={handleChange}
          >
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <p>If yes, which language?</p>
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Other Language"
          variant="outlined"
          value={formData.englishAtHome_other}
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}
