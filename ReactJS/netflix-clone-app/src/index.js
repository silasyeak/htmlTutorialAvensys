import React from 'react'
import { render } from 'react-dom'
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import './index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Movies title="Action Movies" genreNo={28}/>
      <Movies title="Comedy Movies" genreNo={35}/>
      <Movies title="Anime" genreNo={16}/>
      <Movies title="Horror Movies" genreNo={27}/>
      <Movies title="Romance Movies" genreNo={10749}/>
    </div>
  )
}
/* MOvie genres from
action = 28
comedy = 35
anime = 16
horror = 27
romance = 10749
*/

render(<App />, document.getElementById('root'));
