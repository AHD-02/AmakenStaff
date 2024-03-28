import {Button, CardMedia, Link, Stack, Typography} from '@mui/material';
import MainCard from 'Components/MainCard';
import avatar from 'assets/images/users/avatar-group.png';
import AnimateButton from 'Components/@extended/AnimateButton';


const NavCard = () => {

return (
    <MainCard sx={{bgcolor: 'grey.50', m: 3}}>
        <Stack alignItems="center" spacing={2.5}>
            <CardMedia component="img" image={avatar}/>
            <Stack alignItems="center">
                <Typography variant="h5">Help?</Typography>
                <Typography variant="h6" color="secondary">
                    getToResolveQuery
                </Typography>
            </Stack>
            <AnimateButton>
                <Button size="small" component={Link} href="mailto:info@Amaken.com">
                    Support
                </Button>
            </AnimateButton>
        </Stack>
    </MainCard>
);
}
export default NavCard;
