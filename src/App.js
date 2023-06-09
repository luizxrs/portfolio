import {
  ExperiencesContent,
  ExperiencesDesign,
  ExperiencesDesignIcon,
  ExperiencesHeader,
  ExperiencesIcon,
  ExperiencesIconsWrapper,
  ExperiencesLogic,
  ExperiencesLogicIcon,
  ExperiencesTech,
  ExperiencesTechIcon,
  ExperiencesTitle,
  ExperiencesWrapper,
  AboutContent,
  AboutHeader,
  AboutText,
  AboutTitle,
  AboutWindow,
  AboutWrapper,
  CornerLogo,
  DownloadCv,
  Header,
  HomeButtons,
  HomeContent,
  HomeContentWrapper,
  HomeLeftSide,
  HomeProfilePicture,
  HomeRightSide,
  HomeTitle,
  HomeWrapper,
  Main,
  NavBar,
  NavLink,
  ProjectsContent,
  ProjectsHeader,
  ProjectsTitle,
  ProjectsWindow,
  ProjectsWrapper,
  PurpleTint,
  ContactMeButton,
  Footer,
  FooterContent,
  FooterTitle,
  FooterSections,
  FooterIcons,
  ContactWindow,
  ContactWindowWrapper,
  ProjectsArrowLeft,
  ProjectsArrowRight,
  BurgerButton,
  StyledMenu,
  MenuHeader,
  CloseMenuButton,
  MenuItemsWrapper,
  MenuItems,
  ItemLink,
  LogoPurpleMenu,
} from "./styles";
import GlobalStyle from "./globalStyle";
import whitelogo from "./assets/imgs/whitelogo.png";
import brain from "./assets/svgs/brain.svg";
import pencil from "./assets/svgs/pencil.svg";
import tech from "./assets/svgs/tech.svg";
import figma from "./assets/svgs/figma.svg";
import firebase from "./assets/svgs/firebase.svg";
import javascript from "./assets/svgs/javascript.svg";
import nodejs from "./assets/svgs/nodejs.svg";
import react from "./assets/svgs/react.svg";
import vscode from "./assets/svgs/vscode.svg";
import style from "./assets/svgs/style.svg";
import leftarrow from "./assets/svgs/leftarrow.svg";
import rightarrow from "./assets/svgs/rightarrow.svg";
import profile from "./assets/imgs/profile.png";
import purpleFullLogo from "./assets/svgs/purple-full-logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp, BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import { useEffect, useState } from "react";

