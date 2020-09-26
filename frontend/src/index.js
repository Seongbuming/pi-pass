import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Icon } from '@material-ui/core';
import Form from './components/Form';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function Application(props) {
  const classes = useStyles();
  
  return (
    <div>
      <Form>
        <div>
          <TextField label="이름" />
        </div>
        <div>
          <TextField label="전화번호" />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
          >
            <span>등록</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}

ReactDOM.render(<Application />, document.getElementById('app'));
