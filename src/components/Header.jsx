import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import burger from '../assets/ui/menu.png';
import x from '../assets/ui/close.png';

const StyledHeader = styled.header`
    height: 10rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: ${props => props.theme.font_size.small};
    font-family: ${props => props.theme.font.primary};
    color:  ${props => props.theme.color.dark_blue};

    & > img {
        cursor: pointer;
        height: 5rem;
        width: 5rem;
        padding: 0;
        z-index: 4;

        @media (min-width: 1200px) {
            display: none!important;;
        }
    }
    
    & > img#open {
        display: ${props => props.mobile ? "none" : "inline-block"};
    }

    & > img#close {
        display: ${props => props.mobile ? "inline-block" : "none"};
        height: 4.8rem;
        width: 4.8rem;
    }
    
`;

const LeftDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    flex-shrink: 1;
    flex-basis: 3;

    &  svg {
        margin-top: .4rem;
    }

    &  nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3.8rem;
        @media (max-width: 1200px) {
            display: none;
        }
    }
    
    &  nav a {
        color:  ${props => props.theme.color.dark_blue};
        line-height: 21px;
    }

`;

const RightDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.8rem;
    flex-shrink: 2;
    flex-basis: 5;

    @media (max-width: 1200px) {
        display: none;
    }

    &  a {
        color:  ${props => props.theme.color.dark_blue};
        cursor: pointer;
    }

    &  button {
        font-family: ${props => props.theme.font.primary};
        font-size: ${props => props.theme.font_size.small};
        background-color: ${props => props.theme.color.purple};
        color: white;
        border: none;
        border-radius: .4rem;
        padding: 1.3rem 1.4rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    & button:hover {
        background-color: ${props => props.theme.color.dark_purple};
    }
    
    &  svg {
        cursor: pointer;
    }
`

const Mobile = styled.nav`
    background-color: white;
    padding: 10rem 2rem 4rem 10rem;
    display: ${props => props.mobile ? "flex" : "none"};
    position: fixed;
    z-index: 3;
    right: 2rem;
    top: .6rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 3rem;
    border-radius: 2rem;
    -webkit-box-shadow: 0px 0px 21px -4px rgba(0, 0, 0, 0.70);
    -moz-box-shadow: 0px 0px 21px -4px rgba(0, 0, 0, 0.70);
    box-shadow: 0px 0px 21px -4px rgba(0, 0, 0, 0.70);



    @media (min-width: 1200px) {
        display: none!important;
    }

    & a {
        color:  ${props => props.theme.color.blue};
        font-size: ${props => props.theme.font_size.medium} ;
        line-height: 21px;
    }

    &  button {
        font-family: ${props => props.theme.font.primary};
        font-size: ${props => props.theme.font_size.small};
        background-color: ${props => props.theme.color.purple};
        color: white;
        border: none;
        border-radius: .4rem;
        padding: 1.3rem 1.4rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    & button:hover {
        background-color: ${props => props.theme.color.dark_purple};
    }
`;

