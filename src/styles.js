import styled, { keyframes } from "styled-components/macro";

const colors = {
  first: "#774cf0",
  second: "#5E2AB2",
  third: "#5626a3",
  fourth: "#3f1c77",
  fifth: "#28124c",
  sixth: "#1d142b",
};

const transitionPattern = "cubic-bezier(0.175, 0.885, 0.32, 1);";

const gradientTitleAnimation = keyframes`
  0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 100%;
  }
  0% {
    background-position-x: -100%;
  }
`;

export const Main = styled.div`
  overflow: hidden;
  section {
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ${transitionPattern};
  background-color: ${(props) =>
    props.fix ? "rgba(0, 0, 0, .4)" : "transparent"};
  height: ${(props) => (props.fix ? "6.4rem" : "10rem")};
  z-index: 9999;
  backdrop-filter: ${(props) => (props.fix ? "blur(2rem)" : "none")};
  border-bottom: ${(props) =>
    props.fix ? `1px solid ${colors.first}` : "none"};
  box-shadow: ${(props) => (props.fix ? `0 0 5rem rgba(0, 0, 0, 1)` : "none")};
`;

export const CornerLogo = styled.div`
  width: 15%;

  img {
    max-width: ${(props) => (props.fix ? `4rem` : "5rem")};
    cursor: pointer;
  }
`;
export const NavBar = styled.nav`
  width: 60%;
  padding-right: 15%;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

    li {
      font-size: 1.8rem;
      list-style: none;
    }
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: ${(props) => (props.active ? "#FFF" : "#FFF8")};
  letter-spacing: 0.1rem;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  &:hover {
    color: #fff;
  }
`;

export const HomeWrapper = styled.div`
  text-align: justify;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3vw;
`;

export const HomeLeftSide = styled.div`
  width: minmax(30rem, 40vw);
  width: clamp(30rem, 40vw, 50rem);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeProfilePicture = styled.div`
  width: clamp(30rem, 40vw, 50rem);
  height: clamp(30rem, 40vw, 50rem);

  border-radius: 50%;

  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1);

  background: linear-gradient(
    90deg,
    ${colors.first} 0%,
    ${colors.second} 50%,
    ${colors.first} 100%
  );
  box-shadow: 0px 0px 4rem rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 200%;
  animation: ${gradientTitleAnimation} 2s linear infinite;

  &:hover:not(& > *) {
    transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1);
    transform: scale(1.05);
    box-shadow: 0 0 10rem rgba(0, 0, 0, 0.6);
  }

  .image-container {
    width: 97%;
    height: 97%;
    position: relative;
    border-radius: 50%;
    overflow: hidden;

    &:hover {
      .my-photo {
        transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1);
        transform: rotate(5deg) scale(1.1);
      }

      .shadow-overlay {
        box-shadow: inset 0px 0px 4rem rgba(0, 0, 0, 1);
      }
    }
  }

  .my-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .photo-wrapper {
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
  }

  .shadow-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0px 0px 4rem rgba(0, 0, 0, 0.8);
  }
`;

export const HomeRightSide = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const HomeContent = styled.div`
  .home-profission {
    font-weight: 500;
    color: white;
  }

  .home-text {
    font-weight: 600;
    line-height: 3rem;
    color: white;
  }
`;

export const HomeButtons = styled.div`
  height: 6rem;
  /* width: clamp(10rem, 35vw, 36rem); */
  display: flex;

  margin-left: 40%;
  margin-bottom: -2rem;
  margin-top: 2rem;

  :first-child {
    position: relative;
  }
`;
export const ContactMeButton = styled.button`
  all: unset;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: clamp(1.2rem, 1.5vw, 1.6rem);
  letter-spacing: 0.05rem;
  width: clamp(12rem, 10vw, 30rem);
  z-index: 100;
  background: linear-gradient(
    180deg,
    ${colors.fourth} 0%,
    ${colors.third} 50%,
    ${colors.first} 100%
  );
  background-size: 100% 200%;
  background-position-y: 0%;
  border-radius: 3rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1);
  position: relative;
  outline: 0.3rem solid ${colors.first};

  &:hover {
    letter-spacing: 0.1rem;
    box-shadow: 0.4rem 0.8rem 2rem rgba(0, 0, 0, 0.3);
    background-position-y: 100%;
  }
`;

export const ContactWindowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5vw;
  row-gap: 0;
  flex-wrap: wrap;
  margin-top: 15%;
  width: 90%;
  height: 60%;

  svg {
    width: 1.5vw;
    height: 1.5vw;
    color: ${colors.fourth};
    cursor: pointer;

    &:hover {
      color: ${colors.first};
      filter: drop-shadow(0 0 2rem rgba(255, 255, 255, 0.5));
    }
  }
`;

export const ContactWindow = styled.div`
  outline: 0.3rem solid ${colors.first};
  height: ${(props) => (props.isOpen ? "12rem" : "0")};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 0 0 3rem 3rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.5);
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1);
  z-index: 1;

  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
`;

