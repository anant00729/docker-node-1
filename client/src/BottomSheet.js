import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './BottomSheet.css';

export default class BottomSheet extends Component {
  render() {
    return (
      <div>
        <header>
        <div className="wrap">
            <Link 
            className="bottom-sheet"
            to="/BottomSheet/#bottom-sheet"
            href="/BottomSheet/#bottom-sheet"><img src="//placehold.it/640x320?text=Share%20This" alt="asdas"/>AKJSHD</Link>
        </div>
        </header>
    <main>
        <div className="wrap">
            <p>Unfortunately, this won't work in IE8 or below.</p>
        </div>
    </main>
    <footer>
        <div className="wrap">
        </div>
    </footer>
    <div id="bottom-sheet" className="overlay">
        <aside className="social" tabindex="-1" role="dialog" aria-labelledby="modal-label" aria-hidden="true">
                    <ul className="menu">
                                <li><a className="facebook" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//codepen.io/pixelasticity/details/ZQGyYP" target="_blank" title="Share on Facebook"><span className="mdi mdi-facebook-box" aria-hidden="true" aria-role="presentation"></span> Facebook</a></li>
                                <li><a className="twitter" href="https://twitter.com/home?status=http%3A//codepen.io/pixelasticity/details/ZQGyYP" target="_blank" title="Tweet this page"><span className="mdi mdi-twitter" aria-hidden="true" aria-role="presentation"></span> Twitter</a></li>
                                <li><a className="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//twitter.com/home?status=http%253A//codepen.io/pixelasticity/details/ZQGyYP&title=Modal%20Bottom%20Sheet%20in%20pure%20CSS%20%7C%20Material%20Design&summary=&source=codepen" target="_blank" title="Share on LinkedIn"><span className="mdi mdi-linkedin" aria-hidden="true" aria-role="presentation"></span>LinkedIn</a></li>
                                <li><a className="reddit" href="//www.reddit.com/submit?url=http%3A%2F%2Fcodepen.io%2Fpixelasticity%2Fdetails%2FZQGyYP" target="_blank" title="Share on Reddit"><span className="mdi mdi-reddit" aria-hidden="true" aria-role="presentation"></span> Reddit</a></li>
                                <li><a className="whatsapp" href="whatsapp://send?text=codepen.io%2Fpixelasticity%2Fdetails%2FZQGyYP" data-action="share/whatsapp/share" target="_blank" title="Send to WhatsApp"><span className="mdi mdi-whatsapp" aria-hidden="true" aria-role="presentation"></span> WhatsApp</a></li>
                                <li><a className="email" href="mailto:?subject=I wanted you to see this site&amp;body=Check out this pen: https://codepen.io/pixelasticity/details/ZQGyYP"><span className="mdi mdi-email" aria-hidden="true" aria-role="presentation"></span> E-mail</a></li>
                    </ul>
        </aside>
    <a href="#close" className="btn-close" aria-hidden="true"><span className="mdi mdi-close"></span><span className="sr-only">Close</span></a>
    
      
      </div>
      </div>
    )
  }
}
