import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
theme.typography.h1 = {
  fontSize: '3.5rem',
  color: '#fff',
  fontWeight: 500,
  lineHeight: 1.5,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3.5rem',
  },
};

export default theme