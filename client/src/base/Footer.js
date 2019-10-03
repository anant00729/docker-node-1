import React, {
  Component
} from 'react'


import app_img from '../app_img.jpg';
import fb from '../images/facebook.png';
import insta from '../images/instagram.png';
import tw from '../images/twitter.png';
import li from '../images/linkedin.png';
import wa from '../images/whatsapp.png';

class Footer extends Component {
  render() {
    return ( 
    <div className="dark-blue w-full min:h-64 pb-24 pt-8">



      <div className="flex justify-center">
        <div className="w-8 h-8 mr-2">
          <img src={app_img} className="rounded-full shadow-md"alt="asdasd"/>
        </div>

        <p className="text-center text-xl text-white relative app-font">QUONQUER
        <span className="copy-right-text absolute top-0">©</span>
        &nbsp;&nbsp;&nbsp;&nbsp;INC.</p>      
      </div>
      

      <div className="flex px-8 mt-4 max-w-2xl m-auto" >
        <div className="w-1/2 text-white">
          <ul>
            <li className="w-24 m-auto">Subscribe</li>
            <li className="w-24 m-auto">Bookmarks</li>
            <li className="w-24 m-auto">Topic</li>
            
          </ul>
        </div>
        <div className="w-1/2 text-white">
          <ul className="mx-auto">
          <li className="w-24 m-auto">Community</li>
          <li className="w-24 m-auto">XYZ</li>
          <li className="w-24 m-auto">ABC</li>
          </ul>
        </div>
      </div>

      <div className="flex px-8 mt-6 max-w-2xl m-auto justify-center mb-10" >
        <div className="w-10 h-10 mr-4">
          <img src={insta} className="rounded-full shadow-md"alt="asdasd"/>
        </div>
        <div className="w-10 h-10 mr-4">
          <img src={fb} className="rounded-full shadow-md"alt="asdasd"/>
        </div>
        <div className="w-10 h-10 mr-4">
          <img src={tw} className="rounded-full shadow-md"alt="asdasd"/>
        </div>
        <div className="w-10 h-10 mr-4">
          <img src={li} className="rounded-full shadow-md"alt="asdasd"/>
        </div>

        {/* <div className="w-10 h-10 mr-4">
          <img src={wa} className="rounded-full shadow-md"alt="asdasd"/>
        </div> */}


        
      </div>



      <div className="flex mt-4 max-w-2xl m-auto justify-center" >
        <div className="md:w-1/4 text-white text-sm mr-4 w-full text-center">
          <p className="ml-10">About Us</p>
        </div>
        <div className="md:w-1/4 text-white text-sm mr-4 w-full text-center">
          <p className="ml-4">Vision</p>
        </div>
        <div className="md:w-1/4 text-white text-sm mr-4 w-full text-center">
          <p>Contact Us</p>
        </div>
        <div className="md:w-1/4 text-white text-sm mr-4 w-full text-center">
          <p>Privacy Policy</p>
        </div>
      </div>



      
     

    </div>
    )
  }
}


export default Footer