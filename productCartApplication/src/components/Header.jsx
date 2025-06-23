import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png"
const Header = ({ onNavigate }) => {
  const cartNumber = useSelector((state) => state.cart)
  const quantities = cartNumber.map((item) => item.quantity);
  
  return (
    <>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate("home");
            }}
          >
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <a
              href="#home"
              className="navHome"
              id="lws-home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("home");
              }}
            >
              Home
            </a>
            <a
              href="#cart"
              className="navCart"
              id="lws-cart"
              onClick={(e) => {
                e.preventDefault();
                onNavigate("cart");
              }}
            >
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{cartNumber.length > 0 ? quantities : `0`}</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
