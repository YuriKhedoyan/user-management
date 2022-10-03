import { makeStyles } from '@mui/styles';

export default makeStyles({
  userUpdatePopup: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    height: "100%",
    backgroundColor: '#f3f3f3',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
  },

  keyIconDiv: {
    fontSize: "10px",
    maxWidth: '70px',
    maxHeight: '50px',
    color: 'white',
    position: 'absolute',
    left: '170px',
    top: '160px',
    color: 'white',
    backgroundColor: "#7e7ef1",
    color: "white",
    borderRadius: "25px"
  },

  input: {
    width: '310px',
    height: '60px'
  },

  divIcons: {
    padding: '15px'
  },
});
