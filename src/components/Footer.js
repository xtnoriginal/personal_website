import React from "react";
import {Grid} from "@mui/material";
import Logo from "./Logo";



export default function Footer() {

    return(
        <div>
            <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid>

                </Grid>

                <Grid>
                    <Logo/>
                </Grid>
                <Grid>

                </Grid>


            </Grid>
            <p>Copyright @ CNhemwa</p>
        </div>
    );

}