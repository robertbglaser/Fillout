import React from 'react'

import { useNavigate } from 'react-router-dom';
import { ArrowRight,  Asterisk, Check, Mail } from 'lucide-react';
import { Button, ButtonGroup, FormControl, FormControlLabel,InputLabel,Input, FormGroup } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Message} from 'js-message';


const ContactInfo = () => {
     let navigate = useNavigate()
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
 <FormControl>
     <FormGroup> 
       < InputLabel htmlFor="name">What is your email address?<Asterisk/>
</InputLabel>
       <p>We will send you birthday updates here!</p>
         
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <span>
              <Mail/><DatePicker  defaultValue={dayjs('')} />
        </span>
       
      </DemoContainer>
    </LocalizationProvider>
    </FormGroup>
    <FormGroup> </FormGroup>
    <FormGroup> 
        <Button sx={{bgcolor:'#DAA520'}} onClick={()=>{navigate('/guests')}}>Next <ArrowRight /></Button>
    </FormGroup>

  </FormControl>

  )
}

export default ContactInfo