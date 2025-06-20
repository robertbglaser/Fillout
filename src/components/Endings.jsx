import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup, FormControl, InputLabel,Input, createTheme } from '@mui/material';

const Endings = () => {
 const styleObj = {
  "&:primary": {
    backgroundColor: '#DAA520'
  }
};
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#DAA520',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


    let navigate = useNavigate()
  return (
    <div>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/0FHEeG_uq5Y?si=9z5dPtO4hwUI6TVy" title="YouTube video player" border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
         <br/>
          <br/>
         <Button sx={{bgcolor:'#DAA520'}} onClick={()=>{navigate('/')}}>Click here to return home</Button>
    </div>
  )
}

export default Endings