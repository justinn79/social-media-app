import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    boxShadow: '8px 10px 5px',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    marginBottom: '15px',
    fontSize: '18px',
    
  },
  buttonSubmit: {
    marginBottom: 10,
    borderRadius: '12px',
  },
  buttonClear: {
    borderRadius: '12px',
  },
}));