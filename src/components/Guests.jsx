import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight,  Asterisk, Check, Mail } from 'lucide-react';
import { Container, Box, Button, ButtonGroup, Chip, FormControlLabel,InputLabel,Input, FormGroup, Typography } from '@mui/material';

const Guests = () => {
     let navigate = useNavigate()
    const guests=[1,3,4,5,6,7,8,9,10]
        
  return (
   <Container maxWidth='lg'> 
     
       <Typography level="h3">How many guests will you be bringing?</Typography>
       <Typography level="body-md">Optional - just you coming is just enough!</Typography>
       <br/>
       <br/> 
       <Box display='flex' flexDirection='row'>
       {guests.map((count)=>{
        return(
         
            <Box p={2} m={2 }style={{borderStyle:'solid', borderColor: 'gray', backgroundColor:'gray'}}key={count}>{count}</Box> 
        
        )
       })}

<br/>
       <br/> 
      </Box>
         <Button sx={{bgcolor:'#DAA520'}} onClick={()=>{navigate('/anythingelse')}}>Next <ArrowRight /></Button>
     
       </Container>
       )
}

export default Guests