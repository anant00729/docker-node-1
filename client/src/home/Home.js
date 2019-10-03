import React, {
  Component
} from 'react'

//import vid from '../vid.mov';
import vid from '../images/home_play.mov';
import { Link } from 'react-router-dom'

import classnames from 'classnames'
import HomeVM from './HomeVM';
import Header from '../base/Header'
import Footer from '../base/Footer'
import BottomBar from '../base/BottomBar'




 class Home extends Component {


  constructor(props){
    super(props)

    this.state = {
      times : 4,
      img1 : "https://instagram.fbom16-1.fna.fbcdn.net/vp/b92edc51234d678dec853272a2f7690f/5DFF3F3F/t51.2885-15/sh0.08/e35/s640x640/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20640w,https://instagram.fbom16-1.fna.fbcdn.net/vp/8b64c0c62d2decb495ec8c9e317d85e7/5E195E3F/t51.2885-15/sh0.08/e35/s750x750/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%20750w,https://instagram.fbom16-1.fna.fbcdn.net/vp/ffdc3ec05564d2fc38e14178053cda26/5E013DDA/t51.2885-15/e35/66489620_341423576747332_5179676364416259601_n.jpg?_nc_ht=instagram.fbom16-1.fna.fbcdn.net&_nc_cat=104%201080w",
      mHVM : new HomeVM()
      
    }
    this._onItemClick = this._onItemClick.bind(this)
    //this.playV = this.playV.bind(this)
 
  }


  _onItemClick(i){
    
    //this.props.history.push('/ADet')s
    this.props.history.push('/ADet')
    
  }


  componentDidMount(){
    this.refs.vidRef.play();
  }


  // playV(){
  //   this.refs.vidRef.play();
  // }
  

  render() {
    const { times, img1 , mHVM } = this.state

    const ts = mHVM._getTopStories(times , img1, this._onItemClick)
    const i_t = mHVM._getInterestedTopics()
    const i_p = mHVM._getIntaPosts()
    
    const m_t = mHVM._getMoreTopics()
    const s_m = mHVM._getSideMenuItem()

    

    return ( <div>

              


                <div className="app-main-bg w-full relative pt-12 mb-24">
                  <video ref="vidRef" loop src={vid} type="video/mp4" 
                  height="100"
                  autoplay
                  loop
                  className="my-0 mx-auto w-64 vid-height"/>
                  {/* <div className="absolute bg-green-500 bottom-0 app-trans">
                    <p className=>ajskdsahk</p>
                  </div> */}
                </div>
                <div className="md:px-12 px-4 md:px-0">
                  
                  <div class="flex my-4 ">
                    <div className="hidden xl:text-sm xl:block xl:w-1/6 xl:px-6 pt-2">
                      <h5 class="lg:tracking-wide lg:text-2xl">On this page</h5>
                        <ul>
                         {s_m}
                        </ul>
                    </div>
                    <div class="mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-5/6">
                    <p className="md:max-w-full max-w-md w-full flex justify-between py-2 text-2xl">Top Topics</p>
                    <div className="flex flex-wrap md:hidden">
                      {ts[0]}
                    </div>
  
                    <div className="md:flex md:flex-wrap hidden justify-start">
                      {ts[1]}
                    </div>

                  <section>
                    <div className="mt-8 text-blue-900 mx-auto">
                      <div className="rounded shadow-md bg-gray-100 w-full min-w-ful py-4 px-2">    
                        <h1 className="text-xl">We invest in Emotions which are meant to be outpoured</h1>
                        <p className=" mt-4">Never Miss Our Story</p>
                        <p className="text-sm ">Sign up for Quonquer weekly digest and get the best mental health advice from us.</p>
                        <div className="text-center shadow">
                          <input className="bg-white focus:outline-none focus:shadow-outline py-2 px-4 
                            mt-2 block rounded w-full appearance-none leading-normal" type="email"/>
                          </div>
                          <Link href="" class="
                          
                            mt-4
                            inline-block bg-indigo-500 
                            text-white px-2 py-2 uppercase tracking-wider 
                            text-xs font-semibold rounded-lg shadow-md 
                            max-w-lg
                            dark-blue
                            ">Sign Up
                            </Link>  
                      </div>
                    </div>
                  </section>

                    </div>
                    
                  </div>




                
                  


                  <p className="md:max-w-full max-w-md w-full flex justify-between py-2 text-2xl">Topics For You</p>
                    <div className="">
                    <div className="rounded shadow-md bg-gray-100 w-full min-w-full hor-list-nobar overflow-x-auto whitespace-no-wrap py-3 px-2">    
                      {i_t}
                    </div>
                  </div>


                 
                  
  

                  <p className="md:max-w-full max-w-md w-full flex justify-between py-2 text-2xl">More Topics</p>
                  <div className="w-full min-w-full hor-list pb-8 overflow-x-auto whitespace-no-wrap">    
                    {m_t}
                  </div>

                  <p className="md:max-w-full max-w-md w-full flex justify-between py-2 text-xl mt-6">Follow us on Instagram for Quonquer's daily digest</p>
                    
                    <div className="rounded shadow-md bg-gray-100 w-full min-w-full hor-list-nobar py-3 pl-3">    
                      {i_p}
                    </div>

                  </div>


              


                  <Header/>

                  <BottomBar handleMenuC={this.handleMenuC} searchClick={this.searchClick}/>  
              

                  <Footer/>
                  


          </div>
    )
  }
}


export default Home