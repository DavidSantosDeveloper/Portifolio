//menu
import Menu from "../Menu/Menu"


// parte de habilidades
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

//icones da parte de habilidades
import { FaHtml5,FaCss3,FaJsSquare,FaSass,FaReact,FaNode,FaGitAlt,FaJava,FaPython,FaCuttlefish,FaPhp,FaDatabase, FaJs} from "react-icons/fa";
import {SiTypescript,SiStyledcomponents,SiCssmodules,SiRedux,SiPostgresql,SiGithub,SiNextdotjs,SiDotnet,SiSpring,SiSpringboot,SiMysql,SiMongodb,SiMaterialdesign} from "react-icons/si";
import { TbApi,TbBrandCpp,TbBrandCSharp,TbSql} from "react-icons/tb";
import { AiOutlineCode } from "react-icons/ai"
import { DiResponsive } from "react-icons/di";

//foto de perfil
import perfil from '../../assets/perfil.jpg'


//parte de projetos
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import imagem_projeto_lista_de_presenca from './../../assets/projeto_lista_de_presenca.png'
import imagem_projeto_github_search from "./../../assets/projeto_github_search.png"
import imagem_projeto_lista_de_tarefas from './../../assets/projeto_lista_de_tarefas.png'
import imagem_projeto_companhia_aerea from "./../../assets/projeto_companhia_aerea.png"

//parte dos contatos
import { SiLinkedin } from "react-icons/si";
import { LuMail} from "react-icons/lu";

//fucoes de abrir nova pagina -secao de contato
const abrir_link_do_likedIn_em_nova_pagina=()=>{
    window.open("https://www.linkedin.com/in/francisco-david-santos-sousa/","") 

}
const abrir_link_do_GitHub_em_nova_pagina=()=>{
  window.open("https://github.com/DavidSantosDeveloper","") 
}
const abrir_link_do_Gmail_em_nova_pagina=()=>{
  window.open("mailto:franciscodavidsantossousa@gmail.com","") 
}
const abrir_link_de_um_projeto=(url_do_projeto:string)=>{
  window.open(url_do_projeto,"") 
}


import "./Material.css"

