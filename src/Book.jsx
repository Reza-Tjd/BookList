import React, { useState } from "react";

export default function Book({ bookInfo }) {
  // const { title, author, year } = bookInfo;
  return (
    <div className="flex justify-around  child:h-8 mt-3 border-b">
      <p>{bookInfo.title}</p>
      <p>{bookInfo.author}</p>
      <p>{bookInfo.year}</p>
    </div>
  );
}
