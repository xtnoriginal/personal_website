import React from "react";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "../theme/overrides/Button";
import Logo from "../components/Logo";
import MatrixRain from "../components/Matrix";



const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    maxHeight:'100%',
    overflow: 'hidden',
    background: "black",
    color: "whitesmoke",
});

 export default function LandingPage() {

    return(


            <MatrixRain/>

    );

}
