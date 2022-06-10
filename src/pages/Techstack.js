import { Link as RouterLink } from 'react-router-dom';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
import Page from "./Page";
import Iconify from "../components/Iconify";
import POSTS from "../_mock/blog";
import BlogPostCard from "../sections/Blog/BlogPostCard";
// components


const STACK = [
    "logos:python","logos:java","logos:javascript", "logos:react", "bxl:c-plus-plus","simple-icons:raspberrypi","logos:pytorch",
    "logos:haskell-icon","flat-color-icons:android-os","vscode-icons:file-type-css","akar-icons:html-fill","logos:bootstrap",
    "logos:ubuntu","fa6-brands:git-square","akar-icons:github-fill", "cib:c","logos:pycharm","logos:intellij-idea","logos:webstorm"
    ,"logos:wakatime","vscode-icons:file-type-photoshop","logos:visual-studio","logos:bash-icon","vscode-icons:file-type-light-systemverilog"

]



export default function Techstack() {
    return (
        <Page title="Tech Stack">
            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>

                    </Typography>

                </Stack>


                <Grid container spacing={3}>

                    {STACK.map((iconname, index) => (
                        <Grid item xs={12} sm={6} md={3}>
                            <Iconify icon={iconname} sx={{width:120, height:120 }}/>
                        </Grid>
                    ))}

                </Grid>




            </Container>
        </Page>
    );
}
