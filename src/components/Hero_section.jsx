import React from "react";
import styled from "styled-components";

import featured_img from '../assets/img/featured-image.png';
import w from '../assets/img/w.png';
import { Header } from "./Header";
import { StyledButtton } from "./StyledComponets/StyledButton";

const StyledHero = styled.div`
    background: linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%);
    height: 118.8rem;
    width: 100vw;
    z-index: -1;
    
    & Header {
        position: absolute;
        padding: 1.2rem 5.5rem;
        z-index: 3;
    }

    & img {
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }


    & > img#w {
        position: absolute;
        top: 0;
        right: 0;
    }

    & > img#featured {
        position: absolute;
        height: 82.9rem;
        right: 0;
        top: 18rem;
        transition: all 0.5s ease-in-out;
        
        @media (max-width: 1700px) {
            height: 60rem;
            top: 28rem
        }

        @media (max-width: 1400px) {
            top: 85rem;
        }

        @media (max-width: 700px) {
            right: 100%;
        }

    }

`;

const StyledParagraph = styled.div`
    position: absolute;
    top: 27rem;
    left: 22rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 81.8rem;
    z-index: 2;
    gap: 3rem;

    @media (max-width: 1200px) {
        position: relative;
        max-width: auto;
        left: auto;
        top: 20rem;
        margin: 0 auto;
        padding: 0 4rem;
    }

    @media (max-width: 600px) {
        position: relative;
        max-width: auto;
        left: auto;
        top: 15rem;
        margin: 0 auto;
        padding: 0 4rem;
    }
    
    & > h2 {
        font-family: ${props => props.theme.font.secundary};
        color: ${props => props.theme.color.dark_blue};
        font-size: ${props => props.theme.font_size.extra};
        line-height: 9.5rem;
        font-weight: bold;
        transition: all 0.5s ease-in-out;
        
        @media (max-width: 700px) {
            font-size: ${props => props.theme.font_size.bigger};
            line-height: 7rem;
        }

        @media (max-width: 400px) {
            font-size: ${props => props.theme.font_size.big};
            line-height: 4.5rem;
        }
    }

    & p {
        font-family: ${props => props.theme.font.primary};
        color: ${props => props.theme.color.gray};
        font-size: ${props => props.theme.font_size.small};
        max-width: 71.6rem;
        line-height: 2.5rem;
        font-weight: 400;
    }

    & > div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 1.2rem;

    }

    & > div p a {
        color: ${props => props.theme.color.ligth_blue};
        cursor: pointer;
    }


`;

export const Hero = () => {
    return (
        <StyledHero>
            <Header></Header>

            <StyledParagraph>
                <h2>Building exactly the eCommerce website you want.</h2>
                <p>WooCommerce is a customizable, open-source eCommerce platform built on WordPress.
                    Get started quickly and make your way.</p>
                <div>
                    <StyledButtton>Start a New Store</StyledButtton>
                    <p>or <a>Customize & Extend ›</a></p>
                </div>
            </StyledParagraph>

            <img id="w" src={w} alt="w" />

            <img id="featured" src={featured_img} alt="featured_image" />

        </StyledHero>
    );
};