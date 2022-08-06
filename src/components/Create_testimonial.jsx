import React, { useState } from "react";
import styled from "styled-components";

import { Header } from "./Header";
import { Footer } from "./Footer_section";
import { StyledButtton } from "./StyledComponets/StyledButton";

import { CREATE_TESTIMONIAL } from '../queries/createTestimonial';
import { useMutation } from "@apollo/client";

const StyledCreate = styled.div`
    background: linear-gradient(180deg, #E5EFFF 0%, rgba(229, 239, 255, 0.262661) 83.7%, rgba(229, 239, 255, 0) 100%);
    
    & Header {
        padding: 1.2rem 5.5rem;
        z-index: 3;
    }

    & form {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 5rem;
        padding: 5rem 0;

        & label {
            font-family: ${props => props.theme.font.secundary};
            color: ${props => props.theme.color.dark_blue};
            font-size: ${props => props.theme.font_size.medium_bigger};
            font-weight: bold;
        }

        & input {
            font-family: ${props => props.theme.font.primary};
            color: ${props => props.theme.color.dark_blue};
            font-size: ${props => props.theme.font_size.small};
            padding: 2rem;
            border-radius: 1rem;
        }

        & textarea {
            font-family: ${props => props.theme.font.primary};
            color: ${props => props.theme.color.dark_blue};
            font-size: ${props => props.theme.font_size.small};
            padding: 2rem;
            border-radius: 1rem;
        }
    }

    & h2 {
        font-family: ${props => props.theme.font.secundary};
        color: ${props => props.theme.color.dark_blue};
        font-size: ${props => props.theme.font_size.bigger};
        text-align: center;
        margin: 4rem 0;

        @media (max-width: 600px) {
            font-size: ${props => props.theme.font_size.big};
        }
    }

    & div#contentContainer {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 2rem;

        
    }

    & button#submit {
        padding: 1rem 3rem;
        margin: 0 auto;
    }
`;



export const CreateTestimonial = () => {

    const [createTestimonialMutation] = useMutation(CREATE_TESTIMONIAL);

    const [content, setContent] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();

        createTestimonialMutation({ variables: { content } })
            .then(res => showConfirmation("Testimonial Created"))
            .catch(err => showError("Error while creating"));
    };

    const showConfirmation = (message) => {
        console.log(message);
    }

    const showError = (message) => {
        console.log(message);
    }

    return (
        <StyledCreate>
            <Header></Header>
            <h2>Create a new testimonial</h2>
            <div>
                <form onSubmit={(evt) => handleSubmit(evt)}>
                    <div id="contentContainer">
                        <label htmlFor="content">Content</label>
                        <textarea type="textarea" name="content" value={content} onChange={evt => setContent(evt.target.value)} placeholder="Testimonial content" />
                        {/* <label htmlFor="date">Date (not available)</label>
                        <input disabled={true} type="text" name="date" placeholder="date" /> */}
                    </div>
                    <StyledButtton id="submit">Create</StyledButtton>
                </form>
            </div>
            <Footer></Footer>
        </StyledCreate>
    );
}