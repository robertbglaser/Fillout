import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight,  Asterisk, Check } from 'lucide-react';
import {Box, Button, ButtonGroup, Input, FormLabel, FormControl, FormControlLabel, RadioGroup,   Radio,TextField,Typography, Container} 
from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Info = () => {
    let navigate = useNavigate()

  const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500
    },
    input: {
        color: 'white'
    }
});
  return (
    <> 
   <Container>
        <Box  display='flex' flexDirection='row'>    
           <Typography variant='h6' sx={{color:'#FFFF'}} >What is your name?
            <Input variant="outlined"  style={{ backgroundColor: "white"}} />
            </Typography>
    </Box>
     
<br/>
<br/> <FormControl>
           <FormLabel sx={{color:'#FFFF'}}>Are you able to attend<Asterisk/></FormLabel>
           <RadioGroup>
              <FormControlLabel value="Yes" control={<Radio/>} label={<Check/> } sx={{color:'#FFFF'}} variant="solid"color="danger"/>
               <FormControlLabel value="No" control={<Radio/>} label={'X  NO'  } sx={{color:'#FFFF'}} variant="solid"color="danger"/>
                    
                 
                 </RadioGroup>
                 </FormControl>
     
           {/* <Typography variant='h6' sx={{color:'#FFFF'}}>Are you able to attend?<Asterisk/>
           <br/>
            <RadioGroup defaultValue="outlined" name="radio-buttons-group">
                <Radio value="Yes"  sx={{bgColor:'#000000', color:'#FFFF',borderColor:'lightgray'}} 
                label={<Check/>}/> 
               
                <Radio sx={{bgColor:'#000000', color:'#FFFF', borderColor:'lightgray'}} value="No" label='X Nope'>

                </Radio>
            </RadioGroup>
           </Typography > */}
    
       
   <br/>
   <br/>
      
    
         <Button sx={{bgcolor:'#DAA520'}} onClick={()=>{navigate('/contactInfo')}}>Next <ArrowRight /></Button>
    </Container>






   </>
  )
}

export default Info