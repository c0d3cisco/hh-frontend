
import IntakeFormFillable from '../Components/IntakeFormFillable';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';


export default function FormPropsTextFields() {
return (
<Box
component="form"
sx={{
'& .MuiTextField-root': { m: 1, width: '25ch' },
}}
noValidate
autoComplete="off"
>
<div>
<TextField
required
id="outlined-required"
label="First Name"
defaultValue=""
/>
<TextField
required
id="outlined-required"
label="Last Name"
defaultValue=""
/>
<TextField
id="outlined-basic"
label="Preferred Name"
variant="outlined"
/>
</div>
<div>
{/* --Date of Birth-- */}
<TextField
id="outlined-basic"
label="Pronouns"
variant="outlined"
/>
</div>
<div>
<p>Emergency Contact: </p>
<TextField
required
id="outlined-required"
label="Emergency Contact"
defaultValue=""
/>
<TextField
required
id="outlined-required"
label="Relationship"
defaultValue=""
/>
<TextField
required
id="outlined-required"
label="Phone Number"
defaultValue=""
/>
<TextField
required
id="outlined-required"
label="Knowledge"
defaultValue=""
/>
</div>
<div>
<p>Second Emergency Contact: </p>
<TextField
id="outlined-basic"
label="Emergency Contact"
variant="outlined"
/>
<TextField
id="outlined-basic"
label="Relationship"
variant="outlined"
/>
<TextField
id="outlined-basic"
label="Phone Number"
variant="outlined"
/>
<TextField
id="outlined-basic"
label="Knowledge"
variant="outlined"
/>
</div>
<div>
<FormControl>
<FormLabel id="demo-radio-buttons-group-label">How would you describe your gender? How would you like to identify?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue="none"
name="radio-buttons-group"
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
/>
</div>
<div>
<FormControl>
<FormLabel id="demo-radio-buttons-group-label">How would you describe your sexual orientation? How would you like to identify?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue="none"
name="radio-buttons-group"
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
/>
</div>
<div>
<TextField
id="outlined-basic"
label="Email"
variant="outlined"
/>
<TextField
id="outlined-basic"
label="Phone Number"
variant="outlined"
/>
<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Preferred form of contact:</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue="none"
name="radio-buttons-group"
>
<FormControlLabel value="email" control={<Radio />} label="Email" />
<FormControlLabel value="phone" control={<Radio />} label="Phone" />
<FormControlLabel value="text" control={<Radio />} label="Text" />
<FormControlLabel value="do not contact" control={<Radio />} label="Do Not Contact" />
</RadioGroup>
</FormControl>
</div>
<div>
<FormControl>
<FormLabel id="demo-radio-buttons-group-label">How would you describe your ethnicity:</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue="none"
name="radio-buttons-group"
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
/>
</div>
<div>
<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Do you speak or understand another language other than English?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue="none"
name="radio-buttons-group"
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
/>
<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Does your family speak a language at home that is not English?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue="none"
name="radio-buttons-group"
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
/>
</div>
<div>
<p>What health conditions should we know about? For example, do you have allergies, dietary restrictions, are you
taking medications you feel we should know about, have a medical condition that requires attention, etc.; or do you need accommodations due to a disability?</p>
<TextField
id="outlined-multiline-static"
label=""
multiline
rows={4}
defaultValue=""
/>
</div>
<div>
<p>We work with youth from a wide variety of backgrounds who bring a variety of experiences.
We would like to know more about your experiences and background:</p>
<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Do you have a safe place to live?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Have you ever, or are you currently, experiencing
homelessness(i.e. couch surfing, camping, car sleeping, staying with friends, etc.)</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">When you are hungry do you have enough food to eat?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Do you currently have a case manager (such as DSHS, Comprehensive, or Triumph)?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Are you currently enrolled in school?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
<p>If yes, which school?</p>
</RadioGroup>
</FormControl>
<TextField
id="outlined-basic"
label="School"
variant="outlined"
/>
<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Now or in the past, have you or people close to you experienced stress due to citizenship status?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Are you now or have you ever been in the foster care system?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Are you experiencing a disability (Physical, emotional, sensory, or mental)?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Have you ever been the victim of a crime, or had to deal with the impact of a crime on your life (Such as bullying,
childhood physical abuse, robbery, etc.)?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Have you ever contemplated suicide or engaged in self-harm?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Have you ever been in jail or convicted of a crime?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Have you ever struggled with alcohol or substance abuse?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Have you or a close family member ever served in the military?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>


<FormControl>
<FormLabel id="demo-radio-buttons-group-label">Do you have medical insurance?</FormLabel>
<RadioGroup
aria-labelledby="demo-radio-buttons-group-label"
defaultValue=""
name="radio-buttons-group"
>
<FormControlLabel value="yes" control={<Radio />} label="Yes" />
<FormControlLabel value="no" control={<Radio />} label="No" />
</RadioGroup>
</FormControl>
</div>
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
/>
</div>
<div>
<p>We would love you to help us create Helen House’s community agreements. What are some guidelines you would like to
honor as part of your time at Helen House? (for example: no judgmental statements, no stealing, etc.)</p>
<TextField
id="outlined-multiline-static"
label=""
multiline
rows={4}
defaultValue=""
/>


<p>What kind of things would you like to see at Helen House? Any particular activities you’d like us to bring in, or regular
programming you’d like to see implemented?</p>
<TextField
id="outlined-multiline-static"
label=""
multiline
rows={4}
defaultValue=""
/>
<p>Lastly, we would love to know why Helen House is important to you?</p>
<TextField
id="outlined-multiline-static"
label=""
multiline
rows={4}
defaultValue=""
/>


</div>
</Box>
);
}




