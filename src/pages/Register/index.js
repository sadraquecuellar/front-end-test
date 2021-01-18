import React from 'react'

import Form from '../../components/Form/index';
import Button from '../../components/Button/index';

import {HeaderTitle, HeaderSubTitle, Input, Text} from './styles';

const Register = () => {
  return (
    <Form>
      <HeaderTitle>
        Tarefas
      </HeaderTitle>
      <HeaderSubTitle>
        Criar Conta
      </HeaderSubTitle>
      <Input>
        <i className="material-icons">person</i>
        <input name="user" placeholder="usuário"></input>
      </Input>      
      <Input>
        <i className="material-icons">lock</i>
        <input type="password" placeholder="senha" name="password"></input>
      </Input>      
      <Button>
        <a href="/">
          Criar
        </a>
      </Button>
      <Text>
        <a href="/login">
          Já tenho uma conta
        </a>
      </Text>
    </Form>
  )
}

export default Register
