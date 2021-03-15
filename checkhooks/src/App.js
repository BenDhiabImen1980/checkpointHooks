// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import MovieList from './MovieList';

function App() {
  const [film, setFilm] = useState([{
    title:"madonna",
    poster:"movie1.jpg",
    descrip:"hfgyrthj kkfjhjjbg kjfhjhg",
    rate:5
  },
  {
    title:"marocco",
    poster:"movie2.jpg",
    descrip:"xbnvnxcblkh hbf hbdfh",
    rate:3
  }


])
//  const ToAdd=(e)=>{
//     console.log(e.target.title)
//     setFilm ({...film,[e.target.name]:e.target.value})
//   } 
  return (
    <div className="App">
      <MovieList films={film}/>
      {/* <div className="divinput">
        <input name="title" placeholder="title"/>
        <input name="poster" placeholder="poster"/>
        <input name="descrip" placeholder="description"/>
        <input name="rate" placeholder="rate"/>
        <button onClick={ToAdd}>Add</button>
      </div> */}
    </div>
  );
}

export default App;
