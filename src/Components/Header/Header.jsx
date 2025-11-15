import "./HeaderStyles.css";

export const Header = () => {
  return (
<header className="header">
  <div className="logo">
    <a className="dm-sans-medium logo-text" href="#hero">
      Area
    </a>
  </div>

  <nav>
    <ul className="nav-list">
      <li><a href="#benefits" className="dm-sans-bold nav-link">Benefits</a></li>
      <li><a href="#specs" className="dm-sans-bold nav-link">Specifications</a></li>
      <li><a href="#howto" className="dm-sans-bold nav-link">How-to</a></li>
      <li><a href="#contact" className="dm-sans-bold nav-link">Contact Us</a></li>
    </ul>
  </nav>
</header>
  );
};
