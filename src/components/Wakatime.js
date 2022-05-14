import {Grid, Paper} from "@mui/material";


export default function Wakatime() {

    return(
        <Paper>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <figure><embed src="https://wakatime.com/share/@68606f8d-24f4-4f26-9b64-01836a4f8719/4112a72d-7178-41ff-b667-93636900c208.svg"></embed></figure>
                </Grid>
                <Grid item xs={6}>
                    <figure><embed src="https://wakatime.com/share/@68606f8d-24f4-4f26-9b64-01836a4f8719/2a27c23c-3767-4285-9785-7f9102b4c426.svg"></embed></figure>
                </Grid>



            </Grid>

        </Paper>
    );

}