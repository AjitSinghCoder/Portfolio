import React from "react";

function Pre({ load }) {
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      {load && <div className="loader-ring" />}
    </div>
  );
}

export default Pre;
