import ProgressBar from "../progress-bar/progress-bar.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";

const Layout = ({ children }) => {
  return (
    <div>
      <ProgressBar />
      <Header>Restaurants</Header>
      {children}
      <Footer>footer</Footer>
    </div>
  );
};

export default Layout;
