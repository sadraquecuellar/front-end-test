import React from 'react'

import Form from '../../components/Form/index';
import Button from '../../components/Button/index';

import {HeaderTitle, HeaderSubTitle, Input, Text} from './styles';

const Login = () => {
  return (
    <Form>
      <HeaderTitle>
        Tarefas
      </HeaderTitle>
      <HeaderSubTitle >
        Login
      </HeaderSubTitle>
      <Input>
        <i className="material-icons">person</i>
        <input placeholder="usuário" name="user"></input>
      </Input>      
      <Input href="/">
        <i className="material-icons">lock</i>
        <input type="password" placeholder="senha" name="password"></input>
      </Input>      
      <Button>
        <a href="/">
          Entrar
        </a>
      </Button>
      <Text>
        <a href="/register">
          Criar conta
        </a>
      </Text>
    </Form>
  )
}

export default Login
