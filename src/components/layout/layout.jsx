import ProgressBar from "../progress-bar/progress-bar.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import { CartContainer } from "../cart/cart-container.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <Header>Restaurants</Header>
      {children}
      <CartContainer />
      <Footer>footer</Footer>
    </div>
  );
};

export default Layout;