function App() {
  const [fix, setFix] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [contactWindow, setContactWindow] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      const experiencesSection = document.getElementById("experiences");
      const projectsSection = document.getElementById("projects");
      const aboutSection = document.getElementById("about");

      const scrollTop = window.pageYOffset + 0.5 * window.innerHeight;

      const homeOffset = homeSection.offsetTop;
      const experiencesOffset = experiencesSection.offsetTop;
      const projectsOffset = projectsSection.offsetTop;
      const aboutOffset = aboutSection.offsetTop;

      if (scrollTop >= homeOffset && scrollTop < experiencesOffset) {
        setActiveLink("home");
      } else if (scrollTop >= experiencesOffset && scrollTop < projectsOffset) {
        setActiveLink("experiences");
      } else if (scrollTop >= projectsOffset && scrollTop < aboutOffset) {
        setActiveLink("projects");
      } else {
        setActiveLink("about");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = () => {
    setOpenBurger(!openBurger);
  };

  const setFixed = () => {
    if (window.scrollY > 10) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  window.addEventListener("scroll", setFixed);

  return (
    <>
      <GlobalStyle />
      <Main>
        <StyledMenu isOpen={openBurger}>
          <MenuHeader>
            <div className="menu-header-wrapper">
              <CloseMenuButton>
                <IoMdClose onClick={() => setOpenBurger(false)} />
              </CloseMenuButton>
              <LogoPurpleMenu
                src={purpleFullLogo}
                alt="Imagem da Logo No Menu"
              ></LogoPurpleMenu>
            </div>
          </MenuHeader>
          <MenuItemsWrapper>
            <MenuItems>
              <ItemLink onClick={() => setOpenBurger(false)} href="#home">
                Home
              </ItemLink>
            </MenuItems>
            <MenuItems>
              <ItemLink
                onClick={() => setOpenBurger(false)}
                href="#experiences"
              >
                Habilidades
              </ItemLink>
            </MenuItems>
            <MenuItems>
              <ItemLink onClick={() => setOpenBurger(false)} href="#projects">
                Meus Projetos
              </ItemLink>
            </MenuItems>
            <MenuItems>
              <ItemLink onClick={() => setOpenBurger(false)} href="#about">
                Sobre mim
              </ItemLink>
            </MenuItems>
          </MenuItemsWrapper>
        </StyledMenu>
        <Header fix={fix}>
          <div className="header-wrapper">
            <CornerLogo fix={fix}>
              <a href="#home">
                <img src={whitelogo} alt="Logo"></img>
              </a>
            </CornerLogo>
            <BurgerButton fix={fix} onClick={handleToggle}>
              <RxHamburgerMenu />
            </BurgerButton>
            <NavBar>
              <ul className="wrapper">
                <li>
                  <NavLink href="#home" active={activeLink === "home"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="#experiences"
                    active={activeLink === "experiences"}
                  >
                    Habilidades
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#projects" active={activeLink === "projects"}>
                    Projetos
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#about" active={activeLink === "about"}>
                    Sobre mim
                  </NavLink>
                </li>
              </ul>
            </NavBar>
          </div>
        </Header>

        <section id="home">
          <HomeWrapper>
            <HomeContentWrapper>
              <HomeLeftSide>
                <HomeProfilePicture>
                  <div className="image-container">
                    <div className="photo-wrapper">
                      <img
                        alt="Myself"
                        className="my-photo"
                        src="https://ae04.alicdn.com/kf/Se3628dab2f164d1bb209885355539efeW.jpg"
                      />
                    </div>
                    <div className="shadow-overlay" />
                  </div>
                </HomeProfilePicture>
              </HomeLeftSide>
              <HomeRightSide>
                <HomeContent>
                  <h3 className="home-profission">Full Stack Developer</h3>
                  <HomeTitle className="home-name">Luiz Gustavo</HomeTitle>
                  <h4 className="home-text">
                    Se você estava procurando um{" "}
                    <PurpleTint>desenvolvedor Backend ou Frontend</PurpleTint>,
                    você acabou de achar um! Me chamo Luiz Gustavo e estou
                    pronto para te ajudar no projeto que você desejar.{" "}
                    <PurpleTint>Continue descendo</PurpleTint> a página para
                    saber mais!
                  </h4>
                </HomeContent>
                <HomeButtons>
                  <div>
                    <ContactMeButton
                      onClick={() => setContactWindow(!contactWindow)}
                    >
                      Me contate!
                    </ContactMeButton>
                    <ContactWindow isOpen={contactWindow}>
                      <ContactWindowWrapper>
                        <MdEmail
                          className="icon"
                          onClick={() =>
                            window.open(
                              "https://mailto:lgustavoitp@gmail.com",
                              "_blank"
                            )
                          }
                        />
                        <BsDiscord
                          className="icon"
                          onClick={() =>
                            window.open(
                              "https://discordapp.com/users/490654525175365632",
                              "_blank"
                            )
                          }
                        />
                        <BsLinkedin
                          className="icon"
                          onClick={() =>
                            window.open(
                              "https://www.linkedin.com/in/luiz-souza-a6b128162/",
                              "_blank"
                            )
                          }
                        />
                        <BsGithub
                          className="icon"
                          onClick={() =>
                            window.open("https://github.com/luizxrs", "_blank")
                          }
                        />
                        <BsWhatsapp
                          className="icon"
                          onClick={() =>
                            window.open("https://wa.me/5547997711685", "_blank")
                          }
                        />
                      </ContactWindowWrapper>
                    </ContactWindow>
                  </div>
                  <DownloadCv>Baixar CV</DownloadCv>
                </HomeButtons>
              </HomeRightSide>
            </HomeContentWrapper>
          </HomeWrapper>
        </section>

        <section id="experiences">
          <ExperiencesWrapper>
            <ExperiencesHeader>
              <ExperiencesTitle>
                Hora de contar um pouco <PurpleTint>do que eu sei!</PurpleTint>
              </ExperiencesTitle>
            </ExperiencesHeader>
            <ExperiencesContent>
              <ExperiencesLogic className="content-wrapper">
                <ExperiencesLogicIcon>
                  <img src={brain} alt="brain"></img>
                </ExperiencesLogicIcon>
                <h4>
                  Parte <PurpleTint>Lógica</PurpleTint>
                </h4>
                <p>
                  Pegar uma xícara de café e programar diversas funções para
                  meus projetos é meu hobbie junto de encarar os bugs e passar
                  horas fuçando no stack overflow e na documentação. Se você
                  está em busca de um profissional capaz de encontrar soluções
                  inteligentes e desenvolver projetos de alta qualidade, estou
                  aqui para ajudar, com o objetivo de sempre evoluir e manter-me
                  atualizado.
                </p>
              </ExperiencesLogic>
              <ExperiencesDesign className="content-wrapper">
                <ExperiencesDesignIcon>
                  <img src={pencil} alt="pencil"></img>
                </ExperiencesDesignIcon>

                <h4>
                  <PurpleTint>Ui/Ux</PurpleTint> Design
                </h4>
                <p>
                  Com paixão pelo design de UI e UX, criando interfaces que
                  encantam os usuários. Trabalho com Styled Components, Tailwind
                  CSS e CSS padrão, trazendo beleza visual para cada projeto. E
                  com o Figma, prototipo e compartilho designs de forma ágil.
                  Posso criar algo especial que certamente vai agradar sem medo
                  de arriscar novas tecnologias.
                </p>
              </ExperiencesDesign>
              <ExperiencesTech className="content-wrapper">
                <ExperiencesTechIcon>
                  <img src={tech} alt="tech"></img>
                </ExperiencesTechIcon>

                <h4>
                  <PurpleTint>Técnologias</PurpleTint> que uso!
                </h4>
                <p>
                  Sendo do meu foco ReactJS para o front-end e NodeJS para o
                  back-end, consigo me adequar a qualquer outra necessidade e
                  não tenho medo de aprender coisas novas. Para a estilização
                  uso muito Styled-Components e estou aprendendo Tailwind CSS.
                  Participei de projetos usando FireBase com autenticação de
                  usuários. E por seguinte planejo também me aprofundar em React
                  Native!
                </p>
              </ExperiencesTech>
            </ExperiencesContent>
            <ExperiencesIconsWrapper>
              <ExperiencesIcon>
                <img src={figma} alt="figma logo"></img>
                <p>Figma</p>
              </ExperiencesIcon>
              <ExperiencesIcon>
                <img src={vscode} alt="vscode logo"></img>
                <p>Vscode</p>
              </ExperiencesIcon>
              <ExperiencesIcon>
                <img src={react} alt="React logo"></img>
                <p>ReactJS</p>
              </ExperiencesIcon>
              <ExperiencesIcon>
                <img src={style} alt="Styled Components + Tailwind logo"></img>
                <p>Styled Components + Tailwind</p>
              </ExperiencesIcon>
              <ExperiencesIcon>
                <img src={javascript} alt="javascript logo"></img>
                <p>JavaScript</p>
              </ExperiencesIcon>
              <ExperiencesIcon>
                <img src={nodejs} alt="nodejs logo"></img>
                <p>NodeJS</p>
              </ExperiencesIcon>
              <ExperiencesIcon>
                <img src={firebase} alt="firebase logo"></img>
                <p>Firebase</p>
              </ExperiencesIcon>
            </ExperiencesIconsWrapper>
          </ExperiencesWrapper>
        </section>
        <section id="projects">
          <ProjectsWrapper>
            <ProjectsHeader>
              <ProjectsTitle>
                Meus <PurpleTint>projetos</PurpleTint> recentes!
              </ProjectsTitle>
            </ProjectsHeader>
            <ProjectsContent>
              <ProjectsArrowLeft>
                <img src={leftarrow} alt="Seta para esquerda"></img>
              </ProjectsArrowLeft>
              <ProjectsWindow></ProjectsWindow>
              <ProjectsArrowRight>
                <img src={rightarrow} alt="Seta para direita"></img>
              </ProjectsArrowRight>
            </ProjectsContent>
          </ProjectsWrapper>
        </section>

        <section id="about">
          <AboutWrapper>
            <AboutHeader>
              <AboutTitle>
                Sobre <PurpleTint>mim</PurpleTint>!
              </AboutTitle>
            </AboutHeader>
            <AboutContent>
              <AboutWindow>
                <div className="profile-wrapper">
                  <img src={profile} alt="profile pic"></img>
                </div>
              </AboutWindow>
              <AboutText>
                <h1
                  dangerouslySetInnerHTML={{ __html: "&lt;LuizGustavo/&gt;" }}
                ></h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eu odio condimentum, commodo lacus quis, semper turpis. Mauris
                  vel dolor non massa tempor <PurpleTint>porta et </PurpleTint>
                  tempus diam. Morbi dapibus pharetra augue, ut semper nibh
                  cursus sit amet. Proin rutrum magna eget rhoncus egestas.
                  Vestibulum tincidunt iaculis commodo. Integer dapibus augue
                  quis metus sagittis iaculis. Proin nec tincidunt quam, eu{" "}
                  <PurpleTint>commodo risus.</PurpleTint> Vestibulum sodales
                  lectus vitae ligula eleifend, ut porta massa pulvinar. Quisque
                  pulvinar lacus in arcu tincidunt ultrices. amet. Proin
                </p>
              </AboutText>
            </AboutContent>
          </AboutWrapper>
        </section>
        <Footer>
          <FooterContent>
            <FooterTitle>
              <PurpleTint>Gostou?</PurpleTint> dê uma olhada nas minhas redes!
            </FooterTitle>
            <FooterSections>
              <a href="#home">Home</a>
              <a href="#experiences">Habilidades</a>
              <a href="#projects">Projetos</a>
              <a href="#about">Sobre mim</a>
            </FooterSections>
            <FooterIcons>
              <MdEmail
                className="icon"
                onClick={() =>
                  window.open("https://mailto:lgustavoitp@gmail.com", "_blank")
                }
              />
              <BsDiscord
                className="icon"
                onClick={() =>
                  window.open(
                    "https://discordapp.com/users/490654525175365632",
                    "_blank"
                  )
                }
              />
              <BsLinkedin
                className="icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/luiz-souza-a6b128162/",
                    "_blank"
                  )
                }
              />
              <BsGithub
                className="icon"
                onClick={() =>
                  window.open("https://github.com/luizxrs", "_blank")
                }
              />
              <BsWhatsapp
                className="icon"
                onClick={() =>
                  window.open("https://wa.me/5547997711685", "_blank")
                }
              />
            </FooterIcons>
          </FooterContent>
        </Footer>
      </Main>
    </>
  );
}

export default App;
