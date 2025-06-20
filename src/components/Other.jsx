import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Button, ButtonGroup, FormControl, InputLabel,Input } from '@mui/material';

const Other = () => {
     let navigate = useNavigate()
  return (
    <div>Other

         <Button sx={{bgcolor:'#DAA520'}} onClick={()=>{navigate('/endings')}}>Next</Button>
    </div>
  )
}

export default Other