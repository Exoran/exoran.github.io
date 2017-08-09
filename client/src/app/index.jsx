import {render} from 'react-dom';
import React, {Component} from 'react';
import {Container,
        Nav,
        Navbar,
        MenuItem,
        Header,
        About,
        Portfolio,
        Preview,
        Link,
        Title,
        AchievementLink,
        AchievementHidden,
        NoClick,
        Footer,
        Baseline,
        SectionTitle,
        Social} from "./styles"
import {injectGlobal} from 'styled-components'
import {Background} from './particlesconf'
var FontAwesome = require('react-fontawesome')

//Global CSS
injectGlobal `
  html,body{
    height: 100%;
    width: 100%;
    margin:0;
  }
  body{
    font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;
    background-color:#006064;
  }
`

const projects=[
  {
    title:"Calculator",
    type:"FCC",
    href:"/fcc/calculator/"
  },
  {
    title:"Pomodoro",
    type:"FCC",
    href:"https://media.giphy.com/media/3oxRm9NLuGHvWCZcdO/giphy.gif"
  },
  {
    title:"Weather",
    type:"FCC",
    href:"https://media.giphy.com/media/3oxRm9NLuGHvWCZcdO/giphy.gif"
  },
  {
    title:"Twitch",
    type:"FCC",
    href:"https://media.giphy.com/media/3oxRm9NLuGHvWCZcdO/giphy.gif"
  },
  {
    title:"Tictactoe",
    type:"FCC",
    href:"https://media.giphy.com/media/3oxRm9NLuGHvWCZcdO/giphy.gif"
  },
]

const socialNetworks= [
  {
    title:"LinkedIN",
    href:"http://linkedin.com/in/robinalexandre",
    icon:"linkedin",
  },
  {
    title:"Twitter",
    href:"http://twitter.com/alexandrobin_",
    icon:"twitter",
  },
  {
    title:"GitHub",
    href:"http://github.com/exoran",
    icon:"github",
  },
  {
    title:"FreeCodeCamp",
    href:"http://freecodecamp.com/exoran",
    icon:"free-code-camp",
  },
]

class Project extends React.Component {
  render() {
    /*let href = window.location.href
    href = href.split('/')
    href.pop()
    href.push('')
    href = href.join('/')*/
    return (
      <AchievementLink href={this.props.href}>
        <Title>{this.props.title}</Title>
        <Preview scrolling="no" src={this.props.href} />
        <NoClick />
      </AchievementLink>
    )
  }
}




// MAIN APP
class Content extends Component{
  constructor(){
    super()
    this.state = {
      navbarTop: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.getOffset = this.getOffset.bind(this)
  }

  getOffset(element){
      let bounding = {
        top: document.getElementById('navbar').offsetTop,
      };
      return {
          top: bounding.top + document.body.scrollTop,
        };
    }

    handleScroll(){
       let windowsScrollTop  = window.pageYOffset
       if(windowsScrollTop >= 153){
         this.setState({
          navbarTop: true
         });
       }else{
         this.setState({
          navbarTop: false
         });}
       }



    /*componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }*/


  render(){


    return(

      <Container>
      <Background />
      <Header>
            <Baseline>Alexandre Robin</Baseline>
            <p>HR Consultant - Learning how to code</p>
            <p><FontAwesome name="map-marker"  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> Paris, France</p>
      </Header>

        {/*<Nav navbarTop={this.state.navbarTop}>
          <Navbar  ref="navbar" id="navbar">
            <MenuItem color={"#f44336"}><a href="#">About Me</a></MenuItem>
            <MenuItem color={"#03A9F4"}><a href="#">Portfolio</a></MenuItem>
            <MenuItem color={"#8BC34A"}><a href="#">Contact</a></MenuItem>
          </Navbar>
        </Nav>

        <About></About>*/}

        <SectionTitle>My Projects</SectionTitle>
        <Portfolio>
          {
            projects.map(function(a) {
              if (a.href != "https://media.giphy.com/media/3oxRm9NLuGHvWCZcdO/giphy.gif" || ""){
              return (
                <Project title={a.title}
                  href={a.href} />
              )
            } else {
              return (
                <Project title={a.title + " - WIP"}
                  href={a.href} />
              )
            }
            })
          }
        <AchievementHidden/>
        </Portfolio>

        <Footer>
          {
            socialNetworks.map(function(a) {
              if (a.href != "" && a.icon != ""){
              return (
                  <Social href={a.href}><FontAwesome name={a.icon}/></Social>
              )
            }
            })
          }
        </Footer>
      </Container>
    )
  }
}
render(
  <Content/>, document.getElementById('root'));
