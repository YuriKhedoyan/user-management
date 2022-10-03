import { makeStyles } from '@mui/styles';

export default makeStyles({
  addNewUserPopup: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 20,
  },

  textFieldInput: {
    width: "300px",
  },

  input: {
    width: '300px',
    maxHeight: '50px',
  },

  selectInput: {
    width: "310px"
  },

  span: {
    display: "flex",
    marginTop: '4px',
  },

  divIcons: {
    padding: '15px'
  },

  emailInput: {
    width: "610px"
  },

  userRoleStyle: {
    marginTop: '15px'
  }
});
