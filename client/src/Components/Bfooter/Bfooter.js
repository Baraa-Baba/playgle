import React from "react";
import { Link } from "react-router-dom";
import "./Bfooter.scss";

const Bfooter = () => (
  <div className="Bfooter">
    <p>&copy;Frndsmeet 2022 | <Link to="/Terms">
      Terms of Service
    </Link>  | <Link to="/Privacy">Privacy Policy</Link> | <Link to="/Rewards">Rewards</Link> | <Link to="/credits">credits</Link>

    </p>

  </div>
);

export default Bfooter;