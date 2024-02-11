import React, { useState } from "react";
import Header from "./Header";
import BodySection1 from "./BodySection1";

export default function BookList() {
  return (
    <div>
      {/* the whole page */}
      <div className=" px-32">
        {/* the header */}
        <Header></Header>
        {/* the body section */}
        <div>
          {/* the body sections  */}
          <BodySection1></BodySection1>
        </div>
      </div>
    </div>
  );
}
