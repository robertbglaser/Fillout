import React from 'react'
import { Button, ButtonGroup, FormControl, InputLabel,Input } from '@mui/material';

const Footer = () => {

    const menuItems =['Add Page','Cover', 'Basic Info', 'Contact Info', 'Anything Else?', 'Ending']
  return (
    <div>
        <ButtonGroup variant="outlined"> 
      {menuItems.map((desc)=>{
        return(
         <Button>{desc}</Button>   
        )
      })}
        </ButtonGroup>
    </div>
  )
}

export default Footer