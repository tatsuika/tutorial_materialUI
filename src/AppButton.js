import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {commonStyle} from './commonStyle.js';

import Button from '@material-ui/core/Button';

const AppButton = (props) =>{
  const { classes } = props;
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      Hello World
    </Button>
  );
}

export default withStyles(commonStyle)(AppButton)
