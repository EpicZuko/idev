import React from "react";
import styled from "styled-components";
import imageHeader from "../assets/img/image1.svg";
import img2 from "../assets/img/image2.svg";
import img3 from "../assets/img/image3.svg";
import img4 from "../assets/img/image4.svg";
import img5 from "../assets/img/image5.svg";

const arrowProjects = [
  {
    varinant: 1,
    id: 1,
    img: imageHeader,
    title: "“BAITIK LUX”",
    description:
      "Baytik Lux Residence — это закрытый комплекс, где вы можете наслаждаться комфортом и роскошью в безопасной и приватной обстановке.",
  },
  {
    varinant: 3,
    id: 2,
    img: img2,
    title: "“BAITIK LUX”",
    description:
      "Baytik Lux Residence — это закрытый комплекс, где вы можете наслаждаться комфортом и роскошью в безопасной и приватной обстановке.",
  },
  {
    varinant: 2,
    id: 3,
    img: img3,
    title: "“BAITIK LUX”",
    description:
      "Baytik Lux Residence — это закрытый комплекс, где вы можете наслаждаться комфортом и роскошью в безопасной и приватной обстановке.",
  },
  {
    varinant: 2,
    id: 4,
    img: img4,
    title: "“BAITIK LUX”",
    description:
      "Baytik Lux Residence — это закрытый комплекс, где вы можете наслаждаться комфортом и роскошью в безопасной и приватной обстановке.",
  },
  {
    varinant: 2,
    id: 5,
    img: img5,
    title: "“BAITIK LUX”",
    description:
      "Baytik Lux Residence — это закрытый комплекс, где вы можете наслаждаться комфортом и роскошью в безопасной и приватной обстановке.",
  },
];

const Projects = () => {
  return (
    <ProjectCardContainer>
      <ProjectCardH1>Проекты наших студентов</ProjectCardH1>
      <ProjectsContainer>
        {arrowProjects.map((element) => {
          return (
            <ProjectCard
              key={element.id}
              img={element.img}
              variant={element.varinant}
            >
              <Content>
                <ProjectTitle>{element.title}</ProjectTitle>
                <ProjectDescription>{element.description}</ProjectDescription>
              </Content>
              <WatchButton>СМОТРЕТЬ →</WatchButton>
            </ProjectCard>
          );
        })}
      </ProjectsContainer>
    </ProjectCardContainer>
  );
};

export default Projects;
const ProjectCardContainer = styled.section`
  background: #f8f4f1;
  padding: 0 0 100px 0;
  @media (max-width:1024px) {
    padding: 0 0 0px 0;
  }
  @media (max-width:470px) {
    padding: 0 0 50px 0;
  }
`;
const ProjectCardH1 = styled.h1`
  font-family: Montserrat;
  font-size: 38px;
  font-weight: 700;
  line-height: 44.46px;
  text-align: center;
  padding: 100px 0 58px 0;
  color: #1e1e2f;
  @media (max-width: 1024px) {
    font-size: 30px;
    line-height: 29.25px;
    text-align: center;
    padding: 20px 0 50px 0;
  }
  @media (max-width: 470px) {
    font-size: 25px;
    line-height: 29.25px;
    text-align: center;
    padding: 70px 0 42px 0;
  }
`;
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  align-items: center;
  height: auto;
  background: #f8f4f1;
`;
const ProjectCard = styled.div`
  width: ${(props) => {
    if (props.variant === 1) {
      return "707px";
    } else if (props.variant === 2) {
      return "396px";
    } else if (props.variant === 3) {
      return "549px";
    }
  }};
  height: 313px;
  border-radius: 15px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  color: white;
  overflow: hidden;
  position: relative;
  background-color: red;
  transition:
    background-size 0.8s ease-in-out,
    transform 0.8s ease-in-out;

  &:hover {
    background-size: 115%;
    transform: scale(1.01);
  }
  @media (max-width: 1024px) {
    width: 600px;
    height: 252px;
    &:hover {
      background-size: normal;
      transform: scale(1);
    }
  }
  @media (max-width: 470px) {
    width: 370.44px;
    height: 252px;
    &:hover {
      background-size: normal;
      transform: scale(1);
    }
  }
`;

const Content = styled.div``;

const ProjectTitle = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 35.1px;
  text-align: left;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 18.29px;
  text-align: left;
`;

const WatchButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;

  &:hover {
    background: #5e59ee;
  }
`;
