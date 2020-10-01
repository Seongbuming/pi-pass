import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider, useCookies } from 'react-cookie';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Icon } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import Form from './components/Form';
import { TextFieldsRounded } from '@material-ui/icons';

const Header = styled.header`
  padding: 1.5em 0;
  background-color: white;
`;
const H1 = styled.h1`
  font-size: 1.2em;
  text-align: center;
`;
const HeaderLink = styled.a`
  text-decoration: none;
  color: #333;
`;
const Row = styled.div`
  margin: .5em 0;
  text-align: center;
`;
const useStyles = makeStyles((theme) => ({
  input: {
    width: 'calc(100% - 50px)',
  },
  button: {
    margin: theme.spacing(1)
  },
}));

function Application(props) {
  const classes = useStyles();
  const [cookies] = useCookies('pi-pass');
  const [name, setName] = useState(cookies.name);
  const [tell, setTell] = useState(cookies.tell);
  
  const onNameChange = e => {
    setName(e.target.value);
  };
  const onTellChange = e => {
    setTell(e.target.value);
  };

  return (
    <CookiesProvider>
      <GlobalStyles />

      <Header>
        <H1>
          <HeaderLink className="header-text" href="/">판도라큐브 전자출입명부</HeaderLink>
        </H1>
      </Header>

      <Form>
        <Row>
          <TextField
            type="text"
            name="name"
            label="이름"
            value={name}
            onChange={onNameChange}
            required />
        </Row>
        <Row>
          <TextField
            type="tel"
            name="tell"
            label="전화번호"
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            value={tell}
            onChange={onTellChange}
            required />
        </Row>
        <Row>
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
          >
            <span>등록</span>
          </Button>
        </Row>
      </Form>
    </CookiesProvider>
  );
}

ReactDOM.render(<Application />, document.getElementById('app'));
