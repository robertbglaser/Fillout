import React,{useState,} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, FormControl, InputLabel,Input } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { closestCorners, DndContext } from '@dnd-kit/core';
import { Check, EllipsisVertical, Plus, NotebookText, Flag, Pencil,Clipboard, Copy, Delete, User } from 'lucide-react';



  
    
const Footer = () => {
      const [contextMenu, setContextMenu] = useState(null);
      const [widgets, setWidgets] = useState([])
      const [actionTab, setActionTab ] = useState([buttons])


 
    
      
      
     const handleContextMenu = (event) => {
      event.preventDefault();
     
      setContextMenu(
        contextMenu === null
          ? {
              mouseX: event.clientX + 2,
              mouseY: event.clientY - 6,
            }
          :
            null,
      );
  
      // Prevent text selection lost after opening the context menu on Safari and Firefox
      const selection = document.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
  
        setTimeout(() => {
          selection.addRange(range);
        });
      }
    };
  
    const handleClose = () => {
      setContextMenu(null);
    };


    const buttons=[
        {
        text:'Add Page',
        icon: <Plus />,
        link: '/',
        id:1
    },
    {
        text:'Cover',
        icon: <EllipsisVertical />,
         link: '/',
        id:2
    },
     {
        text:'Basic Info',
        icon: <NotebookText/>,
         link: '/',
        id:3
    },
    {
        text:'Contact Info',
        icon: <NotebookText/>,
         link: '/contactInfo',
        id:4
    },
    {
        text:'Guests',
        icon: <User/>,
         link: '/guests',
        id:5
    },
    {
        text:'Anything Else?',
        icon: <NotebookText/>,
         link: '/anythingelse',
        id:6
    },
    {
        text:'Ending',
        icon: <Check/>,
         link: '/endings',
        id:7
    },
    ]
    
  return (
    <div className='footer' onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }} >
        <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}><Flag/>Set as First Page</MenuItem>
        <MenuItem onClick={handleClose}><Pencil/>Rename</MenuItem>
        <MenuItem onClick={handleClose}><Clipboard/>Copy</MenuItem>
        <MenuItem onClick={handleClose}><Copy/>Duplicate</MenuItem>
        <MenuItem onClick={handleClose}><hr/>------------</MenuItem>
        <MenuItem onClick={handleClose}><Delete/> Delete</MenuItem> 
      </Menu>
      
        <ButtonGroup variant="outlined"> 
    {buttons.map((desc)=>{
        return(
        <DndContext collisionDetection={closestCorners}> 
         <a href={desc.link} rel='nooper noreferr'>   
         <Button style={{backgroundColor:'white', color:'black', borderColor:'black'}}
         
         > 
          
          {desc.icon}
          {desc.text}
        
         </Button>
         </a> 
         </DndContext> 
        )
    
      })}
      
        </ButtonGroup>
      
    </div>
  )
}

export default Footer