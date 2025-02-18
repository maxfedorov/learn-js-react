import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/restaurants">Restaurants</Link>
    </div>
  );
};
