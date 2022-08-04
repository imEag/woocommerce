import React from "react";
import styled from "styled-components";

import featured_img from '../assets/img/featured-image.png';
import { Header } from "./Header";
import { StyledButtton } from "./StyledComponets/StyledButton";

const StyledHero = styled.div`
    background: linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%);
    height: 118.8rem;
    display: flex;
    justify-content: center;
    width: 100vw;
    z-index: -1;
    
    & Header {
        position: fixed;
        padding: 1.2rem 5.5rem;
        z-index: 1;
    }

    & > svg {
        position: absolute;
        left: 49.84%;
        right: -41.88%;
        top: -9.72%;
        bottom: 81.76%;
    }

    & > img {
        position: absolute;
        width: 102.8rem;
        height: 82.9rem;
        right: -19.1rem;
        top: 18rem;
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

    & > h2 {
        font-family: ${props => props.theme.font.secundary};
        color: ${props => props.theme.color.dark_blue};
        font-size: ${props => props.theme.font_size.extra};
        line-height: 9.5rem;
        font-weight: bold;
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

            <svg width="963" height="1087" viewBox="0 0 963 1087" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M28.8561 -452.987C52.8498 -485.635 88.8403 -502.819 136.828 -506.255C224.233 -513.129 273.934 -471.889 285.931 -382.536C339.06 -23.4058 397.33 280.738 459.028 529.895L834.357 -186.647C868.634 -251.943 911.48 -286.31 962.895 -289.746C1038.3 -294.901 1084.58 -246.788 1103.43 -145.407C1146.27 83.1301 1201.12 277.301 1266.24 442.26C1310.8 5.80567 1386.21 -308.648 1492.47 -502.819C1518.18 -550.932 1555.88 -574.988 1605.58 -578.425C1645 -581.861 1680.99 -569.833 1713.55 -544.058C1746.12 -518.283 1763.25 -485.636 1766.68 -446.114C1768.4 -415.184 1763.25 -389.409 1749.54 -363.634C1682.7 -239.915 1627.86 -31.9973 1583.3 256.681C1540.46 536.768 1525.03 754.995 1535.31 911.363C1538.74 954.321 1531.89 992.124 1514.75 1024.77C1494.18 1062.58 1463.33 1083.2 1423.92 1086.63C1379.36 1090.07 1333.08 1069.45 1288.52 1023.05C1129.14 859.813 1002.31 615.811 909.766 291.048C798.367 510.994 716.103 675.953 662.974 785.925C561.858 980.096 476.166 1079.76 404.186 1084.91C357.912 1088.35 318.494 1048.83 284.217 966.35C196.812 741.249 102.551 306.513 1.43496 -337.859C-3.70654 -382.536 4.86246 -422.057 28.8561 -452.987Z" fill="white" />
            </svg>

            <img src={featured_img} alt="featured_image" />

        </StyledHero>
    );
};