import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button, ButtonGroup, FormControl, InputLabel,Input } from '@mui/material';

const Info = () => {
    let navigate = useNavigate()
  return (
    <> 
    <FormControl>
  <InputLabel htmlFor="name">What is your name?</InputLabel>
  <Input type="text" id="name" aria-describedby="my-helper-text" />

  <InputLabel htmlFor="name">Are you able to attend?</InputLabel>
    <ButtonGroup size="large" aria-label="Large button group" orientation="vertical">
            <Button>
                Yes
            </Button>
            <Button>
                No
            </Button>
    </ButtonGroup>
    <Button onClick={()=>{navigate('/details')}}>Next</Button>
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