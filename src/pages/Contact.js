import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components

import Iconify from '../components/Iconify';
import Page from "./Page";
import Wakatime from "../components/Wakatime";
import ContactForm from "../sections/Contact/ContactForm";
import {styled} from "@mui/material/styles";



// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    //flexDirection: 'column',
    padding: theme.spacing(2, 0),
}));


export default function Contact() {
    return (
        <Page title="Dashboard: Blog">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Contact]
                    </Typography>

                </Stack>

                <ContentStyle>
                    <ContactForm/>
                </ContentStyle>

            </Container>

        </Page>
    );
}
