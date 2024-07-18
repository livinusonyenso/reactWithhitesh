import React from "react";

function Card({ username = "emty" }) {
  return (
    <>
      <div>
        <img src="https://plus.unsplash.com/premium_photo-1720373139744-1df9bbd233c3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <h1 className="text-2xl bg-green-500 p-3 rounded">{username}</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex alias
          doloremque, odio ad nostrum repellat sapiente quam officiis nesciunt.
          Tenetur mollitia magnam necessitatibus libero vel doloremque
          voluptatem ratione inventore sint.
        </p>
      </div>
    </>
  );
}

export default Card;
