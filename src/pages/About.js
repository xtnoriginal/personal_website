import React from "react";
import {styled} from "@mui/material/styles";
import {Card, CardContent, CardMedia, Container, Grid, Stack} from "@mui/material";
import Wakatime from "../components/Wakatime";
import MUITimeline from "../components/Timeline";
import Typography from "@mui/material/Typography";


const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
    background: "white",
    color: "whitesmoke"
});

export default function About() {

    return(
        <Container>


            <Grid container spacing={2}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia component="img"
                               image="/static/images/profile.jpeg"
                    />
                </Card>

                <Container>
                    <Typography>My name is Claudious Tirivashe Nhemwa  and passionate about Sof</Typography>
                </Container>
            </Grid>


            <Container sx={{marginTop: 10}}>
                <Typography align="center" variant="h3">My Journey</Typography>
                <MUITimeline/>
            </Container>




            {/* <Card>
                <CardContent>
                    <img src="/static/images/profile.jpeg"></img>
                    <h1>My Journey</h1>

                    <MUITimeline/>
                    <p>What is a Bash for loop?
                        A bash for loop is a bash programming language statement which allows code to be repeatedly executed. A for loop is classified as an iteration statement i.e. it is the repetition of a process within a bash script. For example, you can run UNIX command or task 5 times or read and process list of files using a for loop. A for loop can be used at a shell prompt or within a shell script itself.</p>
                    <h1>Wakatime</h1>
                    <Wakatime/>
                </CardContent>
            </Card>*/}
        </Container>
    );

}
