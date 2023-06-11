import styled, { keyframes } from "styled-components/macro";
import { css } from "styled-components";

export const colors = {
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
  section {
    min-height: 100vh;
    max-height: 100vh;
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BurgerButton = styled.div`
  visibility: hidden;

  margin-left: 0rem;
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 2;

  display: flex;
  align-items: center;

  height: ${(props) => (props.fix ? "7rem" : "10rem")};

  color: white;
  cursor: pointer;

  svg {
    min-height: 4rem;
    min-width: 4rem;
  }

  @media (orientation: portrait) {
    visibility: visible;
  }
`;

export const StyledMenu = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-right: ${(props) =>
    props.isOpen ? `1px solid ${colors.first}` : "none"};
  box-shadow: 0 0 10rem rgba(0, 0, 0, 1);
  backdrop-filter: blur(1rem);
  will-change: transform;
  font-size: 1.5rem;
  width: 100%;
  max-width: 30rem;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 999999;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;

  transition: 0.5s ease;
  font-size: 2rem;
  left: ${(props) => (props.isOpen ? "0" : "-30rem")};
  box-shadow: ${(props) =>
    props.isOpen ? "0 0 4rem rgba(0, 0, 0, .4)" : "none"};
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8vh;

  grid-row-start: 2;
  grid-row-end: 2;

  min-height: 100%;
`;
export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;

  width: 30rem;

  .menu-header-wrapper {
    padding: 2rem;
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LogoPurpleMenu = styled.img`
  max-width: 15rem;
`;

export const CloseMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    svg {
      cursor: pointer;
      width: 5rem;
      height: 5rem;
      color: white;
    }
  }
`;

export const ItemLink = styled.a`
  text-decoration: none;
  font-size: 2.2rem;
  color: white;
`;

export const ItemIcon = styled.div`
  margin-left: 1.5rem;
  display: flex;
  &:first-child {
    transform: scale(1.5);
  }
`;

export const MenuItems = styled.div`
  text-decoration: none;
  color: white;
  font-weight: 700;
  letter-spacing: 0.2rem;
  cursor: pointer;

  min-height: 8rem;
  min-width: 25rem;
  border-radius: 3rem;

  display: flex;
  justify-content: flex-start;
  padding-left: 2rem;
  align-items: center;

  transition: all 0.5s ${transitionPattern};

  &:hover {
    background-color: ${colors.fifth};
    box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.2);

    ${ItemLink} {
      color: ${colors.first};
    }
  }
`;

export const CornerLogo = styled.div`
  margin-left: 8rem;

  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;

  display: flex;
  align-items: center;

  @media (orientation: portrait) {
    margin-left: 0rem;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;
  }

  img {
    max-width: ${(props) => (props.fix ? `4rem` : "5rem")};
    cursor: pointer;
    width: 4rem;
  }
`;

export const Header = styled.div`
  position: fixed;
  width: 100%;
  left: 50%;
  transform: translate(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s ${transitionPattern};
  background-color: ${(props) =>
    props.fix ? "rgba(0, 0, 0, .4)" : "transparent"};
  height: ${(props) => (props.fix ? "6.4rem" : "10rem")};
  z-index: 9999;
  backdrop-filter: ${(props) => (props.fix ? "blur(2rem)" : "none")};
  will-change: transform;
  border-bottom: ${(props) =>
    props.fix ? `1px solid ${colors.first}` : "none"};
  box-shadow: ${(props) => (props.fix ? `0 0 5rem rgba(0, 0, 0, 1)` : "none")};

  .header-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 20% 60% 20%;

    @media (orientation: portrait) {
      grid-template-columns: 10vw 1fr 60vw 1fr 10vw;
    }
  }
`;

export const NavBar = styled.nav`
  min-width: 60%;

  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 2;

  display: flex;
  align-items: center;

  @media (orientation: portrait) {
    visibility: hidden;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

    min-width: 100%;
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
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3vw;

  @media (orientation: portrait) {
    flex-direction: column;
    align-items: center;
    gap: 10vw;
  }
`;

export const HomeLeftSide = styled.div`
  width: clamp(30rem, 40vw, 50rem);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (orientation: portrait) {
    width: clamp(30rem, 75vw, 75rem);
  }
`;

export const HomeProfilePicture = styled.div`
  width: clamp(30rem, 40vw, 50rem);
  height: clamp(30rem, 40vw, 50rem);

  @media (orientation: portrait) {
    width: clamp(30rem, 75vw, 50rem);
    height: clamp(30rem, 75vw, 50rem);
  }
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

  @media (orientation: portrait) {
    width: 75vw;
  }

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

  @media (orientation: portrait) {
    margin: 8rem 0 -8rem 0;
    width: 60vw;
  }

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

  @media (orientation: portrait) {
    width: 30vw;
    font-size: clamp(1.2rem, 4vw, 2rem);
  }

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

  @media (orientation: portrait) {
    width: 90%;
    gap: 4vw;
    row-gap: 0;
  }

  svg {
    width: 1.5vw;
    height: 1.5vw;
    color: ${colors.fourth};
    cursor: pointer;

    @media (orientation: portrait) {
      width: 5vw;
      height: 5vw;
    }

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

  @media (orientation: portrait) {
    height: ${(props) => (props.isOpen ? "16rem" : "0")};
  }

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

  @media (orientation: portrait) {
    width: 35vw;
    font-size: clamp(1.2rem, 4vw, 2rem);
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -0.1vw;
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
  height: 70vh;
  color: white;
  position: relative;
  margin-top: 6.4rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (orientation: portrait) {
    width: 75vw;
    height: 85vh;
  }
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

    @media (orientation: portrait) {
      height: 0.4rem;
    }

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

  @media (orientation: portrait) {
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr 1fr;
  }

  h4 {
    font-weight: 700;
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 2;
    grid-column-end: 2;
    margin-left: 8rem;
  }

  p {
    margin-top: -0.2rem;
    grid-row-start: 2;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 2;
    margin-left: 8rem;
  }
`;

export const Paragraph = styled.p`
  font-weight: 600;

  line-height: clamp(1.5rem, 2vmin, 3rem);

  @media (orientation: portrait) {
    font-size: clamp(1rem, 1.2vh, 1.5rem);
  }
`;

export const ExperiencesLogic = styled.div`
  display: flex;
  flex-direction: column;

  p,
  h4 {
    margin-left: 13rem;

    @media (orientation: portrait) {
      margin-left: 8rem;
    }
  }

  @media (orientation: portrait) {
    grid-row-start: 1;
    grid-row-end: 1;
    grid-column-start: 1;
    grid-column-end: 2;
  }

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

    @media (orientation: portrait) {
      width: 5rem;
    }
  }

  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 1;

  @media (orientation: portrait) {
    grid-row-start: unset;
    grid-row-end: unset;
    grid-column-start: unset;
    grid-column-end: unset;

    img {
      width: 5rem;
    }
  }
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

  @media (orientation: portrait) {
    grid-row-start: 3;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 1;
  }
`;

export const ExperiencesIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2vmin;

  margin-top: 10vh;

  @media (orientation: portrait) {
    gap: 2vmin;
  }
`;

export const ExperiencesIcon = styled.div`
  height: clamp(10rem, 11vw, 40rem);
  width: clamp(10rem, 11vw, 40rem);
  border-radius: 3rem;
  box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-weight: 600;
  text-align: center;
  align-items: center;
  flex-direction: column;

  @media (orientation: portrait) {
    height: clamp(10rem, 15vw, 40rem);
    width: clamp(10rem, 15vw, 40rem);
  }

  p {
    margin: 0;
    max-width: 9vw;

    @media (orientation: portrait) {
      font-size: 1.1rem;
    }
  }

  img {
    min-height: 4rem;
    max-height: 4rem;
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

    @media (orientation: portrait) {
      margin-top: 0;
      margin-bottom: 0;
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
    margin: -0.1vw;
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

  @media (orientation: portrait) {
    width: 75vw;
  }
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
  position: relative;

  @media (orientation: portrait) {
    flex-direction: column;
    justify-content: center;
    width: inherit;
  }

  .slider-wrapper {
    border-radius: 3rem;
    min-width: 70vw;
    max-width: 75vw;
    min-height: 65vh;

    margin: auto;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
`;

export const ProjectsWindowWrapper = styled.div`
  max-height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProjectsWindow = styled.div`
  border-radius: 3rem;
  overflow: hidden;
  width: 58vw;
  height: 60vh;
  position: relative;
  text-align: end;

  &:hover {
    img {
      transform: scale(1.1);
    }

    .background {
      padding-left: 5rem;

      @media (orientation: portrait) {
        padding: 0 0 5rem 0;
      }
    }
  }

  .window-wrapper {
    display: grid;
    grid-template-columns: 40% 60%;
    height: 100%;

    @media (orientation: portrait) {
      grid-template-columns: 100%;
      grid-template-rows: 40% 60%;
    }
  }

  .image-side {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .image-wrapper-projects {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .background {
        width: 70%;
        height: 100%;
        margin-right: auto;
        display: inline;
        background-color: rgba(0, 0, 0, 0.4);
        border-right: 1px solid ${colors.first};
        box-shadow: 0 0 10rem rgba(0, 0, 0, 1);

        @media (orientation: portrait) {
          width: 100%;
          height: 50%;
          margin-bottom: auto;
          border-bottom: 1px solid ${colors.first};
        }
      }

      img {
        position: absolute;
        max-width: 20vw;
      }
    }
  }

  .content-side {
    display: flex;
    justify-content: flex-end;
    position: relative;
  }

  .window-content-wrapper {
    position: absolute;
    bottom: 5%;
    right: 15%;
    display: grid;
    grid-template-rows: 40% 1fr 1fr 1fr 1fr;

    @media (orientation: portrait) {
      bottom: 5%;
      left: 5%;
      right: 5%;
      grid-template-rows: 20% 1fr 1fr 1fr 1fr;
    }
  }

  .title-wrapper {
    grid-row-start: 3;
    grid-row-end: 3;
    margin-bottom: 2rem;

    @media (orientation: portrait) {
      grid-row-start: 2;
      grid-row-end: 2;
    }
  }

  .tech-icons {
    margin: 0;
  }

  .title {
    max-width: 90%;
    margin: 0 0 0 10%;
    font-size: 3rem;
    font-weight: 800;
  }

  .text {
    grid-row-start: 4;
    grid-row-end: 4;
    font-weight: 400;

    @media (orientation: portrait) {
      font-size: 1.8rem;
      max-width: 60%;
      margin-left: auto;
      grid-row-start: 3;
      grid-row-end: 3;
    }
  }

  @media (orientation: portrait) {
    height: calc(60vh - 18rem);
    width: 65vw;
  }

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
    margin: -0.1vw;
    border-radius: inherit;
    background: linear-gradient(130.68deg, #6339d9 0%, #331782 100.52%);
  }
`;
export const ProjectsArrowRight = styled.div`
  min-width: 6rem;
  min-height: 6rem;
  max-height: 6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;

  @media (orientation: portrait) {
    order: 1;
    margin-left: 10rem;
    margin-bottom: 2rem;
    margin-top: -2rem;
    min-width: 8rem;
    min-height: 8rem;
  }

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
    margin: -0.1vw;
    border-radius: inherit;
    background: linear-gradient(130.68deg, #6339d9 0%, #331782 100.52%);
  }
`;
export const ProjectsArrowLeft = styled.div`
  min-width: 6rem;
  min-height: 6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;

  @media (orientation: portrait) {
    order: 1;
    margin-right: 10rem;
    margin-bottom: -5rem;
    margin-top: 5rem;
    min-width: 8rem;
    min-height: 8rem;
  }

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
    margin: -0.1vw;
    border-radius: inherit;
    background: linear-gradient(130.68deg, #6339d9 0%, #331782 100.52%);
  }
`;

export const AboutWrapper = styled.div`
  width: 90vw;
  min-height: 75vh;
  max-height: 75vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 6.4rem;

  @media (orientation: portrait) {
    width: 75vw;
  }
`;

export const AboutHeader = styled.div``;

export const Title = styled.h2`
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
  height: 70vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 3rem;

  @media (orientation: portrait) {
    width: 75vw;
    flex-direction: column;
    gap: 10rem;
  }
`;

export const AboutText = styled.div`
  font-weight: 600;
  margin-top: -0.2rem;
  max-width: 45%;
  line-height: 3rem;

  p {
    text-align: justify;
  }

  @media (orientation: portrait) {
    max-width: 75vw;
  }

  h1 {
    font-weight: 700;
    text-align: center;
    margin-bottom: 5rem;
    letter-spacing: 0.2rem;
    transition: all 1s ${transitionPattern};
    text-shadow: 0 0 3rem ${colors.first};

    font-size: clamp(1.5rem, 4vw, 6rem);

    @media (orientation: portrait) {
      font-size: clamp(1.5rem, 8vw, 8rem);
    }

    &:hover {
      letter-spacing: 0.3rem;
    }
  }
`;

export const AboutWindow = styled.div`
  border-radius: 3rem;
  min-width: 40vmin;
  height: 40vmin;
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

  @media (orientation: portrait) {
    order: 2;
  }

  .profile-wrapper {
    height: 40vmin;
    overflow: hidden;
    position: relative;
  }

  img {
    position: absolute;
    width: 30vmin;
    bottom: -3rem;
    left: 2rem;
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
    margin: -0.1vw;
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
    margin: -0.1vw;
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

export const ProjectsButtons = styled.div`
  height: 10rem;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;

  grid-row-start: 5;
  grid-row-end: 5;

  @media (orientation: portrait) {


    grid-row-start: 4;
    grid-row-end: 4;
  }

  :first-child {
    position: relative;
  }
`;
export const OpenProjectButton = styled.button`
  all: unset;
  height: 5rem;
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
  border-radius: 2rem;
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1);
  position: relative;
  outline: 0.3rem solid ${colors.first};

  @media (orientation: portrait) {
    width: 30vw;
    font-size: clamp(1.2rem, 4vw, 2rem);
  }

  &:hover {
    letter-spacing: 0.1rem;
    box-shadow: 0.4rem 0.8rem 2rem rgba(0, 0, 0, 0.3);
    background-position-y: 100%;
  }
`;

export const OpenGitHubButton = styled.button`
  all: unset;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-weight: 600;
  letter-spacing: 0.05rem;
  font-size: clamp(1.2rem, 1.5vw, 1.6rem);
  letter-spacing: 0.05rem;
  margin-left: 2rem;
  width: clamp(12rem, 10vw, 30rem);
  background: #fff;
  box-shadow: 0px 0px 2.5rem 0.2rem rgba(100, 58, 218, 0.4);
  border-radius: 2rem;
  background-size: 100%;
  cursor: pointer;
  transition: all 1s cubic-bezier(0.175, 0.885, 0.32, 1);

  position: relative;

  @media (orientation: portrait) {
    width: 35vw;
    font-size: clamp(1.2rem, 4vw, 2rem);
  }

  &:hover {
    background-color: white;
    letter-spacing: 0.1rem;
    color: black;
    box-shadow: 0px 0px 4rem 0.6rem rgba(100, 58, 218, 0.4);
  }
`;
