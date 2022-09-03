import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '8px 10px 5px',
      },
      heading: {
        color: 'black',
      },
      container: {
        background: '#374785',
        padding: '30px 30px 30px 30px',
        minHeight: '100vh',
        borderRadius: '12px',
      },
      [theme.breakpoints.down('xs')]: {
        mainContainer: {
          flexDirection: "column-reverse"
        }
      },
      // image: {
      //   marginLeft: '15px',
      // },
}));