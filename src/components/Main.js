import Menu from "./menu/Menu";
import Header from "./main/Header";
import AboutMe from "./main/AboutMe";
import Skills from "./main/Skills";
import Project from "./main/Project";
import Publishing from "./main/Publishing";
import Scroll from "./Scroll";
import Footer from "./main/Footer";

const Main = () => {
  return (
    <div className="main-layout">
      <Menu />
      <header>
        <Header />
      </header>
      <main>
        <AboutMe />
        <Skills />
        <Project/>
        <Publishing/>
      </main>
      <Scroll/>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
