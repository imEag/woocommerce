import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";

const StyledManage = styled.div`
    

`;

export const Manage = () => {
    return (
        <StyledManage>
            <Header></Header>
            <h2>Content Manager</h2>
        </StyledManage>
    );
};