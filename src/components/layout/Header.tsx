import { Link } from "react-router-dom";
import logo from "@assets/images/logo.png";

function Header() {
  return (
    <>
    {/*<div className="position-fixed top-0 start-0 end-0 mx-auto" style={{zIndex:"100"}}>*/}
      <nav className="navbar navbar-expand-lg navbar-dark mb-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="120px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="room">
                  客房旅宿
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="login">
                  會員登入
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/*</div>*/}
    </>
  );
}

export default Header;
