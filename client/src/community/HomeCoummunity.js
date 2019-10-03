import React, { Component } from 'react'

import clap from '../images/clap.png';
import ans from '../images/ans_icon.png';
import btnsave from '../images/btn_save_holo.png';
import Header from '../base/Header'
import Footer from '../base/Footer'
import BottomBar from '../base/BottomBar'


export default class HomeCoummunity extends Component {
  render() {
    let list = []




    for(let i= 0 ; i < 100 ; i++){

      list.push(<div class="cursor-pointer max-w-md rounded shadow-lg mx-4 bg-white inline-block align-top my-2 flex flex-col rounded-community">
               
      <div class="py-4 text-blue-900">
        
        <div class="text-xl mb-2 px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, quam?</div>
        <div className="bg-gray-200 app-line-height w-full">
        </div>

        


      </div>


      <div className="flex max-w-5xl w-full self-center home-menu-login-text mb-6 justify-center" >
             <div className="w-1/3 text-black flex-1 text-center ">
               <div className="h-10 w-full flex justify-center px-8 items-center">
                 <img src={clap} alt="sadas" className="h-4 w-4 mt-1"/>
                 <p className="dark-blue-text text-xs ml-2">Clap</p>
               </div>
             </div>
             <div className="w-1/3 text-black flex-1 text-center dark-blue rounded-full">
               <div className="h-10 w-full flex justify-center px-8 items-center">
                 <img src={ans} alt="sadas" className="h-4 w-4 mt-1"/>
                 <p className="text-xs text-white ml-2">Answer</p>
               </div>
             </div>

             <div className="w-1/3 text-black flex-1 text-center ">
               <div className="h-10 w-full flex justify-center px-8 items-center">
                 <img src={btnsave} alt="sadas" className="h-4 w-4 mt-1"/>
                 <p className="dark-blue-text text-xs ml-2 mt-1">Save</p>
               </div>
             </div>
             
         </div>
   </div>
)
    }


    return (
      <div className="">
        <div className="flex justify-center flex-col items-center pt-12 mb-24">
           {list}
  
        </div>
  
  
        <Header/>
  
        <BottomBar handleMenuC={this.handleMenuC} searchClick={this.searchClick}/>  
  
  
        <Footer/>
      </div>
    )
  }
}
