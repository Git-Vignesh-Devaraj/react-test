import React from 'react';
import './style.css';
let informations = [
  {
    text: '**This text should be in bold',
  },
  {
    text: 'Normal Text',
  },
];
const data = informations.map((item) => {
  if (item.text.includes('**')) {
    return <b>{item.text.replace('**', '')}</b>;
  } else {
    return item.text;
  }
});

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {data}
    </div>
  );
}
