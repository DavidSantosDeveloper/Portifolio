
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import './Menu.css'

export default function Menu() {
  return (
    <>
        <Box sx={{ flexGrow: 1,fontSize:'3rem'}}>
            <AppBar position="static">
              <Toolbar sx={{height:'auto'}}>
                <IconButton
                  
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 ,fontSize:'3rem',
                    '& > :not(style) svg':{
                        height:'100px !important'
                        height:'100px !important'
                  }
                }}
                  classes='butao_sanduiche'
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontSize:'3rem' }}>
                  Menu
                </Typography>
                
              </Toolbar>
            </AppBar>
    </Box>
    
    
    
    </>
  )
}
