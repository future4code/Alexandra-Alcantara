import React from 'react';
import styled from "styled-components";

const TituloLista = styled.h2`
    text-align: center;
    color: #F5DCC7;
    margin: 0 auto;
    margin-bottom: 15px;
`;

const BackButton = styled.button`
    background-color: #705239;
    color: #EDF2AA;
    border: none;
    border-radius: 15px;
    padding: 3px 9px;
    box-shadow: 2px 2px 5px #705239;
    width: 60px;
    margin: 5px;

    :hover {
        background-color: #B2926C;
        color: #705239;
        box-shadow: 2px 2px 5px #B2926C;
        cursor: pointer;
    }
`;

const Lists = styled.li`
    list-style: none;
`;

const ListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    border-bottom: 1px solid white;
    padding: 1px;
    width: 300px;
    margin: 0 auto;
`;

const DeleteButton = styled.button`
    color: #FFFFFF;
    background-color: #FF0000;
    border: none;
    border-radius: 5px;
    margin-left: 2px;
    cursor: pointer;
    font-size: xx-small;
`;

export class UsersList extends React.Component {
    render() {
        const usersList = this.props.users.map((user) => {
            return (
                <ListContainer key={user.id}>
                    <Lists>{user.name}</Lists>
                    <DeleteButton onClick={() => this.props.deleteUser(user.id)}>x</DeleteButton>
                </ListContainer>
            );
        });
        return (
            <div>
                <BackButton onClick={this.props.changePage}>Back</BackButton>
                <TituloLista>Users List</TituloLista>
                <div>
                    {usersList}
                </div>
            </div>
            
        );
    };
};