import React from 'react';
import styled from "styled-components";

export class UsersList extends React.Component {
    // const usersList = this.props.users.map((user) => {
    //     return <li key={user.id}>{user.name}</li>
    //   });
    render() {
        const usersList = this.props.users.map((user) => {
            return (
            <div key={user.id}>
                <li >{user.name}</li>
                <button onClick={() => this.props.deleteUser(user.id)}>x</button>
            </div>)
          });
        return (
            <div>
                <h2>Lista Usuários</h2>
                <button onClick={this.props.changePage}>Voltar</button>
                <div>
                    {usersList}
                    
                </div>
            </div>
            
        )
    }
}