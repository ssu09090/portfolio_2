import Menu from "./menu/Menu";
import Header from "./main/Header";
import Aboutme from "./main/Aboutme";
import Skills from "./main/Skills";
import Project from "./main/Project";
import Publishing from "./main/Publishing";
import Scroll from "./main/Scroll";
import Footer from "./main/Footer";

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
      <Scroll/>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
