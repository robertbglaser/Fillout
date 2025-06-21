import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight,  Asterisk, Check } from 'lucide-react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Container,Button, Radio, ButtonGroup, RadioGroup, InputLabel,Input, FormControlLabel,FormGroup, Typography, FormLabel, FormControl } from '@mui/material';

const AnythingElse = () => {
     let navigate = useNavigate()
  return (
        <> 
        

   <Container>
        
<br/>
<br/>
     
            
           <FormControl>
           <FormLabel sx={{color:'#FFFF'}}>Anything else you'd like to let us know?</FormLabel>
           <RadioGroup>
              <FormControlLabel value="Yes" control={<Radio/>} label={<Check/> } sx={{color:'#FFFF'}} variant="solid"color="danger"/>
               <FormControlLabel value="No" control={<Radio/>} label={'X  NO'  } sx={{color:'#FFFF'}} variant="solid"color="danger"/>
                    
                 
                 </RadioGroup>
                 </FormControl>
                 {/* </Typography > */}
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