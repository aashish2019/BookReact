import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  SelfHelp: [
    { name: "Atomic Habits" },
    { name: "How to win friends and influence people" }
  ],

  finance: [
    {
      name: "The Phycology of Money"
    },
    {
      name: "Rich Dad, Poor Dad"
    }
  ],
  fiction: [
    {
      name: "THe Alcheimist"
    },
    {
      name: "Dune"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("fiction");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📒 Good Books </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        These are the books I love to read.{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              color: "white",
              cursor: "pointer",
              background: "#3A8DF4",
              padding: "0.7rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
