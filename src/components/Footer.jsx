import React from 'react'
import { Button, ButtonGroup, FormControl, InputLabel,Input } from '@mui/material';
import ContextMenu from './ContextMenu';
import { createIcons, icons } from 'lucide';
import { Check, EllipsisVertical, Plus, NotebookText } from 'lucide-react';

createIcons({ icons });

  

const Footer = () => {

    const buttons=[
        {
        text:'Add Page',
        icon: <Plus />,
    },
    {
        text:'Cover',
        icon: <EllipsisVertical />,
    },
     {
        text:'Basic Info',
        icon: <NotebookText/>,
    },
    {
        text:'Contact Info',
        icon: <NotebookText/>,
    },
    {
        text:'Anything Else?',
        icon: <NotebookText/>,
    },
    {
        text:'Ending',
        icon: <Check/>,
    },
    ]
    
  return (
    <div>
        <ButtonGroup variant="outlined"> 
    {buttons.map((desc)=>{
        return(
         <Button 
         > 
          {desc.icon}
          {desc.text}
        
         </Button>   
        )
      })}
        </ButtonGroup>
    </div>
  )
}

export default Footer