export default function Material() {

  
  return (
    <>
      <Menu></Menu>

      <span>{JSON.stringify(window.screen)}</span>
            <span>{"vh  "+window.innerHeight+" px"}</span>
            <span>{"vw  "+window.innerWidth+" px"}</span>

      <section className="secao-perfil" id='inicio'>

         
                  <img src={perfil} alt="" className="perfil" />

                <section className="secao_nome">
                      <h2 id='titulo_nome'>👋🏽 Olá,me chamo Francisco David</h2>
                      <h3 id='titulo_profissao'>Sou Desenvolvedor Full Stack e amante de UX/UI Experience.</h3>
                </section>
                <section className="secao_links_de_contato">
                    <a href="#aboutme"><span>Sobre mim</span></a>
                    <a href="#contacts"><span>Entrar em contato</span></a>
                </section>
      </section>
            
    

      <section className="secao_sobremim"  >

            {
              /*
                  <span>{JSON.stringify(window.screen)}</span>
                  <span>{"vh  "+window.innerHeight+" px"}</span>
                  <span>{"vw  "+window.innerWidth+" px"}</span>
              
              */
            }
            
              
            <section className="descricao_pessoal" id="aboutme" >
              <h4 id='titulo_sobre_mim'>Sobre mim</h4>
              <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      '& > :not(style)': {
                        m: 1,
                        width: '100%',
                        height: 'auto',
                        backgroundColor:'#ffffff',
                        padding:'15px',
                        textAlign:'Justify',
                        marginTop:'10vh'
                      },
                    }}
                  >
                    
                    <Paper elevation={5}>
                        <p>
                          Estudante do 2 período de Análise e Desenvolvimento de Sistemas pelo Instituto Federal do Piauí (IFPI),campus Teresina Central.
                          Apaixonado por tecnologia e desenvolvimento de software desde criança,essa indentificação se revelou mais ainda durante o período em que cursei o curso técnico integrado ao médio em Informática no IFPI e de modo único agora já na graduação.
                        </p>
                        <p>
                        Busco incessantemente aprender e desenvolver habilidades e conhecimentos para a construção de softwares eficientes,escaláveis e centrados na experiencia do usuário,por meio do aplicação dos conceitos  da área de UX/UI Designer.
                        </p>

                    </Paper>

                  </Box>
              </section>
      </section>

      <section className="secao_descricao_habilidades" id='habilities' >
          <h4>Habilidades:</h4>
          <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignContent:'center',
                      justifyContent:'center',
                      '& > :not(style)': {
                        m: 1,
                        width: '100px',
                        height: '100px',
                        backgroundColor:'#ffffff',
                        padding:'15px',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'center',
                        alignItems:'center'
                        
                      },
                    
                    }}
                  >
                    
                    
                    <Paper elevation={5}>
                        <FaHtml5></FaHtml5>
                        <span >HTML 5</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaCss3></FaCss3>
                        <span >CSS 3</span>
                    </Paper>
                    
                    <Paper elevation={5}>
                        <DiResponsive></DiResponsive>
                        <span >Responsividade</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaJsSquare></FaJsSquare>
                        <span >JavaScript</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiTypescript></SiTypescript>
                        <span >TypeScript</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaReact></FaReact>
                        <span >React JS</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiNextdotjs></SiNextdotjs>
                        <span > Next JS</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaSass></FaSass>
                        <span >SAAS</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiStyledcomponents></SiStyledcomponents>
                        <span >Styled-Components</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiCssmodules></SiCssmodules>
                        <span >CSS Modules</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiMaterialdesign></SiMaterialdesign>
                        <span >Material Design</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiRedux></SiRedux>
                        <span >Redux</span>
                    </Paper>
                    <Paper elevation={5}>
                        <AiOutlineCode></AiOutlineCode>
                        <span>Programação Orientada à Objeto</span>
                    </Paper>
                    <Paper elevation={5}>
                        <AiOutlineCode></AiOutlineCode>
                        <span>Princíprios de programação SOLID</span>
                    </Paper>
                    <Paper elevation={5}>
                        <AiOutlineCode></AiOutlineCode>
                        <span>Princíprios de programação CLEAN CODE</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaNode></FaNode>
                        <span >Node JS</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaJava></FaJava>
                        <span >Java</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiSpring></SiSpring>
                        <span >Spring</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiSpringboot></SiSpringboot>
                        <span >Spring Boot</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaPython></FaPython>
                        <span >Python</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaCuttlefish></FaCuttlefish>
                        <span >C</span>
                    </Paper>
                    <Paper elevation={5}>
                        <TbBrandCpp></TbBrandCpp>
                        <span >C++</span>
                    </Paper>
                    <Paper elevation={5}>
                        <TbBrandCSharp></TbBrandCSharp>
                        <span >C#</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiDotnet></SiDotnet>
                        <span >dotNet</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaPhp></FaPhp>
                        <span >PHP</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaDatabase></FaDatabase>
                        <span >Modelagem de BD Relacional</span>
                    </Paper>
                    <Paper elevation={5}>
                        <TbSql></TbSql>
                        <span >SQL</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiPostgresql></SiPostgresql>
                        <span >Postgree Sql</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiMysql></SiMysql>
                        <span >MySQL</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiMongodb></SiMongodb>
                        <span >MongoDB</span>
                    </Paper>
                    <Paper elevation={5}>
                        <TbApi></TbApi>
                        <span >Consumo de API`s REST</span>
                    </Paper>
                    <Paper elevation={5}>
                        <TbApi></TbApi>
                        <span >Criação de API`s REST</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaGitAlt></FaGitAlt>
                        <span >Git</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiGithub></SiGithub>
                        <span >GitHub</span>
                    </Paper>




                  </Box>

      </section>


      <section className="secao_lista_de_projetos" id='projetcs'>
            <h4>Lista de projetos</h4>
            <section id="projeto_lista_de_presenca" className="container_projeto" >
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                    image={imagem_projeto_lista_de_presenca}
                    title="projeto lista de presenca"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Lista de presença
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      Sistema de registro de presença de pessoas em um evento,especificando a data e hora do registro da assinatura.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'space-between' ,gap:'15px'}} className="container_card_tech_icons">
                            <span className=".card_tech_icon" ><FaHtml5></FaHtml5> HTML5</span>
                            <span className=".card_tech_icon"><FaCss3></FaCss3>CSS</span>
                            <span className=".card_tech_icon"><SiTypescript></SiTypescript>Typescript</span>
                            <span className=".card_tech_icon" style={{marginLeft:'15px'}}><FaReact></FaReact>React JS</span>
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://lista-de-presenca-peach.vercel.app/")}}   size="small" className="butao_card_projeto" >Ver Projeto</Button>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/Lista_De_Presenca")}}    size="small" className="butao_card_projeto" >Repositório</Button>
                </CardActions>
              </Card>

            </section>
            <section id="projeto_github_search" className="container_projeto" >
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                    image={imagem_projeto_github_search}
                    title="projeto_github_search"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  GitHubSearch
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      Sistema de busca de dados públicos de usuários do site Github da empresa Microsoft,plataforma esta muito famosa no mundo do 
                      desenvolvimento de software. O GitHubSearch lista informações de um usuario desta plataforma e mostra os softwares desenvolvidos pelos usuários pesquisados, assim como permitir um fácil acesso ao perfil dos mesmos e aos repositórios dos projetos.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'space-between'}} className="container_card_tech_icons">
                            <span className=".card_tech_icon"><FaHtml5></FaHtml5> HTML5</span>
                            <span className=".card_tech_icon"><FaCss3></FaCss3>CSS 3</span>
                            <span className=".card_tech_icon"><FaReact></FaReact>React JS</span>
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://git-hub-search-phi.vercel.app/")}}  size="small" className="butao_card_projeto" >Ver Projeto</Button>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/GitHubSearch")}} size="small" className="butao_card_projeto" >Repositório</Button>
                </CardActions>
              </Card>

            </section>

            <section id="projeto_lista_de_tarefas" className="container_projeto">
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                    image={imagem_projeto_lista_de_tarefas}
                    title="projeto_github_search"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lista de Tarefas
                </Typography>
                <Typography variant="body1" color="text.secondary">
                   Sistema de  Lista de tarefas com as funcionalidades de criar tarefas (com persistência de dados), editar tarefas existentes,deletar tarefas e mostrar/ocultar conteúdo total  de uma respectiva tarefa.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'space-between'}} className="container_card_tech_icons">
                            <span  className=".card_tech_icon"><FaHtml5></FaHtml5> HTML5</span>
                            <span className=".card_tech_icon"><FaCss3></FaCss3>CSS 3</span>
                            <span className=".card_tech_icon"><FaReact></FaReact>React JS</span>
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://lista-de-tarefas-eta-five.vercel.app/")}} size="small" className="butao_card_projeto" >Ver Projeto</Button>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/Lista_De_Tarefas")}} size="small" className="butao_card_projeto" >Repositório</Button>
                </CardActions>
              </Card>

            </section>


            <section id="projeto_companhia_aerea" className="container_projeto">
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                    image={imagem_projeto_companhia_aerea}
                    title="projeto_companhia_aerea"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Companhia Aérea 
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Mini Sistema de Companhia Aérea desenvolvido  para um desafio técnico,cujo requisitos podem ser vistos com detalhes no link a seguir: <a href="https://docs.google.com/document/d/1VVckJEB3RyTF8fgC7gsnCX76vTl0fWU-tqw5Ekwhqgw/edit?usp=sharing" target="_blank">Requisitos</a> (O nome da empresa foi presevado). A aplicação inclui cadrastro e validação de campos multivalorados de formulários,custominização de mensagens informativas ao usuário,armazenamento dos dados e geração de relatórios sobre os voos.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'space-between'}} className="container_card_tech_icons">
                            <span  className=".card_tech_icon"><FaHtml5></FaHtml5> HTML5</span>
                            <span className=".card_tech_icon"><FaCss3></FaCss3>CSS 3</span>
                            <span className=".card_tech_icon"><FaJs></FaJs>JavaScript</span>
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://companhia-aerea-pink.vercel.app/")}} size="small" className="butao_card_projeto" >Ver Projeto</Button>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/companhia-aerea")}} size="small" className="butao_card_projeto" >Repositório</Button>
                </CardActions>
              </Card>

            </section>

      </section>

      <section className="secao_contatos" id='contacts'>
              <h4>Contatos</h4>

             <div id='container_do_container_dos_cards_contatos'>
                <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          '& > :not(style)': {
                            m: 1,
                            width: '100px',
                            height: '150px',
                            backgroundColor:'#ffffff',
                            padding:'15px',
                            textAlign:'Justify',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center'
                          },
                          '& > :not(style):hover':{
                            background:'linear-gradient(to top right,#badcf4,#74a1d4)',
                            color:'white'
                          }
                        
                        }}
                      >
                        
                          <Paper elevation={5} >
                                <div id='contato_linkedin' onClick={()=>{abrir_link_do_likedIn_em_nova_pagina()}} className="card_contato_item" style={{display:'flex',flexDirection:'column' ,gap:'10px',alignItems:'center'}}>
                                  <SiLinkedin></SiLinkedin>
                                  <a href="https://www.linkedin.com/in/francisco-david-santos-sousa/" target="_blank">LinkedIn</a>
                                </div>

                          </Paper>

                          <Paper elevation={5}>
                                <div onClick={()=>{abrir_link_do_GitHub_em_nova_pagina()}} className="card_contato_item" style={{display:'flex',flexDirection:'column' ,gap:'10px',alignItems:'center'}}>
                                  <SiGithub></SiGithub>
                                  <a href="https://github.com/DavidSantosDeveloper" target="_blank">GitHub</a>
                                </div>

                          </Paper>
                        

                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          '& > :not(style)': {
                            m: 1,
                            width: 'auto',
                            height: 'auto',
                            backgroundColor:'#ffffff',
                            padding:'15px',
                            textAlign:'Justify',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center'
                          },
                          '& > :not(style):hover':{
                            background:'linear-gradient(to top right,#badcf4,#74a1d4)',
                            color:'white'
                          },
                          '& > :not(style):>h6':{
                            display:'inline'
                          },
                          '& > :not(style):>h6:hover':{
                              
                          }
                        }}
                      >
                            <Paper elevation={5} sx={{height:'100px',width:'100px'}}>
                                <div onClick={()=>{abrir_link_do_Gmail_em_nova_pagina()}} id='card_contato_email' className="card_contato_item" style={{display:'flex',flexDirection:'column' ,gap:'10px',alignItems:'center' ,boxSizing:'border-box'}}>
                                  <LuMail></LuMail>
                                  <h6 id="texto_email">franciscodavidsantossousa@gmail.com</h6>
                                  <a href="mailto:franciscodavidsantossousa@gmail.com" id="butao_enviar_email">Enviar email</a>
                                </div>

                          </Paper>

                      </Box>
             </div>
      </section>
      
    </>
  )
}
