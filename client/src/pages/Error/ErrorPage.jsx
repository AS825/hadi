import { useRouteError } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./styles/error.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="errorPage test">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="link-back">
      
        <NavLink to="/" className="site-title">
         Sukana
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