export const Header = () => {

    // true if mobile menu is open
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <StyledHeader mobile={mobileOpen}>
            <LeftDiv>
                <Link to="/">
                    <svg width="169" height="35" viewBox="0 0 169 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.31286 0H51.9101C54.859 0 57.2462 2.3872 57.2462 5.33609V23.1231C57.2462 26.072 54.859 28.4592 51.9101 28.4592H35.1997L37.4933 34.0761L27.4062 28.4592H5.33627C2.38737 28.4592 0.000170629 26.072 0.000170629 23.1231V5.33609C-0.0232333 2.4106 2.36397 0 5.31286 0Z" fill="#9B5C8F" />
                        <path d="M2.85548 4.84449C3.18314 4.39982 3.67462 4.16578 4.32993 4.11897C5.52353 4.02535 6.20225 4.58705 6.36607 5.80405C7.0916 10.6955 7.88733 14.838 8.72987 18.2315L13.8553 8.4721C14.3234 7.58275 14.9085 7.11467 15.6106 7.06787C16.6404 6.99765 17.2723 7.65296 17.5297 9.0338C18.1148 12.1465 18.8638 14.7912 19.7531 17.0379C20.3616 11.0933 21.3914 6.81042 22.8424 4.16578C23.1935 3.51047 23.7084 3.18282 24.3871 3.13601C24.9254 3.0892 25.4169 3.25303 25.8616 3.60409C26.3062 3.95515 26.5403 4.39982 26.5871 4.93811C26.6105 5.35938 26.5403 5.71044 26.353 6.0615C25.4403 7.74658 24.6914 10.5785 24.0829 14.5103C23.4978 18.3252 23.2871 21.2975 23.4275 23.4272C23.4744 24.0123 23.3807 24.5272 23.1467 24.9719C22.8658 25.4868 22.4446 25.7676 21.9063 25.8144C21.2978 25.8612 20.6659 25.5804 20.0574 24.9485C17.8808 22.7251 16.1489 19.4017 14.8851 14.9784C13.3639 17.9741 12.2405 20.2209 11.5149 21.7187C10.1341 24.3634 8.96391 25.7208 7.98095 25.791C7.34904 25.8378 6.81075 25.2995 6.34267 24.1761C5.14907 21.1102 3.86185 15.189 2.48102 6.41256C2.41081 5.80406 2.52783 5.26576 2.85548 4.84449Z" fill="white" />
                        <path d="M53.1737 8.51898C52.3312 7.04453 51.0908 6.15518 49.4291 5.80412C48.9844 5.71051 48.5631 5.6637 48.1653 5.6637C45.9185 5.6637 44.093 6.83389 42.6653 9.17429C41.4483 11.1636 40.8398 13.3636 40.8398 15.7742C40.8398 17.5763 41.2143 19.121 41.9632 20.4082C42.8058 21.8826 44.0462 22.772 45.7079 23.123C46.1525 23.2167 46.5738 23.2635 46.9717 23.2635C49.2419 23.2635 51.0674 22.0933 52.4716 19.7529C53.6886 17.7401 54.2971 15.5402 54.2971 13.1296C54.2971 11.304 53.9226 9.78279 53.1737 8.51898ZM50.2248 15.0019C49.8972 16.5465 49.3121 17.6933 48.4461 18.4657C47.7674 19.0742 47.1355 19.3316 46.5504 19.2146C45.9887 19.0976 45.5206 18.6061 45.1696 17.6933C44.8887 16.9678 44.7483 16.2423 44.7483 15.5636C44.7483 14.9785 44.7951 14.3934 44.9121 13.8551C45.1228 12.8955 45.5206 11.9594 46.1525 11.07C46.9249 9.92321 47.744 9.45513 48.5865 9.61896C49.1482 9.73598 49.6163 10.2275 49.9674 11.1402C50.2482 11.8657 50.3886 12.5913 50.3886 13.27C50.3886 13.8785 50.3184 14.4636 50.2248 15.0019Z" fill="white" />
                        <path d="M38.4999 8.51898C37.6573 7.04453 36.3935 6.15518 34.7553 5.80412C34.3106 5.71051 33.8893 5.6637 33.4914 5.6637C31.2447 5.6637 29.4192 6.83389 27.9915 9.17429C26.7745 11.1636 26.166 13.3636 26.166 15.7742C26.166 17.5763 26.5405 19.121 27.2894 20.4082C28.1319 21.8826 29.3724 22.772 31.034 23.123C31.4787 23.2167 31.9 23.2635 32.2978 23.2635C34.568 23.2635 36.3935 22.0933 37.7978 19.7529C39.0148 17.7401 39.6233 15.5402 39.6233 13.1296C39.6233 11.304 39.2488 9.78279 38.4999 8.51898ZM35.551 15.0019C35.2233 16.5465 34.6382 17.6933 33.7723 18.4657C33.0936 19.0742 32.4617 19.3316 31.8766 19.2146C31.3149 19.0976 30.8468 18.6061 30.4957 17.6933C30.2149 16.9678 30.0745 16.2423 30.0745 15.5636C30.0745 14.9785 30.1213 14.3934 30.2383 13.8551C30.4489 12.8955 30.8468 11.9594 31.4787 11.07C32.251 9.92321 33.0702 9.45513 33.9127 9.61896C34.4744 9.73598 34.9425 10.2275 35.2935 11.1402C35.5744 11.8657 35.7148 12.5913 35.7148 13.27C35.7148 13.8785 35.668 14.4636 35.551 15.0019Z" fill="white" />
                        <path d="M63.1675 8.30845C61.5995 9.85311 60.8271 11.819 60.8271 14.2062C60.8271 16.7573 61.5995 18.8402 63.1441 20.4083C64.6888 21.9763 66.7015 22.7721 69.2058 22.7721C69.9313 22.7721 70.7504 22.6551 71.6398 22.3976V18.6062C70.8206 18.8402 70.1185 18.9572 69.51 18.9572C68.2696 18.9572 67.2866 18.536 66.5377 17.7168C65.7888 16.8743 65.4143 15.7509 65.4143 14.3233C65.4143 12.9892 65.7888 11.8892 66.5143 11.0467C67.2632 10.1808 68.176 9.75949 69.2994 9.75949C70.0249 9.75949 70.7972 9.87651 71.6398 10.1105V6.31912C70.8674 6.10848 70.0015 6.01486 69.0887 6.01486C66.7015 5.99146 64.7356 6.76379 63.1675 8.30845ZM79.4099 5.99146C77.2567 5.99146 75.5716 6.71698 74.3546 8.14462C73.1376 9.57226 72.5525 11.585 72.5525 14.1594C72.5525 16.9445 73.161 19.0743 74.3546 20.5487C75.5482 22.0232 77.3035 22.7721 79.5971 22.7721C81.8205 22.7721 83.529 22.0232 84.7226 20.5487C85.9162 19.0743 86.5247 16.9913 86.5247 14.3233C86.5247 11.6552 85.9162 9.59566 84.6992 8.14462C83.4588 6.71698 81.7035 5.99146 79.4099 5.99146ZM81.2588 18.1615C80.8375 18.8168 80.2056 19.1445 79.4099 19.1445C78.6609 19.1445 78.0993 18.8168 77.7014 18.1615C77.3035 17.5062 77.1163 16.1956 77.1163 14.2062C77.1163 11.1403 77.8886 9.61907 79.4567 9.61907C81.095 9.61907 81.9375 11.1637 81.9375 14.2765C81.9141 16.1956 81.6801 17.5062 81.2588 18.1615ZM98.0862 6.43614L97.2437 10.0169C97.033 10.9297 96.8224 11.8658 96.6352 12.8254L96.1671 15.3062C95.7224 12.8254 95.1139 9.87651 94.3416 6.43614H88.9119L86.8757 22.3742H90.948L92.048 11.3978L94.8331 22.3742H97.7352L100.403 11.4212L101.55 22.3742H105.81L103.656 6.43614H98.0862ZM117.582 6.43614L116.739 10.0169C116.529 10.9297 116.318 11.8658 116.131 12.8254L115.663 15.3062C115.218 12.8254 114.609 9.87651 113.837 6.43614H108.407L106.371 22.3742H110.444L111.543 11.3978L114.329 22.3742H117.231L119.875 11.4212L121.022 22.3742H125.282L123.128 6.43614H117.582ZM130.828 16.0786H134.643V12.7786H130.828V9.8531H135.228V6.45953H126.522V22.3976H135.252V19.004H130.828V16.0786ZM147.375 13.5509C147.82 12.8254 148.054 12.0765 148.054 11.3042C148.054 9.8063 147.469 8.6127 146.298 7.74675C145.128 6.8808 143.513 6.43614 141.501 6.43614H136.492V22.3742H140.798V15.119H140.869L144.356 22.3742H148.896L145.456 15.1892C146.275 14.8147 146.93 14.2765 147.375 13.5509ZM140.775 13.2935V9.50205C141.805 9.52545 142.53 9.68928 142.975 10.0169C143.42 10.3446 143.63 10.8595 143.63 11.6084C143.63 12.7084 142.671 13.2701 140.775 13.2935ZM150.581 8.30845C149.013 9.85311 148.241 11.819 148.241 14.2062C148.241 16.7573 149.013 18.8402 150.558 20.4083C152.103 21.9763 154.115 22.7721 156.619 22.7721C157.345 22.7721 158.164 22.6551 159.053 22.3976V18.6062C158.234 18.8402 157.532 18.9572 156.924 18.9572C155.683 18.9572 154.7 18.536 153.951 17.7168C153.202 16.8743 152.828 15.7509 152.828 14.3233C152.828 12.9892 153.202 11.8892 153.928 11.0467C154.677 10.1808 155.59 9.75949 156.713 9.75949C157.439 9.75949 158.211 9.87651 159.053 10.1105V6.31912C158.281 6.10848 157.415 6.01486 156.502 6.01486C154.139 5.99146 152.149 6.76379 150.581 8.30845ZM164.553 18.9572V16.0551H168.368V12.7552H164.553V9.82971H168.977V6.43614H160.27V22.3742H169V18.9806H164.553V18.9572Z" fill="black" />
                    </svg>
                </Link>
                <nav>
                    <a href="#">Sell</a>
                    <a href="#">Marketplace</a>
                    <a href="#">Community</a>
                    <a href="#">Analyze</a>
                    <a href="#">Downloads</a>
                    <Link to="/manage">manage</Link>
                </nav>
            </LeftDiv>
            <RightDiv>
                <a href="#">Log In</a>
                <button>Get Started</button>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7812 13.8344L12.6656 10.7188C12.525 10.5781 12.3344 10.5 12.1344 10.5H11.625C12.4875 9.39688 13 8.00937 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.00937 13 9.39688 12.4875 10.5 11.625V12.1344C10.5 12.3344 10.5781 12.525 10.7188 12.6656L13.8344 15.7812C14.1281 16.075 14.6031 16.075 14.8938 15.7812L15.7781 14.8969C16.0719 14.6031 16.0719 14.1281 15.7812 13.8344ZM6.5 10.5C4.29063 10.5 2.5 8.7125 2.5 6.5C2.5 4.29063 4.2875 2.5 6.5 2.5C8.70937 2.5 10.5 4.2875 10.5 6.5C10.5 8.70937 8.7125 10.5 6.5 10.5Z" fill="#272D4E" />
                </svg>
            </RightDiv>
            <Mobile mobile={mobileOpen}>
                <button>Get Started</button>
                <a href="#">Log In</a>
                <a href="#">Sell</a>
                <a href="#">Marketplace</a>
                <a href="#">Community</a>
                <a href="#">Analyze</a>
                <a href="#">Downloads</a>
                <Link to="/manage">manage</Link>
            </Mobile>
            <img src={burger} id="open" onClick={() => setMobileOpen(true)} />
            <img src={x} id="close" onClick={() => setMobileOpen(false)} />
        </StyledHeader>
    );
};