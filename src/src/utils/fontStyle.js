import colors from './colors';

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em",
    color: colors.dark,
    fontSize: '2rem'
};

export default {
    center: { textAlign: 'center'},
    h001 : { ...defaultFont, fontWeight: '500', fontSize: '2.8125rem', color: colors.c34, lineHeight: '1.2em' },
    h002 : { ...defaultFont, fontWeight: '400', fontSize: '1.6125rem', color: colors.muted },
    h003 : { ...defaultFont, fontWeight: '300', fontSize: '1.6125rem', color: colors.muted },

    h004 : { ...defaultFont, fontWeight: '500', fontSize: '2.5125rem', color: colors.muted, lineHeight: '1.2em' },      // card
    h005 : { ...defaultFont, fontWeight: '500', fontSize: '0.9225rem', color: colors.muted, fontStyle: 'italic' },      // card 
    h006 : { fontWeight: '200', fontSize: '1.125rem', color: 'rgba(0,0,0,0.87)' },


    h007 : { fontWeight: '400', fontSize: '1.025rem', color: 'rgba(0,0,0,0.82)' }, //Privacy


    h201 : { ...defaultFont, fontWeight: '500', fontSize: '1.1125rem', color: colors.primary, lineHeight: '1.6em' }

}
