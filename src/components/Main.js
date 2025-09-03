import Menu from "./menu/Menu";
import Header from "./main/Header";
import Aboutme from "./main/Aboutme";

import Footer from "./main/Footer";
import Skills from "./main/Skills";
import Project from "./main/Project";
import Publishing from "./main/Publishing";

const Main = () => {
  return (
    <div className="main-layout">
      <Menu />
      <header>
        <Header />
      </header>
      <main>
        <Aboutme />
        <Skills />
        <Project/>
        <Publishing/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
