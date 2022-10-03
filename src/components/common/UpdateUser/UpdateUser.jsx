import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SettingsIcon from '@mui/icons-material/Settings';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import KeyIcon from '@mui/icons-material/Key';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PremissionsGroup from '../PremissionsGroup'

import useStyles from './style'

const UpdateUser = props => {

  const classes = useStyles();

  return (
    <Modal open={props.settingsWindow} onClose={props.handleCloseSettingsWindow} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box className={classes.userUpdatePopup}>
        <Grid container spacing={2}>
          <Grid item md={12} id="userSetupGrid1">
            <h1 id="headerText">User Setup</h1>
          </Grid>
          <Grid item md={2} id="userSetupGrid2">
            <IconButton aria-label="delete" id='settingsIcon2'>
              <SettingsIcon></SettingsIcon>
            </IconButton>
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item md={4}>
            <div id='avatarIcon'>
              <AccountCircleIcon></AccountCircleIcon>
              <div><KeyIcon  className={classes.keyIconDiv}></KeyIcon></div>
              <p className='uploadPhoto'>UPLOAD A PHOTO</p>
              <p className='userName'>{props.currentUser.userName}</p>
              <p className='userLastName'>{props.currentUser.userLastName}</p>
              <p className='userEmail'>{props.currentUser.userEmail}</p>
              <Button variant="contained" id='resendInviteBtn'> Resend the invite </Button>
            </div>
          </Grid>
          <Grid item md={4}>
            <h1>Details</h1>
            <div className={classes.divIcons}>
              {props.user.status ? <><Switch className='userRole' checked={props.currentUser?.status} /><p>The user is active</p></> : <><Switch className='userRole' checked={props.currentUser?.status} /><p>The user is deactiv</p></>}
            </div>
            <div>
              <form onSubmit={e => props.updateUserData(e, props.user.id)}>
                <TextField id="filled-basic" className={classes.input} label="*New First Name" variant="filled" value={props.currentUser.userName} onChange={e => props.setCurrentUser({
                  ...props.currentUser,
                  userName: [e.target.value]
                })} title='Write the user new Name' />
                <br></br>
                <br></br>
                <TextField id="filled-basic" className={classes.input} label="*New Last Name" variant="filled" value={props.currentUser.userLastName} onChange={e => props.setCurrentUser({
                  ...props.currentUser,
                  userLastName: [e.target.value]
                })} title='Write the user new Last Name' />
                <br></br>
                <br></br>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" className={classes.input} label="Role" variant="filled" value={props.currentUser.userRole} onChange={e => props.setCurrentUser({
                  ...props.currentUser,
                  userRole: [e.target.value]
                })}>
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                  <MenuItem value={"User"}>User</MenuItem>
                </Select>
                <br></br>
                <button type='submit' className='submit'>Save Changes</button>
              </form>
            </div>
          </Grid>
          <Grid item md={4}>
            <div>

              <Grid container spacing={2}>
                <Grid item sm={10}>
                  <h1>Premissions</h1>
                </Grid>
                <Grid item sm={2}>
                  <br></br>
                  <p>Admin</p>
                </Grid>
              </Grid>
              <br></br>
              <Grid container spacing={2}>
                <Grid item sm={9}>
                  <b>Super Admin</b>
                </Grid>
                <Grid item sm={3}>
                  <Switch />
                </Grid>
              </Grid>
              <br></br>

              <PremissionsGroup whichOne='1'></PremissionsGroup>
              <PremissionsGroup whichOne='2'></PremissionsGroup>
              <PremissionsGroup whichOne='3'></PremissionsGroup>

            </div>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default UpdateUser;