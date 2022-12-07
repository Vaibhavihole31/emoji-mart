import React, { useState } from 'react'
import './App.css'
import Love from './img/love.png';
import Crying from './img/crying.png';
import Lol from './img/lol.png';
import Heart from './img/heart.png';
import Mealting from './img/melting.png';

function App() {

  const [emoji, setEmoji] = useState(<img src={Heart} />)
  const [emojiColor, setEmojiColor] = useState("white")
  const [emojiDeg, setEmojiDeg] = useState(0);

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='app-title-contanier text-center mt-5'>
            <h2 >🥳 Emoji Mart </h2>
          </div>

          <div className='col-md-6 emoji-display-container'>

            <div className='main-emjio-contaner' style={{ backgroundColor: emojiColor, transform: `rotate(${emojiDeg*3.6}deg)`}}>
              <div className='main-emoji'>
                {emoji}
              </div>
            </div>

            <div className='emoji-contanier'>
              <div className='emoji-item' onClick={() => { setEmoji(<img src={Heart} />) }}><img className='item' src={Heart} /></div>
              <div className='emoji-item' onClick={() => { setEmoji(<img src={Crying} />) }}><img className='item' src={Crying} /></div>
              <div className='emoji-item' onClick={() => { setEmoji(<img src={Lol} />) }}><img className='item' src={Lol} /></div>
              <div className='emoji-item' onClick={() => { setEmoji(<img src={Mealting} />) }}><img className='item' src={Mealting} /></div>
              <div className='emoji-item' onClick={() => { setEmoji(<img src={Love} />) }}><img className='item' src={Love} /></div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='colors-container'>
              <p className='text-center'>
                <button type="button" class="btn-yellow" onClick={()=>{setEmojiColor("yellow")}}><b>1</b></button>
                <button type="button" class="btn-blue" onClick={()=>{setEmojiColor("aqua")}}><b>2</b></button>
                <button type="button" class="btn-green" onClick={()=>{setEmojiColor("green")}}><b>3</b></button>
                <button type="button" class="btn-purpule" onClick={()=>{setEmojiColor("purple")}}><b>4</b></button>
                <button type="button" class="btn-black" onClick={()=>{setEmojiColor("black")}}><b>5</b></button>
              </p>
            </div>

            <div className='size-container'>
            <input type="range" className='size-slider' onChange={(e)=>{setEmojiDeg(e.target.value)}}/>
          </div>
          </div>
          </div>
        </div>
      </>
      )
}

      export default App