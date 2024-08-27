import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import idevIcons from "../../assets/img/idev.svg";
import imageHeader from "../../assets/img/imageHeader.svg";
import languageIcons from "../../assets/img/languageIcons.svg";
import burgermenu from "../../assets/img/burgermen.svg";
import whatsapp from "../../assets/img/whatsapp.svg";
import instagram from "../../assets/img/instagram.svg";
import phone from "../../assets/img/phone.svg";
import close from "../../assets/img/Group 78 (2).svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <HeaderContainerStyled backgroundheader={imageHeader} id="Home">
      <SectionContainer>
        <div>
          <ImgLogoStyled src={idevIcons} alt="idev-icons" />
        </div>
        <ULISTSTYLED>
          <LIST to="Home">Главная</LIST>
          <LIST to="About Us">О нас</LIST>
          <LIST to="Courses">Курсы</LIST>
        </ULISTSTYLED>
        <LANGUAGECONTAINERSTYLED>
          <img src={languageIcons} alt="language" />
          <LANGUAGE>KG/RU</LANGUAGE>
        </LANGUAGECONTAINERSTYLED>
        <MediaButtonBurgerMenu onClick={toggleMenu}>
          <img src={burgermenu} alt="burger-menu" />
        </MediaButtonBurgerMenu>
      </SectionContainer>
      <SectionContainerText>
        <SectionContainerTextH1>
          Ваше будущее начинается сегодня
        </SectionContainerTextH1>
        <SectionContainerTextP>
          Курсы по программированию в Бишкеке Обучаем с нуля до гарантированной
          стажировки за 8 месяцев!
        </SectionContainerTextP>
        <SectionContainerTextButton>Связаться</SectionContainerTextButton>
      </SectionContainerText>
      <BurgerMenuMobileStyled className={isMenuOpen ? "active" : "inactive"}>
        <BurgerMenuMobileStyledLanguage>
          <img src={languageIcons} alt="language" />
          <BurgerMenuMobileStyledLanguageSpan>
            KG/RU
          </BurgerMenuMobileStyledLanguageSpan>
          <BurgerMenuMobileStyledLanguageClose onClick={toggleMenu}>
            <img src={close} alt="close" />
          </BurgerMenuMobileStyledLanguageClose>
        </BurgerMenuMobileStyledLanguage>
        <ULISTSTYLEDMobile>
          <LISTMEDIA to="Home">Главная</LISTMEDIA>
          <LISTMEDIA to="About Us">О нас</LISTMEDIA>
          <LISTMEDIA to="Courses">Курсы</LISTMEDIA>
          <Contacts to="contacts">Контакты</Contacts>
          <LISTContacts>
            <a href="#">
              <img src={whatsapp} alt="whatsapp-icons" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram-icons" />
            </a>
            <a href="#">
              <img src={phone} alt="phone-icons" />
            </a>
          </LISTContacts>
        </ULISTSTYLEDMobile>
      </BurgerMenuMobileStyled>
    </HeaderContainerStyled>
  );
};

export default Header;

const HeaderContainerStyled = styled.header`
  background-image: url(${(props) => props.backgroundheader});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;
const ImgLogoStyled = styled.img`
  cursor: pointer;
`;
const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 78px 0 0 0;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    padding: 50px 29px 0 53px;
    position: relative;
  }
  @media (max-width: 470px) {
    display: flex;
    justify-content: space-between;
    padding: 50px 29px 0 53px;
    position: relative;
  }
`;
const ULISTSTYLED = styled.ul`
  display: flex;
  list-style: none;
  gap: 53px;
  font-family: Montserrat Alternates;
  font-size: 28px;
  font-weight: 400;
  line-height: 32.76px;
  color: #ffffff;
  text-align: left;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 470px) {
    display: none;
  }
`;
const LIST = styled(Link)`
  padding: 4px;
  position: relative;
  padding: 70px 0 0 0;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transition: width 0.7s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
  cursor: pointer;
`;
const LANGUAGECONTAINERSTYLED = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  cursor: pointer;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 470px) {
    display: none;
  }
`;
const LANGUAGE = styled.span`
  font-family: Jost;
  font-size: 20px;
  font-weight: 400;
  line-height: 23.4px;
  text-align: center;
  color: #ffffff;
