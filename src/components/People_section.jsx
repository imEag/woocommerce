import React from "react";
import styled from "styled-components";
import { StyledButtton } from "./StyledComponets/StyledButton";

import people from '../assets/img/persons/people.png';
import rectangle235 from '../assets/ui/rectangle235.png';


const StyledPeople = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow-x: hidden;
    overflow-y: hidden;
    margin: 15rem 0 0 0;


    & div#textContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        padding: 0 0 31rem 0;

        @media (max-width: 600px) {
            padding: 0 4rem 15rem 4rem;
        }

        & h2 {
            font-family: ${props => props.theme.font.secundary};
            color: ${props => props.theme.color.dark_blue};
            font-size: ${props => props.theme.font_size.bigger};
            font-weight: bold;
            line-height: 7rem;
            text-align: center;

            @media (max-width: 600px) {
                font-size: ${props => props.theme.font_size.big};
            }
        }

        & p {
            font-family: ${props => props.theme.font.primary};
            color: ${props => props.theme.color.gray};
            font-size: ${props => props.theme.font_size.small};
            font-weight: bold;
            line-height: 2.5rem;
            text-align: center;
            font-weight: 400;
            max-width: 66rem;
        }
    }


    & div#getStarted {
        background-color: ${props => props.theme.color.dark_purple};
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7.8rem 0;
        gap: 6.7rem;
        position: relative;

        @media (max-width: 1200px) {
            flex-direction: column;
        }

        & h3 {
            font-family: ${props => props.theme.font.primary};
            color: white;
            font-size: ${props => props.theme.font_size.big};
            font-weight: 400;
            line-height: 5.6rem;
            max-width: 85rem;

            @media (max-width: 1200px) {
                padding: 0 4rem;
                text-align: center;
                font-size: ${props => props.theme.font_size.medium_bigger};
                line-height: 3rem;
            }

            @media (max-width: 600px) {
                font-size: ${props => props.theme.font_size.medium};
                line-height: 3rem;
            }

            & span {
                font-weight: bold;
            }
        }

        & img {
            position: absolute;
            left: 50%;
            bottom: 100%;
            transform: translate(-50%, 0%);
            z-index: 2;
            overflow-x: hidden;
        }

        & img#people {
            @media (max-width: 1200px) {
                width: 120%;
            }
        }
        
        & img#rectangle {
            z-index: -2;
            bottom: 8rem;
        }
    }
`;

const StyledButton = styled(StyledButtton)`
    background: none;
    border: .2rem solid #FFF;
    padding: 2.6rem 4.6rem;
    text-transform: uppercase;

    @media (max-width: 600px) {
        padding: 1.2rem 3rem
    }

`;

export const People = () => {
    return (
        <StyledPeople>
            <div id="textContainer">
                <h2>Supported by real people</h2>
                <p>Our team of Happiness Engineers works remotely from 68 countries providing customers support across multiple time zones.</p>
            </div>
            <div id="getStarted">
                <h3>WooCommerce - the <span>most customizable eCommerce platform</span> for building <span>your online business.</span></h3>
                <StyledButton>GET STARTED</StyledButton>
                <img id="people" src={people} alt="people" />
                <img id="rectangle" src={rectangle235} alt="rectangle" />
            </div>
        </StyledPeople>
    );
};