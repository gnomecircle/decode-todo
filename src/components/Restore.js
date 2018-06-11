import React from 'react';
import styled from 'styled-components';

const StyledRestore = styled.div`
    border: 1px solid #ccc;
    border-radius: 0 0 0 5px;
    color: #ccc;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    position: absolute;
    right: -2px;
    top: -2px;

    &:hover {
        border-color: red;
        color: red;
    }
`;

const Restore = ({ handleRestore }) => (
    <StyledRestore onClick={handleRestore}>Restore Deleted</StyledRestore>
)

export default Restore;