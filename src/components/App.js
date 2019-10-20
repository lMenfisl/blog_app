import React,{ useState } from 'react';
//import Footer from './Footer';
//import Header from './Header';

const names = ['vasa', 'pitya', 'alex', 'an'];

const dateStart = new Date();

const render = names.reduce((ak, name, i) => {
  if (name !== 'pitya') {
    ak.push(<p key={i}>{name}</p>)
    return ak;
  }
  return ak;
}, []);
const dateResult = new Date() - dateStart;
console.log(dateResult);

function App() {
  const [res, setRes]= useState('Hello')
  const show = () => {
    setRes(res + ' world');
  }
  return (
    <div id="app">
      <h2 onClick={show}>Hello app</h2>
      {res}
    </div>
  );
}

export default App;
