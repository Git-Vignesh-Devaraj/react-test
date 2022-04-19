import React from 'react'
export default function Home() {
  let userName = "vikky";
  function printUserName() {
    return <h4>{userName}</h4>
  }
  let john = { name: "John" };

let array = [ john ];

// john = null;
john.name="vikky";
john = null;
console.log(array[0])
  return printUserName();
}