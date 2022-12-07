import React, {useState} from 'react'
import './App.css'
import Love from './img/love.png';
import Crying from './img/crying.png';
import Lol from './img/lol.png';
import Heart from './img/heart.png';
import Mealting from './img/melting.png';

function App() {

    const [emoji, setEmoji] = useState(<img src={Heart}/>)

  return (
    <>
    <div className='container'>
     <div className='app-title-contanier'>
     <h1 className='app-title'>🥳 Emoji Mart </h1>
     </div>

     <div className='main-emjio-contaner'>
      <div className='main-emoji'>
            <h3 className='emoji'>
                {emoji}
            </h3>
      </div>
     </div>

        <div className='emoji-contanier'>
          <div className='emoji-item' onClick={()=>{setEmoji(<img src={Heart}/>)}}><img className='item' src={Heart}/></div>
          <div className='emoji-item' onClick={()=>{setEmoji(<img src={Crying}/>)}}><img className='item' src={Crying}/></div>
          <div className='emoji-item' onClick={()=>{setEmoji(<img src={Lol}/>)}}><img className='item' src={Lol}/></div>
          <div className='emoji-item' onClick={()=>{setEmoji(<img src={Mealting}/>)}}><img className='item' src={Mealting}/></div>
          <div className='emoji-item' onClick={()=>{setEmoji(<img src={Love}/>)}}><img className='item' src={Love}/></div>
        </div>

    </div>
    </>
  )
}

export default App