export const DownloadCv = styled.button`
  all: unset;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  letter-spacing: 0.05rem;
  font-size: clamp(1.2rem, 1.5vw, 1.6rem);
  letter-spacing: 0.05rem;
  margin-left: 2rem;
  width: clamp(12rem, 10vw, 30rem);
  background: #000000;
  box-shadow: 0px 0px 2.5rem 0.2rem rgba(100, 58, 218, 0.4);
  border-radius: 4rem;
  background-size: 100%;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1);

  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1.5px;
    border-radius: inherit; /* !importanté */
    background: linear-gradient(130.68deg, #6339d9 0%, #331782 100.52%);
  }

  &:hover {
    background-color: white;
    letter-spacing: 0.1rem;
    color: black;
    box-shadow: 0.4rem 0.8rem 2rem rgba(0, 0, 0, 0.8);
  }
`;

export const HomeTitle = styled.h1`
  font-weight: 800;
  letter-spacing: 0.3rem;
  line-height: 7rem;
  text-shadow: 0 0 10rem ${colors.first};
  background: linear-gradient(
    90deg,
    ${colors.first} 0%,
    ${colors.second} 50%,
    ${colors.first} 100%
  );
  max-width: 50rem;
  background-size: 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientTitleAnimation} 2s linear infinite;
  transition: all 1s ${transitionPattern};

  &:hover {
    letter-spacing: 0.5rem;
  }
`;

export const ExperiencesWrapper = styled.div`
  width: 90vw;
  height: 75vh;
  color: white;
  position: relative;
  margin-top: 6.4rem;
`;

export const PurpleTint = styled.span`
  color: ${colors.first};
  text-shadow: 0 0 3rem ${colors.first};
`;

export const ExperiencesHeader = styled.div``;
export const ExperiencesTitle = styled.h2`
  font-weight: 700;
  letter-spacing: 0.05rem;
  position: relative;
  margin-bottom: 5rem;
  text-shadow: 0 0 3rem ${colors.first};

  :before {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 5rem;
    height: 0.3rem;
    border-right: 10rem solid ${colors.fourth};
    box-shadow: 0 0 3rem 0.1rem ${colors.first};
    background-color: ${colors.first};
  }
`;
export const ExperiencesContent = styled.div`
  display: grid;
  grid-template-columns: 47% 47%;
  max-width: 100%;
  grid-template-rows: 15rem 15rem;
  grid-column-gap: 6%;
  text-align: justify;

  h4 {
    font-weight: 700;
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 2;
    margin-left: 8rem;
  }

  p {
    font-weight: 600;
    margin-top: -0.2rem;
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;
    line-height: 2.5rem;
    margin-left: 8rem;
  }
`;

export const ExperiencesLogic = styled.div`
  display: flex;
  flex-direction: column;

  p,
  h4 {
    margin-left: 13rem;
  }

  /* display: grid;
  grid-template-columns: 8vw 82vw;
  grid-template-rows: 20% 70%;
 */
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const ExperiencesLogicIcon = styled.div`
  img {
    position: absolute;
    width: 10rem;
    filter: drop-shadow(0 0 1rem ${colors.first});
  }
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 1;
`;
export const ExperiencesDesignIcon = styled.div`
  img {
    position: absolute;
    width: 5rem;
    filter: drop-shadow(0 0 1rem ${colors.first});
  }
`;
export const ExperiencesTechIcon = styled.div`
  img {
    position: absolute;
    width: 5rem;
    filter: drop-shadow(0 0 1rem ${colors.first});
  }
`;
export const ExperiencesDesign = styled.div`
  display: flex;
  flex-direction: column;

  grid-row-start: 2;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
`;
export const ExperiencesTech = styled.div`
  display: flex;
  flex-direction: column;

  grid-row-start: 2;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
`;

export const ExperiencesIconsWrapper = styled.div`
  width: 100%;
  bottom: 0;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 20vmin;
  gap: 3vmin;
