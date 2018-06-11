import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    border: 1px solid #eaeaea;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 160px;
`;
const StyledInputContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const StyledLabel = styled.label`
    font-size: 60px;
    margin-bottom: -16px;
    transform: rotate(-2deg);
    z-index: -1;
`;
const StyledInput = styled.input`
    height: 36px;
    width: 300px;
    padding: 0 8px;
    font-size: 16px;
`;
const StyledInputButton = styled.button`
    background: #eaeaea;
    border-radius: 0;
    border: 1px solid #eaeaea;
    height: 42px;
    font-size: 18px;
    padding: 0 8px;
    width: 80px;

    &:hover { color: black; }
`;
const AddListItem = ({ handleChange, handleSubmit, label }) => {
    const submitDisabled = label === '';
    
    return (
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
            <StyledLabel>What do you want to do?</StyledLabel>
            <StyledInputContainer>
                <StyledInput
                    type="text"
                    value={label}
                    onChange={handleChange}
                />
                <StyledInputButton 
                    type="submit"
                    disabled={submitDisabled}
                >
                    Add it!
                </StyledInputButton>
            </StyledInputContainer>
        </StyledForm>
    )
}

export default AddListItem;