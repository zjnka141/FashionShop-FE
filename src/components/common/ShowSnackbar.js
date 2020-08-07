import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useSelector, useDispatch} from 'react-redux';
import * as types from '../../store/actions';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ShowSnackbar = (props) => {
  const dispatch = useDispatch();
  const {snackbarOpen, snackbarMessage, snackbarType} = useSelector(state => state.ui);
  const handleClose = () => dispatch({type: types.SNACKBAR_CLEAR});
  return (
    <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={snackbarType || "success"}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default ShowSnackbar;
