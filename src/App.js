import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/system/ScrollToTop";
import Main from "./components/Main";
import Zero from "./components/page/Zero";
import Pin from "./components/page/Pin";
import Word from "./components/page/Word";
import Quiz from "./components/page/Quiz";
import Star from "./components/page/Star";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
