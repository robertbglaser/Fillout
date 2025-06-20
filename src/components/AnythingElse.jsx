import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight,  Asterisk, Check } from 'lucide-react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Container,Button, Radio, ButtonGroup, RadioGroup, InputLabel,Input, FormGroup, Typography } from '@mui/material';

const AnythingElse = () => {
     let navigate = useNavigate()
  return (
        <> 
        

   <Container>
        
<br/>
<br/>
     
           <Typography variant='h6' sx={{color:'#FFFF'}}>Anything else you'd like to let us know?
           <br/>
           <RadioGroup>
    
                     <Radio value="Yes" label="Yes" variant="solid"  orientation="horizontal"></Radio>
                     <Radio value="No" label="No" variant="solid" sx={{color:'#ffffff '}} orientation="horizontal"></Radio>
                 
                 </RadioGroup>
                 </Typography >
                 <br/>
                  <br/>
                <TextareaAutosize minRows={5} variant="outlined" />
           
    
       
   <br/>
   <br/>
    
        
       
          
            <Button sx={{bgcolor:'#DAA520'}} onClick={()=>{navigate('/endings')}}>Submit</Button>
             
     
        <br/>
   <br/>
    
    </Container>

    </>
           
  )
}

export default AnythingElse;