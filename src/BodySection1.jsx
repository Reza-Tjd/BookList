import React, { useState, useEffect } from "react";
import Book from "./Book";

export default function BodySection1() {
  const [bookData, setBookData] = useState([]);

  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookYear, setBookYear] = useState("");
  const titleHandler = (event) => {
    setBookTitle(event.target.value);
  };
  const yearHandler = (event) => {
    setBookYear(event.target.value);
  };

  const btnHandler = () => {
    if (bookTitle && bookAuthor && bookYear) {
      const level = {
        id: bookData.length + 1,
        title: bookTitle,
        author: bookAuthor,
        year: bookYear,
      };
      setBookData([...bookData, level]);
      setBookTitle("");
      setBookAuthor("");
      setBookYear("");
    }
  };
  useEffect(() => {
    console.log(bookData);
  }, [bookData]);

  return (
    <div>
      <div className="space-y-2">
        <h4 className="text-zinc-700">Title</h4>
        <input
          type="text"
          value={bookTitle}
          className=" w-full h-9 bg-slate-200 rounded-sm pl-2"
          onChange={titleHandler}
        />
        <h4 className="text-zinc-700">Author</h4>
        <input
          type="text"
          value={bookAuthor}
          className="h-9 rounded-sm bg-slate-200 w-full pl-2"
          onChange={(event) => {
            setBookAuthor(event.target.value);
          }}
        />
        <h4 className="text-zinc-700">Year</h4>
        <input
          type="text"
          value={bookYear}
          className="h-9 rounded-sm bg-slate-200 w-full pl-2"
          onChange={yearHandler}
        />
        <button
          className="w-full bg-orange-400 rounded-sm text-white h-9 md:text-lg hover:bg-orange-500 transition-colors"
          onClick={btnHandler}
        >
          add book
        </button>
      </div>

      <div className="flex justify-around items-center border-y border-gray-300 mt-7 h-10 text-zinc-900">
        <h4>Title</h4>
        <h4>Author</h4>
        <h4>Year</h4>
      </div>
      {bookData.map((book) => {
        return (
          <div key={book.id}>
            <Book bookInfo={book}></Book>
          </div>
        );
      })}
    </div>
  );
}
