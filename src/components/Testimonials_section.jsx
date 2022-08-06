import React, { useState } from "react";
import styled from "styled-components";

import { useQuery } from "@apollo/client";
import { GET_TESTIMONIALS } from "../queries/getTestimonials";

import quoteImg from '../assets/img/quote.png';
import person1 from '../assets/img/persons/person1.png';
import person2 from '../assets/img/persons/person2.png';
import person3 from '../assets/img/persons/person3.png';
import person4 from '../assets/img/persons/person4.png';
import person5 from '../assets/img/persons/person5.png';
import person6 from '../assets/img/persons/person6.png';
import greenPoint from '../assets/ui/greenpoints.png';
import redPoint from '../assets/ui/redpoints.png';
import unactiveArrow from '../assets/ui/unactivearrow.png';
import activeArrow from '../assets/ui/activearrow.png'



const StyledTestimonials = styled.div`
    background: linear-gradient(180deg, rgba(236, 240, 253, 0) 0%, rgba(236, 240, 253, 0.53) 14.32%, #ECF0FD 45.83%, rgba(236, 240, 253, 0.43) 84.33%, rgba(236, 240, 253, 0) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    position: relative;
    padding: 13rem 4rem 33rem 4rem;

    & h2 {
        font-family: ${props => props.theme.font.secundary};
        color: ${props => props.theme.color.dark_blue};
        font-size: ${props => props.theme.font_size.bigger};
        text-align: center;


        @media (max-width: 600px) {
            font-size: ${props => props.theme.font_size.big};
            line-height: 4.5rem;
        }
    }

    & > img {
        position: absolute;
        z-index: 2;
        transition: all 0.5s ease-in-out;
    }

    & img#person1 {
        top: 35%;
        left: 15%;

        @media (max-width: 1200px) {
            top: 0%;
        }
    }

    & img#person2 {
        top: 5%;
        left: 25%;

        @media (max-width: 1200px) {
            top: -10%;
            left: 38%;
        }
    }
    & img#person3 {
        top: 10%;
        left: 70%;

        @media (max-width: 1200px) {
            top: 2%;
            left: 70%;
        }

        @media (max-width: 600px) {
            top: 2%;
            left: 55%;
        }
    }

    & img#person4 {
        top: 40%;
        left: 80%;

        @media (max-width: 1200px) {
            top:88%;
            left: 35%;
        }
    }

    & img#person5 {
        top: 75%;
        left: 75%;

        @media (max-width: 1200px) {
            top:82%;
            left: 70%;
        }
    }

    & img#person6 {
        top: 70%;
        left: 20%;

        @media (max-width: 1200px) {
            top:80%;
            left: 20%;
        }
    }

    & img#green {
        top: 55%;
        left: 25%;
        z-index: -5;

        @media (max-width: 1200px) {
            display: none;
        }
    }

    & img#red {
        top: 30%;
        left: 50%;
        z-index: -5;

        @media (max-width: 1200px) {
            display: none;
        }
    }
    

    & div#cards {
        position: relative;
    
        & div#back1 {
            width: 90%;
            margin: 0 auto;
            height: 1.5rem;
            background-color: #f4f8ff;
            border-radius: 0 0 2rem 2rem;
            box-shadow: 0px 18px 52.85371780395508px 0px #D7E4F980;
        }
        
        & div#back2 {
            width: 80%;
            margin: 0 auto;
            height: 1.5rem;
            background-color: #eef2fb;
            border-radius: 0 0 2rem 2rem;
        }

        & div#arrowContainer {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 2rem;
            padding: 1rem 6rem;

            & img {
                cursor: pointer;
            }
        }
    }
`;

const Card = styled.article`
    width: 73rem;
    min-height: 40rem;
    background-color: white;
    padding: 10rem 8rem 9rem 8rem;
    border-radius: 2rem;
    position: relative;
    z-index: 0;

    @media (max-width: 800px) {
        padding: 6rem 2rem;
        width: 30rem;
        margin: 0 auto;
        min-height: 30rem;
    }

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
        font-weight: 500;

        @media (max-width: 600px) {
            font-size: ${props => props.theme.font_size.small};
            line-height: 2.5rem;
        }
    }

`;

export const Testimonials = () => {

    const { data } = useQuery(GET_TESTIMONIALS, { variables: { page: 1 } });
    const [counter, setCounter] = useState(0);

    const nextTestimonial = () => {
        if (data.testimonials.results[counter+1]) {
            setCounter(counter+1)
        }
    };

    const prevTestimonial = () => {
        if (data.testimonials.results[counter-1]) {
            setCounter(counter-1)
        }
    };

    return (
        <StyledTestimonials>
            <h2>Trusted by Agencies<br />& Store Owners</h2>
            <div id="cards">
                <Card>
                    <img src={quoteImg} alt="quote img" id="quote" />
                    <p>{data ? data.testimonials.results[counter].content : "Unknown"}</p>
                </Card>
                <div id="back1">
                </div>
                <div id="back2">
                </div>
                <div id="arrowContainer" >
                    <img id="unactiveArrow" src={unactiveArrow} alt="arrow" onClick={() => prevTestimonial()}/>
                    <img id="activeArrow" src={activeArrow} alt="arrow" onClick={() => nextTestimonial()}></img>
                </div>
            </div>
            <img id="person1" src={person1} alt="person" />
            <img id="person2" src={person2} alt="person" />
            <img id="person3" src={person3} alt="person" />
            <img id="person4" src={person4} alt="person" />
            <img id="person5" src={person5} alt="person" />
            <img id="person6" src={person6} alt="person" />
            <img id="green" src={greenPoint} alt="points" />
            <img id="red" src={redPoint} alt="points" />
        </StyledTestimonials>
    );
};