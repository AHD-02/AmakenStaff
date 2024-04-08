import {Link, matchPath, useLocation} from 'react-router-dom';

// material-ui
import {useTheme} from '@mui/material/styles';
import {Avatar, Box, Chip, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery} from '@mui/material';

// project import
import Dot from 'components/@extended/Dot';
import IconButton from 'components/@extended/IconButton';

import useConfig from 'hooks/useConfig';
import {useGetMenuMaster, useHandlerDrawerOpen} from 'hooks/useMenu';

// types
import {MenuOrientation, ThemeMode} from 'types/config';
import {LinkTarget, NavActionType, NavItemType} from 'types/menu';

// ==============================|| NAVIGATION - LIST ITEM ||============================== //

interface Props {
    item: NavItemType;
    level: number;
    isParents?: boolean;
}

const NavItem = ({item, level, isParents = false}: Props) => {
    const theme = useTheme();

    const {menuMaster} = useGetMenuMaster();
    const drawerOpen = menuMaster.isDashboardDrawerOpened;
    const handlerDrawerOpen = useHandlerDrawerOpen()

    const downLG = useMediaQuery(theme.breakpoints.down('lg'));

    const {menuOrientation} = useConfig();
    let itemTarget: LinkTarget = '_self';
    if (item.target) {
        itemTarget = '_blank';
    }

    //const Icon = item.iconComponent!;
    const itemIcon = item.iconComponent
    const {pathname} = useLocation();
    const isSelected = !!matchPath({path: item?.link ? item.link : item.url!, end: false}, pathname);

    const textColor = theme.palette.mode === ThemeMode.DARK ? 'grey.400' : 'text.primary';
    const iconSelectedColor = theme.palette.mode === ThemeMode.DARK && drawerOpen ? 'text.primary' : 'primary.main';

    return (
        <>
            {menuOrientation === MenuOrientation.VERTICAL || downLG ? (
                <Box sx={{position: 'relative'}}>
                    <ListItemButton
                        component={Link}
                        to={item.url!}
                        target={itemTarget}
                        disabled={item.disabled}
                        selected={isSelected}
                        sx={{
                            zIndex: 1201,
                            pl: drawerOpen ? `${level * 28}px` : 1.5,
                            py: !drawerOpen && level === 1 ? 1.25 : 1,
                            ...(drawerOpen && {
                                '&:hover': {
                                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter'
                                },
                                '&.Mui-selected': {
                                    bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter',
                                    borderRight: `2px solid ${theme.palette.primary.main}`,
                                    color: iconSelectedColor,
                                    '&:hover': {
                                        color: iconSelectedColor,
                                        bgcolor: theme.palette.mode === ThemeMode.DARK ? 'divider' : 'primary.lighter'
                                    }
                                }
                            }),
                            ...(!drawerOpen && {
                                '&:hover': {
                                    bgcolor: 'transparent'
                                },
                                '&.Mui-selected': {
                                    '&:hover': {
                                        bgcolor: 'transparent'
                                    },
                                    bgcolor: 'transparent'
                                }
                            })
                        }}
                        {...(downLG && {
                            onClick: () => handlerDrawerOpen(false)
                        })}
                    >
                        {itemIcon && (
                            <ListItemIcon
                                sx={{
                                    minWidth: 28,
                                    color: isSelected ? iconSelectedColor : textColor,
                                    ...(!drawerOpen && {
                                        borderRadius: 1.5,
                                        width: 36,
                                        height: 36,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        '&:hover': {
                                            bgcolor: theme.palette.mode === ThemeMode.DARK ? 'secondary.light' : 'secondary.lighter'
                                        }
                                    }),
                                    ...(!drawerOpen &&
                                        isSelected && {
                                            bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.900' : 'primary.lighter',
                                            '&:hover': {
                                                bgcolor: theme.palette.mode === ThemeMode.DARK ? 'primary.darker' : 'primary.lighter'
                                            }
                                        })
                                }}
                            >
                                {itemIcon}
                            </ListItemIcon>
                        )}
                        {(drawerOpen || (!drawerOpen && level !== 1)) && (
                            <ListItemText
                                primary={
                                    <Typography variant="h6" sx={{color: isSelected ? iconSelectedColor : textColor}}>
                                        {item.title}
                                    </Typography>
                                }
                            />
                        )}
                        {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
                            <Chip
                                color={item.chip.color}
                                variant={item.chip.variant}
                                size={item.chip.size}
                                label={item.chip.label}
                                avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                            />
                        )}
                    </ListItemButton>
                    {(drawerOpen || (!drawerOpen && level !== 1)) &&
                        item?.actions &&
                        item?.actions.map((action, index) => {
                            const ActionIcon = action.icon!;
                            const callAction = action?.function;
                            return (
                                <IconButton
                                    key={index}
                                    {...(action.type === NavActionType.FUNCTION && {
                                        onClick: (event) => {
                                            event.stopPropagation();
                                            callAction();
                                        }
                                    })}
                                    {...(action.type === NavActionType.LINK && {
                                        component: Link,
                                        to: action.url,
                                        target: action.target ? '_blank' : '_self'
                                    })}
                                    color="secondary"
                                    variant="outlined"
                                    sx={{
                                        position: 'absolute',
                                        top: 12,
                                        right: 20,
                                        zIndex: 1202,
                                        width: 20,
                                        height: 20,
                                        mr: -1,
                                        ml: 1,
                                        color: 'secondary.dark',
                                        borderColor: isSelected ? 'primary.light' : 'secondary.light',
                                        '&:hover': {borderColor: isSelected ? 'primary.main' : 'secondary.main'}
                                    }}
                                >
                                    <ActionIcon style={{fontSize: '0.625rem'}}/>
                                </IconButton>
                            );
                        })}
                </Box>
            ) : (
                <ListItemButton
                    component={Link}
                    to={item.url!}
                    target={itemTarget}
                    disabled={item.disabled}
                    selected={isSelected}
                    sx={{
                        zIndex: 1201,
                        '&:hover': {
                            bgcolor: 'transparent'
                        },
                        ...(isParents && {
                            p: 1,
                            mr: 1
                        }),
                        '&.Mui-selected': {
                            bgcolor: 'transparent',
                            '&:hover': {
                                bgcolor: 'transparent'
                            }
                        }
                    }}
                >
                    {itemIcon && (
                        <ListItemIcon
                            sx={{
                                minWidth: 28,
                                ...(!drawerOpen && {
                                    borderRadius: 1.5,
                                    width: 28,
                                    height: 28,
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    '&:hover': {
                                        bgcolor: 'transparent'
                                    }
                                }),
                                ...(!drawerOpen &&
                                    isSelected && {
                                        bgcolor: 'transparent',
                                        '&:hover': {
                                            bgcolor: 'transparent'
                                        }
                                    })
                            }}
                        >
                            {itemIcon}
                        </ListItemIcon>
                    )}

                    {!itemIcon && (
                        <ListItemIcon
                            sx={{
                                color: isSelected ? 'primary.main' : 'secondary.dark',
                                ...(!drawerOpen && {
                                    borderRadius: 1.5,
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    '&:hover': {
                                        bgcolor: 'transparent'
                                    }
                                }),
                                ...(!drawerOpen &&
                                    isSelected && {
                                        bgcolor: 'transparent',
                                        '&:hover': {
                                            bgcolor: 'transparent'
                                        }
                                    })
                            }}
                        >
                            <Dot size={4} color={isSelected ? 'primary' : 'secondary'}/>
                        </ListItemIcon>
                    )}
                    <ListItemText
                        primary={
                            <Typography variant="h6" color={isSelected ? 'primary.main' : 'secondary.dark'}>
                                {item.title}
                            </Typography>
                        }
                    />
                    {(drawerOpen || (!drawerOpen && level !== 1)) && item.chip && (
                        <Chip
                            color={item.chip.color}
                            variant={item.chip.variant}
                            size={item.chip.size}
                            label={item.chip.label}
                            avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
                        />
                    )}
                </ListItemButton>
            )}
        </>
    );
};

export default NavItem;
