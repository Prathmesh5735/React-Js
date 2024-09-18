// import "../node_modules/bootstrap/bootsrap.min.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Header = () => {
  return (
    <header className="bg-light py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="logo fs-1">logo</div>
          <nav>
            <a href="#" className="mx-2 text-decoration-none text-dark fs-4 fw-bold">Home</a>
            <a href="#" className="mx-2 text-decoration-none text-dark fs-4 fw-bold">About</a>
            <a href="#" className="mx-2 text-decoration-none text-dark fs-4 fw-bold">Contact</a>
          </nav>
          <div>
            <a href="#" className="mx-1 fs-3 text-dark"><FaFacebook /></a>
            <a href="#" className="mx-1 fs-3 text-dark"><FaTwitter /></a>
            <a href="#" className="mx-1 fs-3 text-dark"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
