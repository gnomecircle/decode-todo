import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    border: 1px solid #eaeaea;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 50%;
`;
const StyledHeader = styled.h2`
    margin: 32px 0 24px;
    text-align: center;
    width: 100%;
`;
const StyledList = styled.ul`
    font-size: 18px;
    font-weight: 200;
`;
const StyledItem = styled.li`
    display: flex;
    align-items: center;
    text-transform: lowercase;
    width: 300px;
    padding: 8px 14px;

    &:hover {
        background: #eee;
    }

    > div {
        display: flex;
    }
`;
const StyledDelete = styled.div`
    border: 1px solid #fff;
    color: #707070;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #eaeaea;
    border-radius: 50%;
    font-size: 12px;
    height: 20px;
    width: 20px;
    margin-left: auto;
    z-index: 1;

    p {
        margin: -2px 0 0 0;
        font-weight: 700;
    }

    &:hover {
        background: #fff;
    }
`;
const StyledDone = styled.div`
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 2px;
    height: 16px;
    margin-right: 8px;
    width: 16px;

    &:hover,
    &.done {
        background: #707070;
    }
`;

const List = ({ title, list, handleClick }) => {

    return (
        <StyledContainer>
            <StyledHeader>{title}</StyledHeader>
            <StyledList>
                {list.map((item, key) => {
                    const { label, completed, deleted } = item;

                    if (deleted) {
                        return;
                    } else {
                        return (
                            <StyledItem key={key}>
                                <div onClick={() => handleClick(item, 'completed')}>
                                    <StyledDone className={completed ? 'done' : 'todo'}/>
                                    {label}
                                </div>
                                <StyledDelete onClick={() => handleClick(item, 'deleted')}><p>x</p></StyledDelete>
                            </StyledItem>
                        )
                    }
                })}
            </StyledList>
        </StyledContainer>
    )
}

export default List;