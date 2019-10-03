import React,{ Component } from 'react';
import { Link } from 'react-router-dom'
import BottomBar from './base/BottomBar'
import Footer from './base/Footer'

import Header from './base/Header'
import HomeMenu from './menu/HomeMenu'
import Home from './home/Home'
import ADet from './a_det/ADet';
import Search from './search/Search';
import HomeMenuNew from './menu/HomeMenuNew';
import ShowTheLocation from './base/ShowTheLocation';
import HomeCoummunity from './community/HomeCoummunity';
import BottomSheet from './BottomSheet';


import { HashRouter as Router, Route , Switch } from 'react-router-dom'

import './App.css';
import PropTypes from "prop-types"
import { withRouter } from "react-router"





class App extends Component {


  // static propTypes = {
  //   match: PropTypes.object.isRequired,
  //   location: PropTypes.object.isRequired,
  //   history: PropTypes.object.isRequired
  // }


  




  constructor(props){
    super(props)

    this.state = {
      isMenuOpen : false,
      isSearchOpen : false,
      position: 0,
      isUp : 0,
      location: '/'
    }

      this.handleMenuC = this.handleMenuC.bind(this)
      this.handleScroll = this.handleScroll.bind(this)
      this.searchClick = this.searchClick.bind(this)
      this.getLocation = this.getLocation.bind(this)
      this._showFooter = this._showFooter.bind(this)
      
      
      
    
  }


  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    let { position, isUp} = this.state


    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > position){
        // downscroll code
        // 2
        isUp = 2
    } else {
        // upscroll code
        // 1
        isUp = 1
    }
    position = st <= 0 ? 0 : st;
    
    this.setState({ position, isUp });
  }


  handleMenuC(){
    let { isMenuOpen } = this.state

    this.setState({
      isMenuOpen : !isMenuOpen
    })
  }


  getLocation(data){
    this.setState({
      location : data
    })
  }


  searchClick(){
    let { isSearchOpen } = this.state

    this.setState({
      isSearchOpen : !isSearchOpen
    })
  }

  _showFooter(){
    let {location} = this.state
    switch(location){
      case '/Search':
      case '/HomeMenu':
      return (
        <div></div>
      )
      default:
        return (<Footer/>)
    }
    

  }


 


  render() {  

    // const { match, location, history } = this.props

    const { isMenuOpen, isUp ,isSearchOpen } = this.state


    const path = this.props.routes

    console.log('path :', path);

    return (
      <Router>
        

        <div className="w-full relative h-screen w-12 absolute">


          


            <div>
              <Route exact path="/" component={Home}/>
              <Route exact path="/ADet" component={ADet}/>
              <Route exact path="/Search" component={Search}/>
              <Route exact path="/HomeMenuNew" component={HomeMenuNew}/>
              <Route exact path="/HomeCoummunity" component={HomeCoummunity}/>
              <Route exact path="/BottomSheet" component={BottomSheet}/>
              <Route exact path="/HomeMenu" component={HomeMenu}/>
              <Route exact path="/HomeMenuNew" component={HomeMenuNew}/>
            </div>


            

            
            
            
            


            {/* <ShowTheLocation/> */}

            
            

            



            
            
            {/* {this._showFooter()} */}
            
            


            
              
          
          
        </div>

        
        
      
      </Router>
      // "build": "npm run build:css && react-scripts build",

    )
  }
}




export default App;
