import React from "react";
import { useState } from "react";

function Bgchanger() {
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-full h-screen duration-200 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0  px-1">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor('green')}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor('yellow')}

          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor('blue')}

          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor('orange')}

          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor('pink')}

          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bgchanger;
