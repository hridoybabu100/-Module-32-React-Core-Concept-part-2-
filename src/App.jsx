
import './App.css';
import Count from './count';
import Count1 from '../demoCount'
import Batmans from './batsman';
import Users from './users';
import Friends from './friends';
import { Suspense } from 'react';

// API fetch
const commentdata = fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())

// API fetch

const friendsData = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res;
}


    



function App() {

  const friendsmassege = friendsData();

  
  // event handaler in react

  function handaler (){
    alert("I am a cclicked")
  }

    // click korle number add hbe.
  const addNumber = (num) => {
    const newNumber = num + 5;
    alert(newNumber)
  }

  return (
    <>

     <h1> Total Set Count </h1>

    <Count1></Count1>

    {/* <Suspense fallback={<h2>Loading for await.....</h2>}>
      <Users fetch={commentdata}></Users>
    </Suspense> */}

    <Suspense fallback={<h2> Friends Are Comming Soon....</h2>}>
      <Friends friendsmassege={friendsmassege}></Friends>
    </Suspense>



      <h3>React + Vite Button</h3>
     <div>
        <button onClick={handaler}>click me</button>
     </div>
     <div>
       {/* eita amra kokhnoi use korbonah  */}
        <button onClick={function handaler1(){
          alert("I am a click -1")
        }}>click me - 1</button>
     </div>
     
     <div>
       {/* eita amra sob theke besgi use korbo. so  most important in this  */}
        <button onClick={ () => alert("I am clicked - 2") }>click me - 2</button>
     </div>

     <div>
       {/* eita amra kom use korbo. tbe important. button e click korle jate number add hoi  */}
        <button onClick={ () => addNumber(10) }>click me - 3</button>
     </div>

     <h1> Set Count </h1>
     <Count></Count>

     <Batmans></Batmans>
     
    </>
  )
}

export default App
