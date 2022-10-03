import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

import useStyles from './style.js';

const DeleteUser = props => {
  const classes = useStyles();

  return (
    <Modal open={props.deleteWindow} onClose={props.handleCloseDeleteWindow} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className={classes.deletePopup}>
        <form onSubmit={props.deleteUser}>
          <h1>Delete User</h1>
          <TextField id="filled-basic" title='Write username to delete' label="Delete User" variant="filled" className={classes.deleteInput} value={props.deleteUserName} onChange={e => props.setDeleteUserName(e.target.value.trim())} />
          <Button variant='contained' type='submit'>Submit</Button>
        </form>
      </Box>
    </Modal>
  );
}

export default DeleteUser