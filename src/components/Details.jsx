import React from 'react'
import { useNavigate } from 'react-router-dom';


import { Button, ButtonGroup, FormControl, InputLabel,Input } from '@mui/material';

const Details = () => {
     let navigate = useNavigate()
  return (
    <div>Details

         <Button sx={{bgcolor:'#DAA520'}} onClick={()=>{navigate('/other')}}>Next</Button>
    </div>
  )
}

export default Details