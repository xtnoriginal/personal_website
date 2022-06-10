import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components

import Iconify from '../components/Iconify';
import Page from "./Page";
import Wakatime from "../components/Wakatime";



// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

export default function Burnout() {
    return (
        <Page title="Dashboard: Blog">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Burnout
                    </Typography>

                </Stack>

               <Wakatime/>
            </Container>
        </Page>
    );
}