`;

export const ExperiencesIcon = styled.div`
  height: 20vmin;
  width: 20vmin;
  margin: 0 auto;
  border-radius: 3rem;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-weight: 600;
  text-align: center;
  align-items: center;
  flex-direction: column;
  p {
    margin: 0;
    max-width: 18vh;
  }

  img {
    max-height: 30%;
  }

  background: linear-gradient(
    180deg,
    ${colors.sixth} 0%,
    ${colors.fifth} 33%,
    ${colors.fourth} 66%,
    ${colors.third} 100%
  );
  background-size: 100% 140%;
  background-position-y: 0%;

  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1);
  position: relative;

  &:hover {
    margin-top: -2vmin;
    margin-bottom: 2vmin;
    background-position-y: 100%;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1.5px;
    border-radius: inherit;
    background: linear-gradient(130.68deg, #6339d9 0%, #331782 100.52%);
  }
`;

export const ProjectsWrapper = styled.div`
  width: 90vw;
  min-height: 75vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 6.4rem;
`;

export const ProjectsHeader = styled.div``;

export const ProjectsTitle = styled.h2`
  font-weight: 700;
  letter-spacing: 0.05rem;
  position: relative;
  margin-bottom: 5rem;
  text-shadow: 0 0 3rem ${colors.first};

  :before {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 8rem;
    height: 0.3rem;
    border-right: 7rem solid ${colors.fourth};
    box-shadow: 0 0 3rem 0.1rem ${colors.first};
    background-color: ${colors.first};
  }
`;

export const ProjectsContent = styled.div`
  width: 90vw;
  height: 65vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProjectsWindow = styled.div`
  border-radius: 3rem;
  width: 70vw;
  height: 65vh;
  position: relative;

  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    180deg,
    ${colors.sixth} 0%,
    ${colors.fifth} 33%,
    ${colors.fourth} 66%,
    ${colors.third} 100%
  );
  background-size: 100% 140%;
  background-position-y: 0%;

  &:hover {
    background-position-y: 100%;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1.5px;
    border-radius: inherit;
    background: linear-gradient(130.68deg, #6339d9 0%, #331782 100.52%);
  }
`;

export const ProjectsArrows = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    180deg,
    ${colors.sixth} 0%,
    ${colors.fifth} 33%,
    ${colors.fourth} 66%,
    ${colors.third} 100%
  );
  background-size: 100% 140%;
  background-position-y: 0%;

  &:hover {
    background-position-y: 100%;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1.5px;
    border-radius: inherit;
    background: linear-gradient(130.68deg, #6339d9 0%, #331782 100.52%);
  }
`;

export const AboutWrapper = styled.div`
  width: 90vw;
  min-height: 75vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 6.4rem;
`;

export const AboutHeader = styled.div``;

export const AboutTitle = styled.h2`
  font-weight: 700;
  letter-spacing: 0.05rem;
  position: relative;
  margin-bottom: 5rem;
  text-shadow: 0 0 3rem ${colors.first};

  :before {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 12rem;
    height: 0.3rem;
    border-right: 3rem solid ${colors.fourth};
    box-shadow: 0 0 3rem 0.1rem ${colors.first};
    background-color: ${colors.first};
  }
`;

export const AboutContent = styled.div`
  width: 90vw;
  height: 65vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
`;

export const AboutText = styled.div`
  font-weight: 600;
  margin-top: -0.2rem;
  text-align: center;
  max-width: 45%;
  line-height: 3rem;

  h1 {
    font-weight: 700;
    margin-bottom: 5rem;
    letter-spacing: 0.2rem;
    transition: all 1s ${transitionPattern};
    text-shadow: 0 0 3rem ${colors.first};

    font-size: clamp(1.5rem, 4vw, 6rem);

    &:hover {
      letter-spacing: 0.3rem;
    }
  }
`;

export const AboutWindow = styled.div`
  border-radius: 3rem;
  min-width: 50vmin;
  height: 50vmin;
  position: relative;
  margin-left: 3rem;
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.5);
  background: linear-gradient(
    180deg,
    ${colors.sixth} 0%,
    ${colors.fifth} 33%,
    ${colors.fourth} 66%,
    ${colors.third} 100%
  );
  background-size: 100% 140%;
  background-position-y: 0%;

  .profile-wrapper {
    height: 50vmin;
    overflow: hidden;
    position: relative;
  }

  img {
    position: absolute;
    width: 30vmin;
    bottom: -3rem;
    left: 4rem;
  }

  &:hover {
    background-position-y: 100%;

    img {
      scale: 1.2;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1.5px;
    border-radius: inherit;
    background: linear-gradient(
      180deg,
      ${colors.first} 0%,
      ${colors.second} 100%
    );
    box-shadow: 0px 0px 4rem 0 rgba(100, 58, 218, 0.2);
  }

  &:after {
    content: "";
    position: absolute;
    top: 3rem;
    right: 3rem;
    bottom: -3rem;
    left: -3rem;
    z-index: -1;
    margin: -1.5px;
    border-radius: inherit;
    border: 0.3rem solid rgba(100, 58, 218, 1);
  }
`;

export const Footer = styled.section`
  min-height: 35rem !important;
  max-width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  border-top: 1px solid ${colors.first};
  box-shadow: 0 0 10rem rgba(0, 0, 0, 1);
`;

export const FooterContent = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  align-items: center;
`;

export const FooterTitle = styled.h2`
  font-weight: 700;
  letter-spacing: 0.05rem;
  position: relative;
  text-shadow: 0 0 3rem ${colors.first};
  color: white;

  :before {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 15rem;
    height: 0.3rem;
    box-shadow: 0 0 3rem 0.1rem ${colors.first};
    background-color: ${colors.first};
  }
`;
export const FooterSections = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  a {
    all: unset;
    transition: all 1s ${transitionPattern};
    color: white;
    font-weight: 600;
    font-size: clamp(1.5rem, 1vw, 1.8rem);
    color: #9999;
    cursor: pointer;

    &:hover {
      color: white;
      text-shadow: 0 0 3rem rgba(255, 255, 255, 0.5);
    }
  }
`;
export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  img {
    width: 3rem;
    color: white;
  }

  svg {
    width: 3rem;
    height: 3rem;
    color: #9999;
    cursor: pointer;

    &:hover {
      color: white;
      filter: drop-shadow(0 0 2rem rgba(255, 255, 255, 0.5));
    }
  }
`;
