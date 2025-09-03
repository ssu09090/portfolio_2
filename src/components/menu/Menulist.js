

const Menulist = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView();
    }
  };

  return (
    <nav className="menu-list">
      <ul>
        <li onClick={() => handleScroll("A")}>ABOUT ME </li>
        <li onClick={() => handleScroll("S")}>SKILLS </li>
        <li onClick={() => handleScroll("P")}>PROJECT </li>
        <li onClick={() => handleScroll("C")}>CONTACT </li>
      </ul>
    </nav>
  );
};

export default Menulist;
