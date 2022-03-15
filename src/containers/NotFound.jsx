import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/components/NotFound.scss'

const NotFound = () => {
  return (
    <div style={{height:100}}>
        <div className="box">
            <div className="box__ghost">
                <div className="symbol"></div>
                <div className="symbol"></div>
                <div className="symbol"></div>
                <div className="symbol"></div>
                <div className="symbol"></div>
                <div className="symbol"></div>
                
                <div className="box__ghost-container">
                <div className="box__ghost-eyes">
                    <div className="box__eye-left"></div>
                    <div className="box__eye-right"></div>
                </div>
                <div className="box__ghost-bottom">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                </div>
                <div className="box__ghost-shadow"></div>
            </div>
            
            <div className="box__description">
                <div className="box__description-container">
                <div className="box__description-title">Whoops!</div>
                <div className="box__description-text">It seems like we couldn't find the page you were looking for</div>
                </div>
                <Link to="/" class="box__button">Go back</Link>
                
            </div>
        </div>
    </div>
  )
}

export default NotFound