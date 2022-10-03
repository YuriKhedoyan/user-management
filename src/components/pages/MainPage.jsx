import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';
import KeyIcon from '@mui/icons-material/Key';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import AddNewUser from '../common/AddNewUser/AddNewUser';
import DeleteUser from '../common/DeleteUser/DeleteUser';
import UpdateUser from '../common/UpdateUser/UpdateUser';

import '../../Assets/style.sass';

const MainPage = () => {

  const [open, setOpen] = useState(false);
  const [id, setId] = useState(0);
  const [newUserName, setNewUserName] = useState('');
  const [newUserLastName, setNewUserLastName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState('User');
  const [users] = useState([]);
  const [deleteWindow, setDeleteWindow] = useState(false);
  const [deleteUserName, setDeleteUserName] = useState('');
  const [settingsWindow, setSettingsWindow] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);
  const [tosterWindow, setTosterWindow] = useState('');
  const [tosterVariant, setTosterVariant] = useState('');

  const handleUserNameChange = e => {
    setNewUserName(e.target.value.trim())
    localStorage.setItem('newUserName', e.target.value.trim());
  }
  const handleLastNameChange = e => {
    setNewUserLastName(e.target.value.trim())
    localStorage.setItem('newUserLastName', e.target.value.trim());
  }
  const handleEmailChange = e => {
    setNewUserEmail(e.target.value.trim())
    localStorage.setItem('newUserEmail', e.target.value.trim());
  }

  const handleOpen = () => {
    setOpen(true);
    setNewUserEmail(localStorage.getItem('newUserEmail'));
    setNewUserLastName(localStorage.getItem('newUserLastName'));
    setNewUserName(localStorage.getItem('newUserName'));
  }
  const handleOpenDeleteWindow = () => setDeleteWindow(true);
  const handleCloseDeleteWindow = () => setDeleteWindow(false);
  const handleOpenSettingsWindow = user => {
    setSettingsWindow(true);
    setCurrentUser(users[users.findIndex(el => el.id === user.id)]);
  }
  const handleCloseSettingsWindow = () => setSettingsWindow(false);

  const createNewUser = (id, userName, userLastName, userEmail, userRole) => {
    users.push({ id, userName, userLastName, userEmail, userRole, status: true });
  };

  const submit = e => {
    e.preventDefault();
    if (newUserName !== '' && newUserLastName !== '' && newUserEmail !== '') {
      createNewUser(id, newUserName, newUserLastName, newUserEmail, newUserRole);
      setId(id + 1);
      setOpen(false);
      setNewUserName('');
      setNewUserLastName('');
      setNewUserEmail('');
      setNewUserRole('User');
      localStorage.newUserEmail = '';
      localStorage.newUserLastName = '';
      localStorage.newUserName = '';
      setTosterWindow(true);
      setTosterVariant('success')
    } else {
      setTosterVariant('error');
      setTosterWindow(true);
    }
  }

  const updateUserData = e => {
    e.preventDefault()
    const user = users[users.findIndex(el => el.id === currentUser.id)];
    if (currentUser.userName !== '' && currentUser.userLastName !== '') {
      user.userName = currentUser.userName;
      user.userLastName = currentUser.userLastName;
      user.userRole = currentUser.userRole;
      setSettingsWindow(false);
      setTosterWindow(true);
      setTosterVariant('success')
    } else {
      setTosterVariant('error')
    }
  }

  const deleteUser = e => {
    e.preventDefault();
    users.forEach((el, i) => {
      if (el.userName === deleteUserName && deleteUserName !== '') {
        users.splice(i, 1);
        setDeleteUserName('');
        handleCloseDeleteWindow();
        setTosterWindow(true);
        setTosterVariant('Success')
      }
    })
  }

  return (
    <>
      <Snackbar open={tosterWindow} autoHideDuration={6000} onClose={setTimeout(() => setTosterWindow(false), 2500)}>
        <Alert onClose={setTimeout(() => setTosterWindow(false), 2500)} severity={tosterVariant} sx={{ width: '100%', bgcolor: 'black', color: 'white' }}> {tosterVariant.charAt(0).toUpperCase() + tosterVariant.slice(1)} ! </Alert>
      </Snackbar>
      <div id="sc1">
        <Grid container spacing={2}>
          <Grid item md={8} id="grid1">
            <h1 id="headerText">Project Access</h1>
            <IconButton aria-label="delete" onClick={handleOpen} id="btn">
              <AddIcon />
            </IconButton>
            <br></br>
            <AddNewUser open={open} newUserName={newUserName} newUserLastName={newUserLastName} newUserEmail={newUserEmail} newUserRole={newUserRole} setNewUserRole={setNewUserRole} handleUserNameChange={handleUserNameChange} handleLastNameChange={handleLastNameChange} handleEmailChange={handleEmailChange} submit={submit}></AddNewUser>
          </Grid>
          <Grid item md={4}>
            <div id="searchDiv">
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                options={users.map((option) => option.label)}
                renderInput={(params) => (
                  <TextField id="standard-basic" label="Type to filter table" variant="standard" InputProps={{ ...params.InputProps, type: 'search' }} />
                )}
              />
              <p><SearchIcon></SearchIcon></p>
            </div>
          </Grid>
        </Grid>
      </div>
      <div id="sc2">
        <div className='sc2MainDiv'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" className='tableText' id='useName'><b>USER</b></TableCell>
                  <TableCell align="left" className='tableText tc'>ROLE</TableCell>
                  <TableCell align="center" className='tableText tc'>STATUS</TableCell>
                  <TableCell align="center" className='tableText tc'>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users ? users.map(user => (
                  <>
                    <TableRow key={user?.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                      <TableCell component="th" scope="row">
                        <div className='accountCircle'>
                          <div>
                            <p className='name'>{user?.userName}</p>
                            <p className='email'>{user?.userEmail}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell align="center" className='tableText'>{user?.userRole == 'Admin' ? <div className='userRoleSection'><KeyIcon className='keyIcon'></KeyIcon><p className='userRole'>{user?.userRole}</p></div> : <div className='userRoleSection'><p className='userRole'>{user?.userRole}</p></div>}</TableCell>
                      <TableCell align="center" className='tableText' ><Switch checked={user?.status} /></TableCell>
                      <TableCell align="center" className='tableText' id='actions'>
                        <div style={{ display: 'flex' }}>
                          <SettingsIcon className='settingsIcon' onClick={e => handleOpenSettingsWindow(user)}></SettingsIcon>
                          <UpdateUser settingsWindow={settingsWindow} currentUser={currentUser} setCurrentUser={setCurrentUser} handleCloseSettingsWindow={handleCloseSettingsWindow} updateUserData={updateUserData} user={user}></UpdateUser>
                          <DeleteIcon className='deleteIcon' onClick={handleOpenDeleteWindow}></DeleteIcon>
                          <DeleteUser deleteWindow={deleteWindow} deleteUserName={deleteUserName} setDeleteUserName={setDeleteUserName} handleCloseDeleteWindow={handleCloseDeleteWindow} deleteUser={deleteUser}></DeleteUser>
                        </div>
                      </TableCell>
                    </TableRow>
                  </>

                )) : <></>}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div >
      <br></br>
    </>
  )
}

export default MainPage;