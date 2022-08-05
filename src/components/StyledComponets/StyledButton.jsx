import styled from "styled-components";

export const StyledButtton = styled.button`
    background-color: ${props => props.theme.color.purple};
    font-size: ${props => props.theme.font_size.small};
    padding: 2.5rem 6.3rem;
    color: white;
    line-height: 2.1rem;
    font-weight: 500;
    text-align: center;
    border-radius: 6rem;
    border: 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    @media (max-width: 600px) {
        padding: 1rem 2rem;
    }

    &:hover {
        background-color: ${props => props.theme.color.dark_purple};
    }
`;