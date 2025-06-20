import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight,  Asterisk, Check } from 'lucide-react';
import { Button, ButtonGroup, FormControl, FormControlLabel,InputLabel,Input, FormGroup } from '@mui/material';

const Info = () => {
    let navigate = useNavigate()
  return (
    <> 
    <FormControl>
        <FormGroup>    
            <InputLabel htmlFor="name">What is your name?</InputLabel>
            <Input type="text" id="name" aria-describedby="my-helper-text" />
    </FormGroup> 

    <FormGroup>
           <InputLabel htmlFor="name">Are you able to attend?<Asterisk/></InputLabel>
    </FormGroup>

    
    <FormGroup>

        <ButtonGroup size="large" aria-label="Large button group" orientation="vertical">
                <Button>
                    <Check />
                    Yes
                </Button>
                <Button>
                X  Nope
                </Button>
        </ButtonGroup>

   
     </FormGroup> 
      <FormGroup>
         <Button sx={{bgcolor:'#DAA520'}} onClick={()=>{navigate('/contactInfo')}}>Next <ArrowRight /></Button>
    </FormGroup>
</FormControl>




   </>
  )
}

export default Info