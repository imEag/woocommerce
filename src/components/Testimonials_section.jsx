import React from "react";
import styled from "styled-components";

import quoteImg from '../assets/img/quote.png';

const StyledTestimonials = styled.div`
    background: linear-gradient(180deg, rgba(236, 240, 253, 0) 0%, rgba(236, 240, 253, 0.53) 14.32%, #ECF0FD 45.83%, rgba(236, 240, 253, 0.43) 84.33%, rgba(236, 240, 253, 0) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;

    & h2 {
        font-family: ${props => props.theme.font.secundary};
        color: ${props => props.theme.color.dark_blue};
        font-size: ${props => props.theme.font_size.bigger};
        text-align: center;
    }
`;

const Card = styled.article`
    max-width: 73rem;
    min-height: 40rem;
    background-color: white;
    padding: 10rem 8rem 9rem 8rem;
    border-radius: 2rem;
    position: relative;
    z-index: 0;

    & img#quote {
        position: absolute;
        left: 50%;
        top: 0%;
        transform: translate(-50%,15%);
        z-index: -1;
    }
    
    & p {
        font-family: ${props => props.theme.font.secundary};
        color: ${props => props.theme.color.gray};
        font-size: ${props => props.theme.font_size.medium_bigger};
        text-align: center;
        font-weight: 400;
        line-height: 4rem;
        z-index: 2;
    }
`;

export const Testimonials = () => {
    return (
        <StyledTestimonials>
            <h2>Trusted by Agencies<br />& Store Owners</h2>
            <div id="cards">
                <Card>
                    <img src={quoteImg} alt="quote img" id="quote" />
                    <p>No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!</p>
                </Card>
            </div>
        </StyledTestimonials>
    );
};