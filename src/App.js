import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/system/ScrollToTop";
import Main from "./components/Main";
import Zero from "./components/page/Zero";
import Pin from "./components/page/Pin";
import Word from "./components/page/Word";
import Quiz from "./components/page/Quiz";
import Star from "./components/page/Star";
import Tesla from "./components/page/Tesla";
import Airbnb from "./components/page/Airbnb";
import Netflix from "./components/page/Netflix";

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Zero" element={<Zero />} />
        <Route path="/Pin" element={<Pin />} />
        <Route path="/Word" element={<Word />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Star" element={<Star />} />
        <Route path="/Tesla" element={<Tesla />} />
        <Route path="/Airbnb" element={<Airbnb />} />
        <Route path="/Netflix" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
