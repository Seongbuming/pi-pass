import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import styled from 'styled-components';
import { Collapse, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Close } from '@material-ui/icons';

const StyledForm = styled.form`
  text-align: center;
`;
const MessageWrapper = styled.div`
  width: 500px;
  max-width: calc(100% - 50px);
  margin: 1em auto;
`;

function Form(props) {
  const [infoMessage, setInfoMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [warningMessage, setWarningMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies('pi-pass');

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.name.value.length === 0 || e.target.tell.value.length === 0) {
      setInfoMessage(true);
      setSuccessMessage(false);
      setWarningMessage(false);
      setErrorMessage(false);
      return;
    }

    axios.post(`http://${window.location.hostname}/submit`, {
      name: e.target.name.value,
      tell: e.target.tell.value
    }).then(response => {
      console.log(response.data.success);
      if (response.data.success) {
        setInfoMessage(false);
        setSuccessMessage(true);
        setWarningMessage(false);
        setErrorMessage(false);
        setCookie('name', response.data.name, { path: '/' });
        setCookie('tell', response.data.tell, { path: '/' });
      } else {
        setInfoMessage(false);
        setSuccessMessage(false);
        setWarningMessage(true);
        setErrorMessage(false);
      }
    }).catch(error => {
      console.log(error);
      setInfoMessage(false);
      setSuccessMessage(false);
      setWarningMessage(false);
      setErrorMessage(true);
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <MessageWrapper>
        <Collapse in={infoMessage}>
          <Alert
            severity="info"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setInfoMessage(false);
                }}
              >
                <Close fontSize="inherit" />
              </IconButton>
            }
          >
            <span>양식을 모두 입력하세요.</span>
          </Alert>
        </Collapse>
        <Collapse in={successMessage}>
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setSuccessMessage(false);
                }}
              >
                <Close fontSize="inherit" />
              </IconButton>
            }
          >
            <span>등록되었습니다.</span>
          </Alert>
        </Collapse>
        <Collapse in={warningMessage}>
          <Alert
            severity="warning"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setWarningMessage(false);
                }}
              >
                <Close fontSize="inherit" />
              </IconButton>
            }
          >
            <span>출입명부를 등록하지 못했습니다.</span>
          </Alert>
        </Collapse>
        <Collapse in={errorMessage}>
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setErrorMessage(false);
                }}
              >
                <Close fontSize="inherit" />
              </IconButton>
            }
          >
            <span>출입명부 등록 중 오류가 발생했습니다.</span>
          </Alert>
        </Collapse>
      </MessageWrapper>

      {props.children}
    </StyledForm>
  );
}

export default Form;
