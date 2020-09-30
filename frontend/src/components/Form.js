import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  text-align: center;
`;

function Form(props) {
  return (
    <StyledForm>
      {props.children}
    </StyledForm>
  );
}

export default Form;
