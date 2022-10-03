import { makeStyles } from '@mui/styles';

export default makeStyles({
  deletePopup: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    padding: 4,
  },

  deleteInput: {
    width: "620px",
    marginTop: '25px',
    marginBottm: '25px'
  }
});
