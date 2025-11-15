import "./HeaderStyles.css";
import { useNavigate } from "react-router-dom";


export const Header = () => {

  const navigate = useNavigate()

  return (
    <header>
      <div className="logo">
        <a className="dm-sans-medium logo-text" href="/">Area</a>
      </div>
      <nav>
        <ul>
          <li><p className="dm-sans-bold nav-item-text">Benefits</p></li>
          <li><p className="dm-sans-bold nav-item-text">Specifications</p></li>
          <li><p className="dm-sans-bold nav-item-text">How-to</p></li>
          <li><p className="dm-sans-bold nav-item-text">Contact Us</p></li>
        </ul>
      </nav>
    </header>
  );
};