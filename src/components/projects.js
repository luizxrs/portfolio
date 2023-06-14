import React, { Component } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import styled from "styled-components";
import leftarrow from "../assets/svgs/leftarrow.svg";
import rightarrow from "../assets/svgs/rightarrow.svg";
import {
  OpenGitHubButton,
  OpenProjectButton,
  Paragraph,
  ProjectsButtons,
  ProjectsWindow,
  ProjectsWindowWrapper,
  PurpleTint,
} from "../styles";
import { colors } from "../styles";
import { apiData } from "./projectsAPI";

const ProjectsArrow = styled.button`
  all: unset;
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
    order: 5;
    min-width: 8rem;
    min-height: 8rem;
    position: absolute;
    bottom: -18rem;
    right: calc(50% - 10rem);
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

const StyledCarousel = styled(Carousel)`
  .rec-carousel {
    position: relative;
  }

  width: 75vw;
  margin: auto;

  .left {
    @media (orientation: portrait) {
      margin-right: 12rem;
    }
  }

  .right {
    @media (orientation: portrait) {
      margin-left: 12rem;
    }
  }
`;

export default class App extends Component {
  myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? leftarrow : rightarrow;
    return (
      <ProjectsArrow
        pointer={pointer}
        className={pointer === leftarrow ? "left" : "right"}
        onClick={onClick}
        disabled={isEdge}
      >
        <img src={pointer} alt={`${pointer} Seta`} />
      </ProjectsArrow>
    );
  }

  constructor(props) {
    super(props);
    this.breakPoints = [
      { orientation: "portrait", itemsToShow: 1 },
      { orientation: "landscape", itemsToShow: 2 },
    ];
  }

  render() {
    return (
      <StyledCarousel
        itemPadding={[5, 10]}
        renderArrow={this.myArrow}
        easing="ease"
        enableTilt={true}
        tiltEasing="ease"
        disableArrowsOnEnd={true}
        breakPoints={this.breakPoints}
      >
        {apiData.map((data) => (
          <ProjectsWindowWrapper>
            <ProjectsWindow>
              <div className="window-wrapper">
                <div className="image-side">
                  <div className="image-wrapper-projects">
                    <div className="background" />
                    <img
                      src={data.linkImg}
                      alt="Demo do projeto em dispositivos"
                    />
                  </div>
                </div>
                <div className="content-side">
                  <div className="window-content-wrapper">
                    <div className="title-wrapper">
                      <Paragraph className="tech-icons">
                        <PurpleTint>{data.usedTechs}</PurpleTint>
                      </Paragraph>
                      <div className="title">{data.title}</div>
                    </div>
                    <Paragraph className="text">{data.description}</Paragraph>
                    <ProjectsButtons>
                      <OpenProjectButton
                        onClick={() => window.open(`${data.demoLink}`, "blank")}
                      >
                        Demo
                      </OpenProjectButton>
                      <div>
                        <OpenGitHubButton
                          onClick={() =>
                            window.open(`${data.gitHubLink}`, "blank")
                          }
                        >
                          Source Code
                        </OpenGitHubButton>
                      </div>
                    </ProjectsButtons>
                  </div>
                </div>
              </div>
            </ProjectsWindow>
          </ProjectsWindowWrapper>
        ))}
      </StyledCarousel>
    );
  }
}
