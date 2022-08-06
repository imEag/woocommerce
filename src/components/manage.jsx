import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Header } from "./Header";
import { StyledButtton } from "./StyledComponets/StyledButton";
import { Footer } from './Footer_section'

import { useMutation, useQuery } from "@apollo/client";
import { GET_TESTIMONIALS } from "../queries/getTestimonials";
import { DELETE_TESTIMONIAL } from "../queries/deleteTestimonial";


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

    & div#pagebuttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: flex-end;
        gap: 2rem;
    
        & button#next, & button#prev {
            background-color: gray;
            padding: .5rem 1.5rem;
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

    const { error, loading, data, refetch } = useQuery(GET_TESTIMONIALS, { variables: { page: 1 } });
    const [deleteTestimonial] = useMutation(DELETE_TESTIMONIAL);

    const nextPage = () => {
        if (data.testimonials.info.next != null) {
            refetch({ page: data.testimonials.info.next });
            scrollToTop();
        }
    }

    const prevPage = () => {
        if (data.testimonials.info.prev != null) {
            refetch({ page: data.testimonials.info.prev });
            scrollToTop();
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleDelete = (id) => {
        console.log(id)
        deleteTestimonial({ variables: { id } })
            .then(res => showConfirmation("Testimonial Deleted"))
            .catch(err => showError("error while deleting"));
        refetch();
    }

    const handleEdit = (id) => {
        console.log(id)
    }

    const showConfirmation = (message) => {
        console.log(message);
    }

    const showError= (message) => {
        console.log(message);
    }

    return (
        <StyledManage>
            <Header></Header>
            <h2>Content Manager</h2>
            <div id="testimonials">
                <h3>Testimonials</h3>
                <div id="testimonial_container">
                    {/* {console.log(data)} */}
                    {data?.testimonials.results.map((element) => {
                        return (
                            <Card key={element.id}>
                                <p>{element.content}</p>
                                <div id="buttons">
                                    <Link to={'/edit/'+element.id}><StyledButtton onClick={() => handleEdit(element.id)} id="editButton">Edit</StyledButtton></Link>
                                    <StyledButtton onClick={() => handleDelete(element.id)} id="deleteButton">Delete</StyledButtton>
                                </div>
                            </Card>
                        );
                    })}

                </div>
                <div id="pagebuttons">
                    <StyledButtton id="prev" onClick={() => prevPage()}>Previous Page</StyledButtton>
                    <StyledButtton id="next" onClick={() => nextPage()}>Next Page</StyledButtton>
                </div>
                <Link to="/create"><StyledButtton id="createButton">Create new testimonial</StyledButtton></Link>
            </div>
            <Footer />
        </StyledManage>
    );
};