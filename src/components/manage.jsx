import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Header } from "./Header";
import { StyledButtton } from "./StyledComponets/StyledButton";
import { Footer } from './Footer_section'

const StyledManage = styled.div`
    background: linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%);
    
    & Header {
        padding: 1.2rem 5.5rem;
        z-index: 3;
    }

    & h2 {
        font-family: ${props => props.theme.font.secundary};
        color: ${props => props.theme.color.dark_blue};
        font-size: ${props => props.theme.font_size.bigger};
        text-align: center;
        margin: 4rem 0;
    }

    & div#testimonials {
        padding: 0 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5rem;
        max-width: 100rem;
        margin: 5rem auto;

        & h3 {
            font-family: ${props => props.theme.font.secundary};
            color: ${props => props.theme.color.dark_blue};
            font-size: ${props => props.theme.font_size.big};
        }

        & div#testimonial_container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            
            @media (max-width: 500px) {
                grid-template-columns: repeat(1, 1fr);
            }
        }
    }

    & button#createButton {
        align-self: flex-end;
    }
`;


const Card = styled.article`
    background-color: white;
    padding: 2rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;

    & p {
        font-family: ${props => props.theme.font.secundary};
        color: ${props => props.theme.color.gray};
        font-size: ${props => props.theme.font_size.small};
        text-align: center;
        font-weight: 400;
        line-height: 2.1rem;
        
    }
    
    & div#buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        
        & button{
            padding: 1rem 2rem;
        }
        
        & button#editButton {
            background-color: gray;
        }
    
        & button#deleteButton {
            background-color: #ff7c7c;
        }
    }


`;

export const Manage = () => {
    return (
        <StyledManage>
            <Header></Header>
            <h2>Content Manager</h2>
            <div id="testimonials">
                <h3>Testimonials</h3>
                <div id="testimonial_container">
                    <Card>
                        <p>No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
                        <div id="buttons">
                            <StyledButtton id="editButton">Edit</StyledButtton>
                            <StyledButtton id="deleteButton">Delete</StyledButtton>
                        </div>
                    </Card>
                    <Card>
                        <p>No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
                        <div id="buttons">
                            <StyledButtton id="editButton">Edit</StyledButtton>
                            <StyledButtton id="deleteButton">Delete</StyledButtton>
                        </div>
                    </Card>
                    <Card>
                        <p>No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
                        <div id="buttons">
                            <StyledButtton id="editButton">Edit</StyledButtton>
                            <StyledButtton id="deleteButton">Delete</StyledButtton>
                        </div>
                    </Card>
                    <Card>
                        <p>No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
                        <div id="buttons">
                            <StyledButtton id="editButton">Edit</StyledButtton>
                            <StyledButtton id="deleteButton">Delete</StyledButtton>
                        </div>
                    </Card>
                    
                </div>
                <StyledButtton id="createButton">Create new testimonial</StyledButtton>
            </div>
            <Footer />
        </StyledManage>
    );
};