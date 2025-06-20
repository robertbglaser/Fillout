import React,{useState,} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, FormControl, InputLabel,Input } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { DndContext } from '@dnd-kit/core';
import { Check, EllipsisVertical, Plus, NotebookText, Flag, Pencil,Clipboard, Copy, Delete } from 'lucide-react';
import { Reorder } from 'framer-motion';


  
    
const Footer = () => {
      const [contextMenu, setContextMenu] = useState(null);
      const [widgets, setWidgets] = useState([])
    //  let navigate = useNavigate()

    
      
      
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
        link: '/'
    },
    {
        text:'Cover',
        icon: <EllipsisVertical />,
    },
     {
        text:'Basic Info',
        icon: <NotebookText/>,
         link: '/'
    },
    {
        text:'Contact Info',
        icon: <NotebookText/>,
         link: '/details'
    },
    {
        text:'Anything Else?',
        icon: <NotebookText/>,
         link: '/other'
    },
    {
        text:'Ending',
        icon: <Check/>,
         link: '/endings'
    },
    ]
    
  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }} >
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
      {/* <Reorder.Group values={buttons} onReorder={setButtons}>  */}
        <ButtonGroup variant="outlined"> 
    {buttons.map((desc)=>{
        return(
        // <Reorder.Item values={desc} key={desc}> 
         <a href={desc.link} rel='nooper noreferr'>   
         <Button
         
         > 
          
          {desc.icon}
          {desc.text}
        
         </Button>
         </a>   
        )
        // </Reorder.Item> 
      })}
      
        </ButtonGroup>
        {/* </Reorder.Group> */}
    </div>
  )
}

export default Footer