import Link from "next/link";
import React from "react";
const NotFound = () => {
  return (
    <React.Fragment>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
      >
        <h1 style={{ color: "white" }}>404 Not Found !</h1>
        <Link href="/">
          <button
            style={{
              fontSize: "1.2rem",
              backgroundColor: "white",
              border: "none",
              padding: "0.3em 1em",
              borderRadius: "10em",
            }}
          >
            Go Back
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
