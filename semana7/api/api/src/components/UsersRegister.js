import React from 'react';
import styled from "styled-components";

const SaveButton = styled.button`
    background-color: #5D9971;
    color: #FFFFFF;
    border: none;
    border-radius: 15px;
    padding: 3px 9px;
    box-shadow: 2px 2px 5px #5D9971;
    width: 53px;

    :hover {
        background-color: #5D8AA8;
        box-shadow: 2px 2px 5px #5D8AA8;
        cursor: pointer;
    }
`;

const FormContainer = styled.div`
    width: 250px;
    border-radius: 20px;
    height: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    margin-top: 100px;
    background-color: #EBB954;
    padding: 10px;
`;

const Inputs = styled.input`
    border: none;
    border-radius: 5px;
    padding: 2px;
`;

const Labels = styled.label`
    color: #5c4f1a;
    margin-right: 5px;
`;

const ButtonShowUsers = styled.button`
    background-color: #705239;
    color: #EDF2AA;
    border: none;
    border-radius: 15px;
    padding: 3px 9px;
    box-shadow: 2px 2px 5px #705239;
    width: 100px;
    margin: 0 auto;
    display: flex;
    position: relative;
    top: 80px;

    :hover {
        background-color: #B2926C;
        color: #705239;
        box-shadow: 2px 2px 5px #B2926C;
        cursor: pointer;
    }
`

export class UsersRegister extends React.Component {
    render() {
        return(
            <div>
                <ButtonShowUsers onClick = { this.props.changePage }>Show Users</ButtonShowUsers>
                <FormContainer>
                    <div>
                        <Labels>Name</Labels>
                        <Inputs 
                            placeholder = { "Thanos" }
                            value = { this.props.inputName }
                            onChange = { this.props.handleInputChangeName }
                            required
                        />
                    </div>
                    <div>
                        <Labels>Email</Labels>
                        <Inputs
                            placeholder = { "thanos-candy@mail.com" }
                            value = { this.props.inputEmail }
                            onChange={this.props.handleInputChangeEmail}
                            required
                        />
                    </div>
                    <SaveButton onClick = { this.props.createUser }>Save</SaveButton>
                </FormContainer>
          </div>
        )
    }

}