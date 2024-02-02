import logo from "@assets/images/logo.png";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type User = {
  name: string;
};

function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsUserDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const getUserProfile = async () => {
      const response = await fetch("/api/v1/user", {
        headers: new Headers({
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      });
      const jsonData = await response.json();
      if (jsonData.status) {
        const { name } = jsonData.result;
        setUser({
          name,
        });
      }
    };
    getUserProfile();
  }, [pathname]);

  return (
    <>
      <div
        className="position-fixed px-3 px-lg-10 py-4 py-lg-3 vw-100 d-flex align-items-center justify-content-between"
        style={{ zIndex: 1 }}
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        {pathname !== "/login" && pathname !== "/signup" && (
          <>
            <div className="d-none d-lg-flex gap-4">
              <Link className="px-4 py-4 text-white" to="/Room">
                客房旅宿
              </Link>
              {user ? (
                <button
                  className="px-4 py-4 text-white position-relative bg-transparent border-0"
                  onMouseEnter={() => setIsUserDropdownOpen(true)}
                  onMouseLeave={() => setIsUserDropdownOpen(false)}
                >
                  <i className="bi bi-person-circle text-white me-2" />
                  {user.name}
                  {isUserDropdownOpen && (
                    <div
                      className="position-absolute bg-white py-3 d-flex flex-column rounded-4"
                      style={{ top: 48, right: 0, width: 260 }}
                    >
                      <Link to="user" className="px-6 py-4 text-start hover">
                        我的帳戶
                      </Link>
                      <button
                        className="px-6 py-4 bg-transparent border-0 text-start hover"
                        onClick={() => {
                          localStorage.removeItem("token");
                          navigate("login");
                        }}
                      >
                        登出
                      </button>
                    </div>
                  )}
                </button>
              ) : (
                <Link className="px-4 py-4 text-white" to="login">
                  會員登入
                </Link>
              )}

              <Link
                className="px-8 py-4 text-white bg-primary rounded-2"
                to="room"
              >
                立即訂房
              </Link>
            </div>
            <button className="text-white d-lg-none bg-transparent border-0">
              <i
                className="bi bi-list"
                onClick={() => setIsMobileMenuOpen(true)}
              />
            </button>
          </>
        )}
      </div>
      <div
        className="position-fixed d-flex d-lg-none bg-black top-0 bottom-0 start-0 end-0 flex-column justify-content-center px-5"
        style={{
          zIndex: 3,
          visibility: isMobileMenuOpen ? "visible" : "hidden",
        }}
      >
        <Link
          className="px-4 py-4 text-white text-center"
          to="/"
          style={{
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen
              ? "translateY(0px)"
              : "translateY(-10px)",
            transition: isMobileMenuOpen ? "all 0.8s" : "none",
          }}
        >
          客房旅宿
        </Link>
        <Link
          className="px-4 py-4 text-white text-center"
          to={user ? "user" : "login"}
          style={{
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen
              ? "translateY(0px)"
              : "translateY(-10px)",
            transition: isMobileMenuOpen ? "all 0.8s 0.1s" : "none",
          }}
        >
          {user ? "我的帳戶" : "會員登入"}
        </Link>
        <Link
          className="px-8 py-4 text-white text-center bg-primary rounded-2"
          to="room"
          style={{
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen
              ? "translateY(0px)"
              : "translateY(-10px)",
            transition: isMobileMenuOpen ? "all 0.8s 0.2s" : "none",
          }}
        >
          立即訂房
        </Link>
        <button
          className="bg-transparent border-0 text-white position-absolute"
          style={{ top: 24, right: 12 }}
        >
          <i
            className="bi bi-x-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </button>
      </div>
    </>
  );
}

export default Header;
