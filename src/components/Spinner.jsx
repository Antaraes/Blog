import React from "react";
import { Spinner as BootstrapSpinner } from "react-bootstrap";

const Spinner = ({ sm, md, lg, light }) => {
  return (
    <div role="status">
      <BootstrapSpinner
        animation="border"
        variant={light ? "light" : "dark"}
        className={`mr-2 ${sm ? "spinner-sm" : md ? "spinner-md" : lg ? "spinner-lg" : ""}`}
      />
    </div>
  );
};

export default Spinner;
