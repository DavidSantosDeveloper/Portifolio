//menu
import Menu from "../Menu/Menu"


// parte de habilidades
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

//icones da parte de habilidades
import { FaHtml5,FaCss3,FaJsSquare,FaSass,FaReact,FaNode,FaGitAlt,FaJava,FaPython,FaPhp,FaDatabase, FaJs,FaAngular,FaVuejs} from "react-icons/fa";
import {SiTypescript,SiStyledcomponents,SiCssmodules,SiRedux,SiPostgresql,SiGithub,SiNextdotjs,SiDotnet,SiSpring,SiMysql,SiMongodb,SiMaterialdesign,SiFlyway,SiCsharp, SiFigma ,SiDocker,SiSwagger} from "react-icons/si";
import { TbApi,TbBrandCpp,TbBrandCSharp,TbSql} from "react-icons/tb";
import {GrMysql} from "react-icons/gr"
import { AiOutlineCode } from "react-icons/ai"
import { DiResponsive} from "react-icons/di";

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
import imagem_projeto_ecommerce_jogos from "./../../assets/projeto_ecommerce_jogos.png"
import imagem_projeto_landing_page_med from "./../../assets/projeto_landing_page_med.jpeg"
import imagem_projeto_vue from "../../assets/projeto_vue.jpeg"
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
                      {
                        /*
                        <p>
                          Estudante do 2 período de Análise e Desenvolvimento de Sistemas pelo Instituto Federal do Piauí (IFPI),campus Teresina Central.
                          Apaixonado por tecnologia e desenvolvimento de software desde criança,essa indentificação se revelou mais ainda durante o período em que cursei o curso técnico integrado ao médio em Informática no IFPI e de modo único agora já na graduação.
                        </p>
                        <p>
                        Busco incessantemente aprender e desenvolver habilidades e conhecimentos para a construção de softwares eficientes,escaláveis e centrados na experiencia do usuário,por meio do aplicação dos conceitos  da área de UX/UI Designer.
                        </p>
                        */
                     }
                        <p>
                            Sou estudante do 3º período de Análise e Desenvolvimento de Sistemas no Instituto Federal do Piauí (IFPI), campus Teresina Central e aluno do SENAI no curso desenvolvedor Full-Stack Angular e Dotnet. Desde a infância, nutro uma paixão pela tecnologia e pelo desenvolvimento de software. Essa afinidade se acentuou durante o curso técnico integrado ao ensino médio em Informática no IFPI e ganhou novas dimensões com a minha atual jornada na graduação.
                        </p>
                        <p>
                        Meu foco principal está em desenvolver tanto a interface como a lógica da aplicação com foco na experiência do usuário e na escalabilidade do sistema. A aplicação dos conceitos da área de UX/UI Design é uma parte crucial do meu aprendizado, visto que me permite aprimorar a interseção entre a tecnologia e a experiência humana. Além disso, busco continuamente aprimorar-me em temas como o pensamento computacional, algoritmos, estrutura de dados e arquitetura de sistemas, pois são essenciais para o desenvolvimento de soluções backend eficientes, escaláveis e seguras.
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
                        <SiFigma></SiFigma>
                        <span >Figma</span>
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
                        <FaAngular></FaAngular>
                        <span >Angular</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaVuejs></FaVuejs>
                        <span >Vue JS</span>
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
                        <span>SOLID e Clean Code</span>
                    </Paper>
                    <Paper elevation={5}>
                        <AiOutlineCode></AiOutlineCode>
                        <span>Arquitetura de software</span>
                    </Paper>
                   
                    <Paper elevation={5}>
                        <FaJava></FaJava>
                        <span >Java</span>
                    </Paper>
                    <Paper elevation={5}>
                        <SiSpring></SiSpring>
                        <span >Spring</span>
                    </Paper>
                    {/* <Paper elevation={5}>
                        <SiSpringboot></SiSpringboot>
                        <span >Spring Boot</span>
                    </Paper> */}
                    <Paper elevation={5}>
                        <FaPython></FaPython>
                        <span >Python</span>
                    </Paper>
                    <Paper elevation={5}>
                        <FaNode></FaNode>
                        <span >Node JS</span>
                    </Paper>
                    {/* <Paper elevation={5}>
                        <FaCuttlefish></FaCuttlefish>
                        <span >C</span>
                    </Paper> */}
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
                        <span >SQL e PL/SQL</span>
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
                    <Paper elevation={5}>
                        <SiDocker></SiDocker>
                        <span >Docker</span>
                    </Paper>




                  </Box>

      </section>


      <section className="secao_lista_de_projetos" id='projetcs'>
            <h4>Lista de projetos</h4>

            <section id="projeto_ecommerce_jogos" className="container_projeto" >
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                    image={imagem_projeto_ecommerce_jogos}
                    title="projeto lista de presenca"
                />
                
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                E-commerce de jogos (Em Desenvolvimento)
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      Sistema de e-commerce de jogos. Projeto envolve rotas autentificadas,login de usuarios(clientes,funcionarios e administradores) por enquanto via JSON SERVER.funcionarios autorizados podem cadrastrar novos produtos(Implementado) e gerenciar todas as vendas e transações(em breve).Será implementado o controle granular das permissões e autorizações.No momento estou desenvolvendo a API REST que conectará o front-end e o back end e também disponibilizando,brevemente, as formas de pagamento. Com relação aos clientes e produtos será implementado em breve o cadrastro e o carinho de compras.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'space-between' ,gap:'15px',flexWrap:"wrap"}} className="container_card_tech_icons">
                            <span className="card_tech_icon color-html" ><FaHtml5></FaHtml5> HTML5</span>
                            <span className="card_tech_icon color-css"><FaCss3></FaCss3>CSS</span>
                            <span className="card_tech_icon color-ts"><SiTypescript></SiTypescript>Typescript</span>
                            <span className="card_tech_icon color-angular" style={{marginLeft:'5px'  }}> <FaAngular></FaAngular>Angular</span>
                            <span className="card_tech_icon color-java" style={{marginLeft:'5px'}}>  <FaJava></FaJava> Java</span>
                           {/* // <div style={{display:'block'}}> */}
                                <span className="card_tech_icon color-spring" style={{marginLeft:'5px'}}>  <SiSpring></SiSpring> Spring</span>
                                <span className="card_tech_icon color-spring" style={{marginLeft:'5px'}}>  <SiSpring></SiSpring> Hibernate</span>
                                <span className="card_tech_icon color-flyway" style={{marginLeft:'5px'}}>  <SiFlyway></SiFlyway> Flyway</span>
                                <span className="card_tech_icon color-api-rest" style={{marginLeft:'5px'}}>   <TbApi></TbApi>API REST</span>
                                <span className="card_tech_icon color-spring" style={{marginLeft:'5px'}}>  <SiSpring></SiSpring> Spring Security</span>
                                <span className="card_tech_icon color-postgree" style={{marginLeft:'5px'}}>  <SiPostgresql></SiPostgresql> PostgreeSql</span>
                                <span className="card_tech_icon color-api-rest" style={{marginLeft:'5px'}}>   <TbApi></TbApi>Consumo de API REST</span>
                                
                            {/* </div> */}
                
                            

                           

                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://modulo-front-end-com-angular-com-consumo-d-davidsantosdeveloper.vercel.app/inicio")}}   size="small" className="butao_card_projeto" >Ver Projeto</Button>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/Modulo_Front-End_com_Angular_Com_Consumo_De_API_Full-Stack_Senai_SP")}}    size="small" className="butao_card_projeto" >Repositório</Button>
                </CardActions>
              </Card>

            </section>
            <section id="projeto_landing_page_med" className="container_projeto" >
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                     image={imagem_projeto_landing_page_med}
                    title="projeto lista de presenca"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 Landing page empresa MED
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Landing page para uma empresa fictícia na área da saúde.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'space-between' ,gap:'15px'}} className="container_card_tech_icons">
                            <span className="card_tech_icon color-html" ><FaHtml5></FaHtml5> HTML5</span>
                            <span className="card_tech_icon color-css"><FaCss3></FaCss3>CSS</span>
                            <span className="card_tech_icon color-ts"><SiTypescript></SiTypescript>Typescript</span>
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://landing-page-med.vercel.app/")}}   size="small" className="butao_card_projeto" >Ver Projeto</Button>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/Landing_Page_MED")}}    size="small" className="butao_card_projeto" >Repositório</Button>
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
                      O projeto explora tópicos como Consumo de API REST do site github,Gerenciamento de estados,Renderização condicional e componentização.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'space-between'}} className="container_card_tech_icons">
                            <span className="card_tech_icon color-html"><FaHtml5></FaHtml5> HTML5</span>
                            <span className="card_tech_icon color-css"><FaCss3></FaCss3>CSS 3</span>
                            <span className="card_tech_icon color-react"><FaReact></FaReact>React JS</span>
                            <span className="card_tech_icon color-api-rest"> <TbApi></TbApi>Consumo de API REST</span>
                           
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
                   Sistema de  Lista de tarefas com as funcionalidades de criar tarefas (com persistência de dados), editar tarefas existentes,deletar tarefas e mostrar/ocultar conteúdo total  de uma respectiva tarefa. Projeto envolve gerenciamento de estado,responsividade,utilização de blibliotecas auxiliares criadas por mim,componentização e boas práticas de desenvolvimento e desempenho em React.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'space-between'}} className="container_card_tech_icons">
                            <span  className="card_tech_icon color-html"><FaHtml5></FaHtml5> HTML5</span>
                            <span className="card_tech_icon color-css"><FaCss3></FaCss3>CSS 3</span>
                            <span className="card_tech_icon color-react"><FaReact></FaReact>React JS</span>
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
                            <span  className="card_tech_icon color-html"><FaHtml5></FaHtml5> HTML5</span>
                            <span className="card_tech_icon color-css"><FaCss3></FaCss3>CSS 3</span>
                            <span className="card_tech_icon color-js"><FaJs></FaJs>JavaScript</span>
                            <span className="card_tech_icon color-ts"><SiTypescript></SiTypescript>TypeScript</span>
                            
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://companhia-aerea-pink.vercel.app/")}} size="small" className="butao_card_projeto" >Ver Projeto</Button>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/companhia-aerea")}} size="small" className="butao_card_projeto" >Repositório</Button>
                </CardActions>
              </Card>

            </section>

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
                            <span className="card_tech_icon color-html" ><FaHtml5></FaHtml5> HTML5</span>
                            <span className="card_tech_icon color-css"><FaCss3></FaCss3>CSS</span>
                            <span className="card_tech_icon color-ts"><SiTypescript></SiTypescript>Typescript</span>
                            <span className="card_tech_icon color-react" style={{marginLeft:'15px'}}><FaReact></FaReact>React JS</span>
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://lista-de-presenca-peach.vercel.app/")}}   size="small" className="butao_card_projeto" >Ver Projeto</Button>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/Lista_De_Presenca")}}    size="small" className="butao_card_projeto" >Repositório</Button>
                </CardActions>
              </Card>

            </section>
            <section id="projeto_vue" className="container_projeto" >
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                    image={imagem_projeto_vue}
                    title="projeto de gestão de colaboradores"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Protótipo de sistema de gestão de colaboradores
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      Mini Sistema de gestão de colaboradores feito a partir de um design Figma. O sistema consome uma API Rest que lista os colaboradores e permite o cadrastro de novos colaboradores.
                      O projeto utiliza a arquitetura front-end SPA (Single Page Application) com roteamento e autentificação por tokens.
                      Exemplo de um usuário para login:  usuario_teste_mario@infog2.com e senha:admin
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'space-between' ,gap:'15px',fontWeight:'bold'}} className="container_card_tech_icons">
                            <span className="card_tech_icon color-html" ><FaHtml5></FaHtml5> HTML5</span>
                            <span className="card_tech_icon color-sass"><FaSass></FaSass>Sass</span>
                            <span className="card_tech_icon color-ts"><SiTypescript></SiTypescript>Typescript</span>
                            <span className="card_tech_icon color-vue" style={{marginLeft:'15px'}}><FaVuejs></FaVuejs>Vue JS</span>
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://projeto-desafio-vue.vercel.app/#/")}}   size="small" className="butao_card_projeto" >Ver Projeto</Button>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/projeto_desafio_vue")}}    size="small" className="butao_card_projeto" >Repositório</Button>
                </CardActions>
              </Card>

            </section>

            





            <section id="projeto_api_backend_app_maps_acessiblidade" className="container_projeto" >
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                    // image={imagem_projeto_lista_de_presenca}
                    title="projeto lista de presenca"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
              API REST Mapa de locais com acessibilidade
                </Typography>
                <Typography variant="body1" color="text.secondary">
                A API REST Mapa de Locais com Acessibilidade faz parte de uma iniciativa que visa oferecer uma plataforma mobile dedicada a fornecer informações sobre locais acessíveis na cidade para pessoas com deficiência. O aplicativo móvel exibe um mapa dinâmico da cidade, ou de qualquer localidade do mundo, no qual os usuários podem adicionar locais acessíveis e visualizar informações e avaliações sobre eles.

                A API gerencia os dados do mapa, permitindo autenticação de usuários, cadastro e avaliação de locais acessíveis, além da consulta de informações. Sua arquitetura segue o Domain-Driven Design (DDD), com camadas bem definidas que garantem modularidade e manutenção facilitada. Utiliza DTOs para comunicação entre camadas, tratamento centralizado (e personalizado) de exceções e validação de dados.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'left' ,gap:'20px'}} className="container_card_tech_icons">
                                <span className="card_tech_icon color-java" style={{marginLeft:'5px'}}>  <FaJava></FaJava> Java</span>
        
                                <span className="card_tech_icon color-spring" style={{marginLeft:'5px'}}>  <SiSpring></SiSpring> Spring</span>
                                <span className="card_tech_icon color-postgree" style={{marginLeft:'5px'}}>  <SiPostgresql></SiPostgresql> PostgreeSQL</span>
                                <span className="card_tech_icon color-docker" style={{marginLeft:'5px'}}>  <SiDocker></SiDocker> Docker</span>
                                <span className="card_tech_icon color-api-swagger" style={{marginLeft:'5px'}}>   <SiSwagger></SiSwagger>Swagger</span>
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://backendappmapsacessibilidade-production-783d.up.railway.app/swagger-ui/index.html#/")}}   size="small" className="butao_card_projeto" >Ver Documentação</Button>
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/back_end_app_maps_acessibilidade")}}    size="small" className="butao_card_projeto" >Repositório</Button>
                </CardActions>
              </Card>

            </section>

            <section id="projeto_api_ecommerce_jogos" className="container_projeto">
  <Card sx={{ maxWidth: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <CardMedia
      sx={{ height: '250px', width: '300px' }}
      // image={imagem_projeto_ecommerce_jogos}
      title="projeto api rest ecommerce jogos"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        API REST e-commerce de jogos
      </Typography>
      <Typography variant="body1" color="text.secondary">
      API REST para gerenciamento de um e-commerce de jogos, desenvolvida com Java, Spring Boot, JPA Repository e PostgreSQL. Segue a arquitetura Domain-Driven Design (DDD), com camadas bem definidas (Domínio, Aplicação, Infraestrutura e Apresentação), promovendo modularidade e fácil manutenção. Utiliza DTOs (Data Transfer Objects) para comunicação entre camadas, tratamento centralizado de exceções e validação de dados, garantindo robustez, segurança e integridade nas operações.
      </Typography>
      <Typography variant="body1" color="text.secondary">
        <p style={{ fontWeight: 'bold' }}>Tecnologias usadas no projeto:</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }} className="container_card_tech_icons">
          <span className="card_tech_icon color-java"><FaJava /> Java</span>
          <span className="card_tech_icon color-spring"><SiSpring /> Spring</span>
          <span className="card_tech_icon color-spring"><SiSpring /> Hibernate</span>
          <span className="card_tech_icon color-postgree"><SiPostgresql /> PostgreSQL</span>
        </div>
      </Typography>
    </CardContent>
    <CardActions>
      {/* <Button onClick={() => abrir_link_de_um_projeto("")} size="small" className="butao_card_projeto">Ver Projeto</Button> */}
      <Button onClick={() => abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/api_rest_java_spring_ecommerce_jogos")} size="small" className="butao_card_projeto">Ver Repositório</Button>
    </CardActions>
  </Card>
            </section>

            <section id="projeto_api_amigo_oculto" className="container_projeto">
                  <Card sx={{ maxWidth: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <CardMedia
                      sx={{ height: '250px', width: '300px' }}
                      // image={imagem_projeto_amigo_oculto}
                      title="projeto amigo oculto"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        API REST Amigo Oculto
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        API Amigo Oculto para realização de sorteio de amigo secreto, contendo recursos como Eventos, Sorteio e Usuário. Projeto segue arquitetura Clean Architecture com métodos HTTP para GET, POST, PUT e DELETE.
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        <p style={{ fontWeight: 'bold' }}>Tecnologias usadas no projeto:</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }} className="container_card_tech_icons">
                          <span className="card_tech_icon color-java"><FaJava /> Java</span>
                          <span className="card_tech_icon color-spring"><SiSpring /> Spring</span>
                          <span className="card_tech_icon color-spring"><SiSpring /> Hibernate</span>
                          <span className="card_tech_icon color-postgree"><SiPostgresql /> PostgreSQL</span>
                        </div>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/api_amigo_oculto")} size="small" className="butao_card_projeto">
                      Ver Repositório
                      </Button>
                    </CardActions>
                  </Card>
            </section>

            <section id="projeto_api_awpags" className="container_projeto" >
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                    // image={imagem_projeto_lista_de_presenca}
                    title="projeto lista de presenca"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
              API REST AWPAGS
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    API AWPAGS contendo recursos Cliente e Parcelamento,o projeto utiliza conceitos de DDD,trata excecções,valida dados da api com ben validation e cria validações custominizadas,versionamento de banco de dados com flyway.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'center' ,gap:'10px'}} className="container_card_tech_icons">
                      {/* <img src="../../../public/java-logo.svg"/> */}
                       
                                <span className="card_tech_icon color-java" style={{marginLeft:'5px'}}><FaJava></FaJava>     Java</span>
        
                                <span className="card_tech_icon color-spring" style={{marginLeft:'0px'}}>  <SiSpring></SiSpring> Spring</span>
                                 <span className="card_tech_icon color-spring" style={{marginLeft:'0px'}}>  <SiSpring></SiSpring> Hibernate</span>
                                 <span className="card_tech_icon color-postgree" style={{marginLeft:'0px'}}>  <SiPostgresql></SiPostgresql> PostgreeSQL</span>
                                 <div style={{display:"block"}}>
                                <span className="card_tech_icon color-flyway" style={{marginLeft:'0px',display:"block"}}>  <SiFlyway></SiFlyway> Flyway</span>
                                 </div>
                                
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button onClick={()=>{abrir_link_de_um_projeto("")}}   size="small" className="butao_card_projeto" >Ver Projeto</Button> */}
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/API_REST_AWPAGS")}}    size="small" className="butao_card_projeto" >Ver Repositório</Button>
                </CardActions>
              </Card>

            </section>
            <section id="projeto_api_hotel" className="container_projeto" >
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                    // image={imagem_projeto_lista_de_presenca}
                    title="projeto lista de presenca"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
              API REST hotel
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    API REST HOTEL contendo recursos hospede,funcionario,apto(apartamento ),categoria e hospedagem
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'left' ,gap:'20px'}} className="container_card_tech_icons">
                                <span className="card_tech_icon color-java" style={{marginLeft:'5px'}}>  <FaJava></FaJava> Java</span>
        
                                <span className="card_tech_icon color-spring" style={{marginLeft:'5px'}}>  <SiSpring></SiSpring> Spring WEB</span>
                                 <span className="card_tech_icon color-spring" style={{marginLeft:'5px'}}>  <SiSpring></SiSpring> Hibernate</span>
                                 <span className="card_tech_icon color-postgree" style={{marginLeft:'5px'}}>  <SiPostgresql></SiPostgresql> PostgreeSQL</span>
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button onClick={()=>{abrir_link_de_um_projeto("")}}   size="small" className="butao_card_projeto" >Ver Projeto</Button> */}
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/API_REST_JAVA_POSTGREE_HOTEL")}}    size="small" className="butao_card_projeto" >Ver Repositório</Button>
                </CardActions>
              </Card>

            </section>


             <section id="projeto_mvc_dotnet_sistema_vendas" className="container_projeto" >
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                    // image={imagem_projeto_lista_de_presenca}
                    title="projeto_mvc_dotnet_sistema_vendas"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
             Sistema de vendas MVC dotnet
                </Typography>
                <Typography variant="body1" color="text.secondary">
                   Projeto Desenvolvido como trabalho final da disciplina Análise e Projeto de Sistemas pertecente a grade curricular da graduação.O mesmo foi implementado a partir de um diagrama UML(Unified Modeling Language).
                   O Sistema web MVC foi construido utilizando .NET Framework ,Entity Framework como ORM,MySQL como banco de dados,foi criado as Views(Páginas web) como também os Controllers para atuação como API REST. 
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'center' ,gap:'10px'}} className="container_card_tech_icons">
                      {/* <img src="../../../public/java-logo.svg"/> */}
                       
        
                                <span className="card_tech_icon color-csharp" style={{marginLeft:'0px'}}>  <SiCsharp></SiCsharp> C#</span>
                                 <span className="card_tech_icon color-dotnet" style={{marginLeft:'0px'}}>  <SiDotnet></SiDotnet> .NET</span>
                                 <span className="card_tech_icon color-dotnet" style={{marginLeft:'0px'}}>  <SiDotnet></SiDotnet>Entity Framework</span>
                                 <span className="card_tech_icon color-mysql" style={{marginLeft:'0px'}}>  <GrMysql></GrMysql><span className="letras-my">My</span><span className="letras-sql">SQL</span>        </span>
                                 
                                
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button onClick={()=>{abrir_link_de_um_projeto("")}}   size="small" className="butao_card_projeto" >Ver Projeto</Button> */}
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/TrabalhoFinal_Disciplina_Analise_e_Projeto_de_Sistemas_ADS_II_IFPI")}}    size="small" className="butao_card_projeto" >Ver Repositório</Button>
                </CardActions>
              </Card>

            </section>
            <section id="projeto_mvc_dotnet_exoapi_gestao_de_projetos" className="container_projeto" >
                <Card sx={{ maxWidth: 'auto',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
                <CardMedia
                    sx={{ height: '250px' ,width:'300px'}}
                    // image={imagem_projeto_lista_de_presenca}
                    title="projeto_mvc_dotnet_sistema_vendas"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
             Api de gestão de projetos 
                </Typography>
                <Typography variant="body1" color="text.secondary">
                   Projeto Desenvolvido como trabalho final do módulo de aplicação back-end referente  a formação full-stack do Senai.O projeto consiste no desenvolvimento de uma API REST para gestão de projetos, com funcionalidades como cadastro, edição e exclusão de projetos de uma empresa.Foi implementado também a autentificação e autorização para o acesso a API. 
                   O Sistema  foi construido utilizando .NET Framework ,Entity Framework como ORM  e SQL server como banco de dados.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                      <p style={{fontWeight:'bold'}} >Tecnologias usadas no projeto:</p>
                      <div style={{display:'flex',justifyContent:'center' ,gap:'10px'}} className="container_card_tech_icons">
                      {/* <img src="../../../public/java-logo.svg"/> */}
                       
        
                                <span className="card_tech_icon color-csharp" style={{marginLeft:'0px'}}>  <SiCsharp></SiCsharp> C#</span>
                                 <span className="card_tech_icon color-dotnet" style={{marginLeft:'0px'}}>  <SiDotnet></SiDotnet> .NET</span>
                                 <span className="card_tech_icon color-dotnet" style={{marginLeft:'0px'}}>  <SiDotnet></SiDotnet>Entity Framework</span>
                                 <span className="card_tech_icon color-sql-server" style={{marginLeft:'0px'}}>  <FaDatabase></FaDatabase> SQL Server</span>
                                 
                                
                      </div>
                      
                </Typography>
                </CardContent>
                <CardActions>
                  {/* <Button onClick={()=>{abrir_link_de_um_projeto("")}}   size="small" className="butao_card_projeto" >Ver Projeto</Button> */}
                  <Button onClick={()=>{abrir_link_de_um_projeto("https://github.com/DavidSantosDeveloper/modulo_api_rest_senai_parte_4_atividade_exoapi")}}    size="small" className="butao_card_projeto" >Ver Repositório</Button>
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
