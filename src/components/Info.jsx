import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ArrowRight,  Asterisk, Check } from 'lucide-react';
import { Button, ButtonGroup, FormControl, FormControlLabel,InputLabel,Input, FormGroup } from '@mui/material';

const Info = () => {
    let navigate = useNavigate()
  return (
    <> 
    <FormControl>
    <ButtonGroup>    
  <InputLabel htmlFor="name">What is your name?</InputLabel>
  <Input type="text" id="name" aria-describedby="my-helper-text" />
   </ButtonGroup> 

<FormGroup>
  <InputLabel htmlFor="name">Are you able to attend?<Asterisk/></InputLabel>
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
    {/* */}
     </FormGroup> 
    <Button sx={{bgcolor:'#DAA520'}} onClick={()=>{navigate('/details')}}>Next <ArrowRight /></Button>
</FormControl>



{/* //     <form> 
//    <label>
//     What is your name?*
//      </label><br/>
//     <input type='text'/>
  
// <br/>
//     <label>
//     Are you able to attend*</label><br/>
//     <button>Yes</button><br/>
//     <button>No</button>
   
// <br/> */}
{/* // <br/>
//    <button>Next</button>
//    </form> */}
   </>
  )
}

export default Info