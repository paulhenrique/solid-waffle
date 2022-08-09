import { Link } from "react-router-dom";
import { routesPath } from "../../router/ROUTES";

const Home = () => {
  return (
    <div>
      Homeeee
      <Link to={routesPath.settings}>Settings</Link>
    </div>
  );
};

export default Home;
