import {createContext, ReactNode, useEffect} from 'react';

// project import
import config from 'config';
import useLocalStorage from 'hooks/useLocalStorage';

// types
import {CustomizationProps, FontFamily, MenuOrientation, PresetColor, ThemeDirection, ThemeMode} from 'types/config';
import {useSelector} from "react-redux";
import {getLanguage} from "../state";

// initial state
const initialState: CustomizationProps = {
    ...config,
    onChangeContainer: () => {
    },
    // onChangeLocalization: (lang: I18n) => {},
    onChangeMode: (_: ThemeMode) => {
    },
    onChangePresetColor: (_: PresetColor) => {
    },
    onChangeDirection: (_: ThemeDirection) => {
    },
    onChangeMiniDrawer: (_: boolean) => {
    },
    onChangeMenuOrientation: (_: MenuOrientation) => {
    },
    onChangeFontFamily: (_: FontFamily) => {
    }
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
    children: ReactNode;
};

function ConfigProvider({children}: ConfigProviderProps) {
    const [config, setConfig] = useLocalStorage('mantis-react-ts-config', initialState);
    const lang: string = useSelector(getLanguage);


    useEffect(() => {
        setConfig({
            ...config,
            themeDirection: lang === "ar" ? ThemeDirection.RTL : ThemeDirection.LTR
        });
    }, [lang]);

    const onChangeContainer = () => {
        setConfig({
            ...config,
            container: !config.container
        });
    };


    const onChangeMode = (mode: ThemeMode) => {
        setConfig({
            ...config,
            mode
        });
    };

    const onChangePresetColor = (theme: PresetColor) => {
        setConfig({
            ...config,
            presetColor: theme
        });
    };


    const onChangeMiniDrawer = (miniDrawer: boolean) => {
        setConfig({
            ...config,
            miniDrawer
        });
    };

    const onChangeMenuOrientation = (layout: MenuOrientation) => {
        setConfig({
            ...config,
            menuOrientation: layout
        });
    };

    const onChangeFontFamily = (fontFamily: FontFamily) => {
        setConfig({
            ...config,
            fontFamily
        });
    };

    return (
        <ConfigContext.Provider
            value={{
                ...config,
                onChangeContainer,
                onChangeMode,
                onChangePresetColor,
                onChangeMiniDrawer,
                onChangeMenuOrientation,
                onChangeFontFamily
            }}
        >
            {children}
        </ConfigContext.Provider>
    );
}

export {ConfigProvider, ConfigContext};
