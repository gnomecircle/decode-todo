import React, { Component } from 'react';
import styled from 'styled-components';
import Restore from './Restore';
import AddListItem from './AddListItem';
import List from './List';
import base from '../base';

const StyledBody = styled.div`
    display: flex;
`;
class App extends Component {
    constructor() {
        super();
        this.state = {
            newItem: '',
            todoItems: {}
        }
    }

    componentDidMount() {
        this.ref = base.syncState(`/todoItems`, {
            context: this,
            state: 'todoItems'
        });

        console.log(this.ref);
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            newItem: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { todoItems, newItem } = this.state;
        const x = Object.keys(todoItems).length || 0;
        
        this.setState({
            todoItems: {
                ...this.state.todoItems,
                [`item${x+1}`]: {
                    label: newItem,
                    completed: false,
                    deleted: false
                }
            },
            newItem: ''
        });
    }

    handleClick = (item, type) => {
        const { todoItems } = this.state;
        let list = todoItems;

        Object.keys(list).forEach(listItem => {
            if (list[listItem].label === item.label) {
                list[listItem][type] = !list[listItem][type];
            }
        })
        this.setState({ todoItems: list });
    }

    handleRestore = () => {
        const { todoItems } = this.state;
        let newList = todoItems;
        
        Object.keys(todoItems).map(item => {
            newList[item].deleted = false;
        })
        this.setState({
            todoItems: newList
        })
    }

    filterItems = (array, value) => {
        let filteredArray = [];

        Object.keys(array).map((item) => {
            if (array[item].completed === value) {
                filteredArray.push(array[item]);
            }
        })
        return filteredArray;
    }

    render() {
        const { newItem, todoItems } = this.state;
        const todo = this.filterItems(todoItems, false) || [];
        const done = this.filterItems(todoItems, true) || [];
        return (

            <div>
                <Restore handleRestore={this.handleRestore} />
                <AddListItem
                    label={newItem}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <StyledBody>
                    <List
                        title={'What needs to get done...'}
                        list={todo}
                        handleClick={this.handleClick}
                        handleDelete={this.handleDelete}
                    />
                    <List
                        title={'What got done!'}
                        list={done}
                        handleClick={this.handleClick}
                        handleDelete={this.handleDelete}
                    />
                </StyledBody>
            </div>
        );
    }
}

export default App;
