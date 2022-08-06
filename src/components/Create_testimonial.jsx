import React, { useState } from "react";
import styled from "styled-components";

import { Header } from "./Header";
import { Footer } from "./Footer_section";
import { StyledButtton } from "./StyledComponets/StyledButton";

import { CREATE_TESTIMONIAL } from '../queries/createTestimonial';
import { useMutation } from "@apollo/client";

const StyledCreate = styled.div`
    
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
                        <input type="text" name="content" value={content} onChange={evt => setContent(evt.target.value)} placeholder="Testimonial content" />
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