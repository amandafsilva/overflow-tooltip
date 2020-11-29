import { makeStyles, Theme } from "@material-ui/core";

const useAppStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    boxSizing: 'border-box',
    backgroundColor: '#F5F3E7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paper: {
    backgroundColor: '#CCD4BF',
    padding: theme.spacing(5),
    maxWidth: '70vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerBox: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr auto 1fr',
    columnGap: theme.spacing(2),
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  overflowBox: {
    maxWidth: '25rem'
  },
}))

export { useAppStyles };

