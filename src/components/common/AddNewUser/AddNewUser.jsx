import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FaceIcon from '@mui/icons-material/Face';
import KeyIcon from '@mui/icons-material/Key';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

import useStyles from './style.js';

const AddNewUser = props => {
  const classes = useStyles();

  return (
    <Modal open={props.open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className={classes.addNewUserPopup}>
        <form onSubmit={props.submit}>
          <h1>Invite New User</h1>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className={classes.span}>
              <div className={classes.divIcons}><FaceIcon></FaceIcon></div>
              <TextField label="* First Name" variant="filled" className={classes.input} value={props.newUserName} onChange={props.handleUserNameChange} />
              <p className='transparentSymbol'>  </p>
              <TextField label="* Last Name" variant="filled" className={classes.input} value={props.newUserLastName} onChange={props.handleLastNameChange} />
            </span>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className={classes.span}>
              <div className={classes.divIcons}><AlternateEmailIcon></AlternateEmailIcon></div>
              <TextField id="filled-basic" label="* Email" variant="filled" className={classes.emailInput} value={props.newUserEmail} onChange={props.handleEmailChange} />
            </span>
          </Typography>
          
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <span className={classes.span}>
              <div className={classes.divIcons}><KeyIcon></KeyIcon></div>
              <FormControl fullWidth>
                <InputLabel className={classes.userRoleStyle}>Role</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Role" variant="filled" className={classes.selectInput} value={props.newUserRole} onChange={e => props.setNewUserRole(e.target.value)}>
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                  <MenuItem value={"User"}>User</MenuItem>
                </Select>

              </FormControl>
            </span>
          </Typography>
          <Button variant='contained' type='submit'>Submit</Button>
          {props.newUserName !== '' && props.newUserLastName !== '' && props.newUserEmail !== '' ? <><p id='success' className='texts'>Good to go</p></> : <><p id='error' className='texts'>Fill in all fileds</p></>}
        </form>
      </Box>
    </Modal>
  )}

export default AddNewUser;