`;
const SectionContainerText = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 202px 0 0 0;
`;
const SectionContainerTextH1 = styled.h1`
  font-family: Montserrat;
  font-size: 61px;
  font-weight: 700;
  line-height: 71.37px;
  text-align: left;
  color: #ededed;
  padding: 0 0 28px 0;
  @media (max-width: 1024px) {
    width: 700px;
    font-family: Montserrat;
    font-size: 54px;
    font-weight: 700;
    line-height: 79.78px;
    text-align: center;
    padding: 0 0 10px 0;
  }
  @media (max-width: 470px) {
    width: 373px;
    font-family: Montserrat;
    font-size: 34px;
    font-weight: 700;
    line-height: 39.78px;
    text-align: center;
    padding: 0 0 10px 0;
  }
`;
const SectionContainerTextP = styled.p`
  font-family: Montserrat;
  font-size: 21px;
  font-weight: 400;
  line-height: 24.57px;
  text-align: center;
  color: #f8f4f1;
  width: 696px;
  padding: 0 0 47px 0;
  @media (max-width: 1024px) {
    width: 700px;
    height: 54px;
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    line-height: 40.55px;
    text-align: center;
    padding: 0 0 123px 0;
  }
  @media (max-width: 470px) {
    width: 326px;
    height: 54px;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.55px;
    text-align: center;
    padding: 0 0 123px 0;
  }
`;
const SectionContainerTextButton = styled.button`
  width: 217px;
  height: 56px;
  padding: 15px 61px;
  border-radius: 60px;
  background: none;
  border: 1.5px solid #f8f4f1;
  color: #f8f4f1;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 25.74px;
  text-align: left;
  cursor: pointer;
  transition:
    border-color 0.4s ease,
    background-color 0.4s ease;

  &:hover {
    border-color: #ffffff;
    background: #5e59ee;
    color: #f8f4f1;
  }
`;
const MediaButtonBurgerMenu = styled.button`
  display: none;
  @media (max-width: 1024px) {
    background-color: none;
    display: block;
    width: 65px;
    height: 65px;
    background: #1c1d20;
    box-shadow: 0.76px 0.76px 3.82px 0px #00000030;
    border-radius: 60px;
    border: none;
    cursor: pointer;
    &:hover {
      background: #455ce9;
    }
  }
  @media (max-width: 470px) {
    background-color: none;
    display: block;
    width: 65px;
    height: 65px;
    background: #1c1d20;
    box-shadow: 0.76px 0.76px 3.82px 0px #00000030;
    border-radius: 60px;
    border: none;
    cursor: pointer;
    &:hover {
      background: #455ce9;
    }
  }
`;
const slideIn = keyframes`
  0% {
    right: -261px;
  }
  100% {
    right: 0;
  }
`;

const slideOut = keyframes`
  0% {
    right: 0;
  }
  100% {
    right: -261px;
  }
`;

const BurgerMenuMobileStyled = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1000;
    right: -261px;
    top: 0;
    width: 261px;
    height: 662px;
    background: #1c1d20;
    transition: right 0.3s ease-in-out;
    &.active {
      right: 0;
      animation: ${slideIn} 0.3s ease-in-out forwards;
    }
    &.inactive {
      animation: ${slideOut} 0.3s ease-in-out forwards;
    }
  }
  @media (max-width: 470px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: -261px;
    top: 0;
    width: 261px;
    height: 662px;
    background: #1c1d20;
    transition: right 0.3s ease-in-out;
    &.active {
      right: 0;
      animation: ${slideIn} 0.3s ease-in-out forwards;
    }
    &.inactive {
      animation: ${slideOut} 0.3s ease-in-out forwards;
    }
  }
`;
const BurgerMenuMobileStyledLanguage = styled.div`
  @media (max-width: 1024px) {
    padding: 100px 130px 35px 0px;
    width: 199px;
    display: flex;
    align-items: center;
    gap: 9px;
    border-bottom: 1px solid #4b4b4b;
    margin: 0 0 50px 41px;
  }
  @media (max-width: 470px) {
    padding: 100px 130px 35px 0px;
    width: 199px;
    display: flex;
    align-items: center;
    gap: 9px;
    border-bottom: 1px solid #4b4b4b;
    margin: 0 0 50px 41px;
  }
`;
const BurgerMenuMobileStyledLanguageSpan = styled.span`
  @media (max-width: 1024px) {
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.4px;
    text-align: center;
    color: #ffffff;
  }
  @media (max-width: 470px) {
    font-family: Jost;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.4px;
    text-align: center;
    color: #ffffff;
  }
`;
const ULISTSTYLEDMobile = styled.ul`
  @media (max-width: 1024px) {
    list-style: none;
    color: #ffffff;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 470px) {
    list-style: none;
    color: #ffffff;
  }
`;
const BurgerMenuMobileStyledLanguageClose = styled.button`
  @media (max-width: 1024px) {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #1c1d20;
    border: none;
    border: 1.5px solid #f8f4f1;
    margin-left: 60px;
    &:hover {
      background: #455ce9;
    }
    img {
      padding: 10px;
      border-radius: 40px;
    }
  }
  @media (max-width: 470px) {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #1c1d20;
    border: none;
    border: 1.5px solid #f8f4f1;
    margin-left: 60px;
    &:hover {
      background: #455ce9;
    }
    img {
      padding: 10px;
      border-radius: 40px;
    }
  }
`;
const Contacts = styled(Link)`
  @media (max-width: 1024px) {
    font-family: Montserrat Alternates;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.55px;
    padding: 0px 0 40px 40px;
    color: #a6a6a6;
  }
  @media (max-width: 470px) {
    font-family: Montserrat Alternates;
    font-size: 15px;
    font-weight: 400;
    line-height: 17.55px;
    padding: 0px 0 40px 40px;
    color: #a6a6a6;
  }
`;
const LISTContacts = styled.li`
  @media (max-width: 1024px) {
    display: flex;
    gap: 37px;
    padding: 0 0 0 40px;
  }
  @media (max-width: 470px) {
    display: flex;
    gap: 37px;
    padding: 0 0 0 40px;
  }
`;
const LISTMEDIA = styled(Link)`
  @media (max-width: 1024px) {
    /* margin: 0 100px 50px 40px; */
    font-family: Montserrat Alternates;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.4px;
    text-align: left;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #ffffff;
      transition: width 0.7s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
    cursor: pointer;
  }
  @media (max-width: 470px) {
    margin: 0 100px 50px 40px;
    font-family: Montserrat Alternates;
    font-size: 20px;
    font-weight: 400;
    line-height: 23.4px;
    text-align: left;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #ffffff;
      transition: width 0.7s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
    cursor: pointer;
  }
`;
