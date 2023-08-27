import { Link, useParams } from "react-router-dom";
import "./todos.css";

function WelcomeComponent() {
  const { username } = useParams();
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Manage your todos - <Link to="/todos">here</Link>{" "}
        {/*  using this because it will not refresh all page */}
        {/* <a href="/todos">here</a> // we are not using this because it will refresh all pages */}
      </div>
    </div>
  );
}

export default WelcomeComponent;
