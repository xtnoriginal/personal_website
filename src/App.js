
import './App.css';
import ThemeProvider from './theme';
import Router from "./routes";
import LandingPage from "./pages/LandingPage";
import Wakatime from "./components/Wakatime";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import CustomizedTimeline from "./components/CostomizedTimeline";


function App() {
  return (
      <ThemeProvider>
          <CustomizedTimeline/>

      </ThemeProvider>
  );
}

export default App;
