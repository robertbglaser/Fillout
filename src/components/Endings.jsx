import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, FormControl, InputLabel,Input } from '@mui/material';

const Endings = () => {
    let navigate = useNavigate()
  return (
    <div>Endings
         <Button onClick={()=>{navigate('/')}}>Home</Button>
    </div>
  )
}

export default Endings