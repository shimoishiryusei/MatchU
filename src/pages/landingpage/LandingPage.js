import React from 'react'
import './LandingPage.css'
import Main from '../../assets/mainvisual.jpg'
import SURVEY from '../../assets/survey.svg'

export default function LandingPage() {
  return (
    <div className='land-container'>
      <section className='mainvisual'>  
        <img src={Main} alt="テキストテキストテキスト" />
        <h2>MatchさせるWeb App</h2>
      </section>
      <section className="about">
        <h2>ABOUT</h2>
        <p>
          ゼミをオンラインで作成・運用したい！<br />
          そんな願いからできたWebアプリケーションです．<br />
          同じ目標の仲間を探し，ともに高め合っていきましょう！<br />
        </p>
      </section>
      <section className='survey'>
        <h2>SURVEY</h2>
        <img src={SURVEY} alt="texttexttext" />
      </section>
      <section className='footer'>
        <p>@matchU</p>
      </section>
    </div>
  )
}