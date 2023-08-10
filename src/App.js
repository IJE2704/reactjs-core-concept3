import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <LoadComments></LoadComments>
    </div>
  );
}

function Counter ()
{
  const [count, setCount]  = useState(0);
  const increaseCount = ()=> setCount(count + 1);
  const decraseCount = () => setCount(count-1);
  return (
    <div>
      <h1>Counter : {count}</h1>
    <button onClick={increaseCount}>Increase</button>
    <button onClick={decraseCount}>Decrase</button>
    </div>
  );
}
function Comments(props){
  return(
    <div className='comment'>
      <h1>Id : {props.id}</h1>
      <h1>Name : {props.name}</h1>
      <p>Email : {props.email}</p>
      <p>{props.body}</p>
    </div>
  )
}

function LoadComments()
{
  const [comments, setComment] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => setComment(data))
  },[])
  return (
    <div>
      <h3>{comments.length}</h3>
      {
        comments.map(comment => <Comments id={comment.id} name={comment.name} email={comment.email} body={comment.body}></Comments>)
      }
    </div>
  )

}
export default App;
