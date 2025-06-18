import React from 'react'
import { Button, ButtonGroup, FormControl, InputLabel,Input } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { DndContext } from '@dnd-kit/core';
import { Check, EllipsisVertical, Plus, NotebookText, Flag, Pencil,Clipboard, Copy, Delete } from 'lucide-react';



  
    
const Footer = () => {
      const [contextMenu, setContextMenu] = React.useState(null);
      
    const handleContextMenu = (event) => {
      event.preventDefault();
  
      setContextMenu(
        contextMenu === null
          ? {
              mouseX: event.clientX + 2,
              mouseY: event.clientY - 6,
            }
          : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
            // Other native context menus might behave different.
            // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
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
    <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
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