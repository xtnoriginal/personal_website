import  React from 'react';
import './App.css';
import ThemeProvider from './theme';
import Router from "./routes";
import MatrixRain from "./components/Matrix";





class App extends React.Component {

    render(){
        return (
            <ThemeProvider>
                <Router/>
            </ThemeProvider>
        );
    }

}

export default App;
