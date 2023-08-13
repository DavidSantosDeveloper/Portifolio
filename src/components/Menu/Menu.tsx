

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

//<CloseIcon />

import { GrClose } from "react-icons/gr";

import { GiHamburgerMenu } from "react-icons/gi";

import './Menu.css'


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function Menu() {

  const [open, setOpen] = React.useState(false);

  

  const escolher_uma_opcao_do_menu= (opcao:React.MouseEvent)=>{
      handleClose()
      console.log(window.location.host)


     
      if(opcao.currentTarget.textContent=='Inicio'){
          window.location.assign(window.location.host+'/#inicio')
      }
      else if(opcao.currentTarget.textContent=='Sobre mim'){
          
          window.location.assign(window.location.host+'/#aboutme')
      }
      else if(opcao.currentTarget.textContent=='Habilidades'){
        window.location.assign(window.location.host+'/#habilities')
      }
      else if(opcao.currentTarget.textContent=='Lista de projetos'){
        window.location.assign(window.location.host+'/#projetcs')
      }
      else if(opcao.currentTarget.textContent=='Contato'){
        window.location.assign(window.location.host+'/#contacts')
      }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  
  return (
    <>
       <header>
              <section className='container_menu_hamburguer'>
                    
              <Button variant="outlined" onClick={handleClickOpen} 
              sx={{color:'black',border:'none',height:'auto',
              '&:hover':{
                    border:'none',
                    backgroundColor:'transparent'
              },
              '&:active':{
                border:'none',
                backgroundColor:'transparent'
              },
              '&:visited':{
                border:'none',
                backgroundColor:'transparent'
              },
              '& > :not(style) div':{
                border:'none',
                backgroundColor:'transparent'
              },
              '& > :not(style) div:active':{
                border:'none',
                backgroundColor:'transparent'
              },
              '& > :not(style) div:visited':{
                border:'none',
                backgroundColor:'transparent'
              }




              }}>
                    <div id='container_butao_do_texto_e_imagem'>
                          <GiHamburgerMenu></GiHamburgerMenu>
                          <h2>Menu</h2>
                    </div>
                   
                    
              </Button>        
              </section>

              <span id='titulo_portifolio'>Portifólio</span>

              <nav id='menu_normal'>
                    
                    <a href='#inicio'>Inicío</a>
                    <a href='#aboutme'>Sobre mim</a>
                    <a href='#habilities'>Habilidades</a>
                    <a href='#projetcs'>Projetos</a>
                    <a href='#contacts'>Contatos</a>     
              </nav>

       </header>

       <div>
      
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              
              <GrClose></GrClose>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Menu
            </Typography>
            
          </Toolbar>
        </AppBar>
        <List>

          <ListItem button >
              <ListItemText primary="Inicio" secondary="" onClick={(evento:React.MouseEvent )=>escolher_uma_opcao_do_menu(evento)}  />
          </ListItem>
          <Divider />

          <ListItem button >
              <ListItemText primary="Sobre mim" secondary=""  onClick={(evento:React.MouseEvent)=>{escolher_uma_opcao_do_menu(evento)}} />
          </ListItem>
          <Divider />

          <ListItem button>
            <ListItemText
              primary="Habilidades"
              secondary=""
              onClick={(evento:React.MouseEvent)=>{escolher_uma_opcao_do_menu(evento)}}
            />
          </ListItem>
          <Divider />

          <ListItem button>
            <ListItemText
              primary="Lista de projetos"
              secondary=""
              onClick={(evento:React.MouseEvent)=>{escolher_uma_opcao_do_menu(evento)}}
            />
          </ListItem>
          <Divider />

          <ListItem button>
            <ListItemText
              primary="Contato"
              secondary=""
              onClick={(evento:React.MouseEvent)=>{escolher_uma_opcao_do_menu(evento)}}
            />
          </ListItem>
          <Divider />

        </List>
      </Dialog>
    </div>
    
    </>
  )
}
