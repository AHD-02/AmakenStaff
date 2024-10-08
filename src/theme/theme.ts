import {PaletteThemeProps} from 'types/theme';
import {PalettesProps} from '@ant-design/colors';
import {PaletteColorOptions} from '@mui/material/styles';
import {ThemeMode} from 'types/config';

const Default = (colors: PalettesProps, _: ThemeMode): PaletteThemeProps => {
        const {grey} = colors;
        const greyColors: PaletteColorOptions = {
            0: grey[0],
            50: grey[1],
            100: grey[2],
            200: grey[3],
            300: grey[4],
            400: grey[5],
            500: grey[6],
            600: grey[7],
            700: grey[8],
            800: grey[9],
            900: grey[10],
            A50: grey[15],
            A100: grey[11],
            A200: grey[12],
            A400: grey[13],
            A700: grey[14],
            A800: grey[16]
        };
        const contrastText = '#fff';

        const primaryColors = ['#f0fdfb', '#cbfcf6', '#98f7ef', '#5cece4', '#2bd6d3', '#A5583A', '#191E3A', '#124d4f', '#032c30', '#032c30'];
        const errorColors = ['#FDE8E7', '#F25E52', '#F04134', '#EE3B2F', '#E92A21'];
        const warningColors = ['#FFF7E0', '#FFC926', '#FFBF00', '#FFB900', '#FFA900'];
        const infoColors = ['#E0F4F5', '#26B0BA', '#00A2AE', '#009AA7', '#008694'];
        const successColors = ['#E0F5EA', '#26B56E', '#00A854', '#00A04D', '#008D3A'];

        return {
            primary: {
                lighter: primaryColors[0],
                100: primaryColors[1],
                200: primaryColors[2],
                light: primaryColors[3],
                400: primaryColors[4],
                main: primaryColors[5],
                dark: primaryColors[6],
                700: primaryColors[7],
                darker: primaryColors[8],
                900: primaryColors[9],
                contrastText
            },
            secondary: {
                lighter: greyColors[100],
                100: greyColors[100],
                200: greyColors[200],
                light: greyColors[300],
                400: greyColors[400],
                main: greyColors[500]!,
                600: greyColors[600],
                dark: greyColors[700],
                800: greyColors[800],
                darker: greyColors[900],
                A100: greyColors[0],
                A200: greyColors.A400,
                A300: greyColors.A700,
                contrastText: greyColors[0]
            },
            error: {
                lighter: errorColors[0],
                light: errorColors[1],
                main: errorColors[2],
                dark: errorColors[3],
                darker: errorColors[4],
                contrastText
            },
            warning: {
                lighter: warningColors[0],
                light: warningColors[1],
                main: warningColors[2],
                dark: warningColors[3],
                darker: warningColors[4],
                contrastText: greyColors[100]
            },
            info: {
                lighter: infoColors[0],
                light: infoColors[1],
                main: infoColors[2],
                dark: infoColors[3],
                darker: infoColors[4],
                contrastText
            },
            success: {
                lighter: successColors[0],
                light: successColors[1],
                main: successColors[2],
                dark: successColors[3],
                darker: successColors[4],
                contrastText
            },
            grey: greyColors
        };
    }
;

export default Default;
