import React, {
  Component
} from 'react'

import { Link } from 'react-router-dom'

import srch from '../images/back.png'

export default class Search extends Component {
  render() {
    return (
      
      <div>
        <div className="fixed overflow-hidden w-full h-screen flex flex-col overflow-y-auto bg-white">
                <div className="flex-1 flex flex-col">
                  
                  <div className="flex-col content-start justify-start mx-4 my-6">


                  <div className="flex w-full flex-wrap content-center">

                    <Link 
                    to="/"
                    >
                    <img src={srch} alt="back" className="w-6 h-6
                    mr-3
                    mt-3
                    -ml-1
                    
                    "
                    
                    />
                    </Link>
                    
                      
                      <div className="text-center shadow rounded-lg flex flex-1 h-12" >
                          <input className="bg-white focus:outline-none focus:shadow-outline py-1 px-4 
                       block w-full appearance-none leading-normal rounded  text-lg" type="email"
                      placeholder="Search Quonquer"
  
                      />
                    </div>
                  </div>


                  <div className="mx-8">
                    <p className="mt-4 text-2xl bold dark-blue-text">Explore Topics</p>
  
                    <ul className="search-text">
                      <li className="pt-2 text-lg">Mindfulness</li>
                      <li className="pt-2 text-lg">Psychology</li>
                      <li className="pt-2 text-lg">Voices</li> 
                      <li className="pt-2 text-lg">Wellness</li>  
                      <li className="pt-2 text-lg">Health</li>  
                    </ul>
                  </div>



                <div className="flex flex-col">

                <Link href="" className="
                
                inline-block border-solid border border-white
                      mx-auto
                      mt-12
                      text-white px-8 py-3 uppercase tracking-wider 
                      text-xs font-semibold rounded-lg shadow-md 
                      w-full
                      hover:bg-white hover:text-black
                      dark-blue
                      text-center
                      search-btn-text
                      max-w-sm
                      ">Join our community </Link>


                  <Link href="" className="
                  
                  inline-block border-solid border border-white
                      
                      mx-auto
                      mt-4
                      text-white px-8 py-3 uppercase tracking-wider 
                      text-xs font-semibold rounded-lg shadow-md 
                      w-full
                      hover:bg-white hover:text-black
                      dark-blue
                      text-center
                      search-btn-text
                      max-w-sm
                      ">Private Q&A</Link>




                </div>

             


  
                    
                
              </div>
  
                  {/* <div className="hover:text-blue-400 text-white content-center px-10 py-4 text-xl cursor-pointer">Home</div>
                  <div className="hover:text-blue-400 text-white content-center px-10 py-4 text-xl cursor-pointer">Search</div>
                  <div className="hover:text-blue-400 text-white content-center px-10 py-4 text-xl cursor-pointer">Community</div>
                  <div className="hover:text-blue-400 text-white content-center px-10 py-4 text-xl cursor-pointer">Profile</div> */}
  
  
              </div>
              
        </div>




        {/* <div className="fixed bottom-0 w-full flex content-center justify-end mb-4 pr-4">
          <div className="rounded-full app-logo-center-close flex items-center justify-center shadow-2xl border-2 close-boder"
                      onClick={this.handleMenuC}>
                      <Link href="" className="text-center">
                        <i className="fa fa-close text-md dark-blue-text"></i>
                      </Link>
          </div>
        </div> */}
      </div>
    )
  }
}