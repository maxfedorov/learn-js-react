import Restaurants from "../restaurants/restaurants.jsx";
import Layout from "../layout/layout.jsx";
import "./reset.css";
import { ThemeContextProvider } from "../theme-context/theme-context.jsx";
import { AuthContextProvider } from "../auth-context/auth-context.jsx";

const App = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Layout>
          <Restaurants />
        </Layout>
      </ThemeContextProvider>
    </AuthContextProvider>
  );
};

export default App;
