import {render} from 'react-dom';
import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
import {Container,
        Nav, Navbar, MenuItem,
        Header,Baseline,
        About,
        Portfolio, Preview, Link, Title, AchievementLink, AchievementHidden, NoClick,
        Footer,
        SectionTitle,
        Social,
        Ribbon,
      } from "./styles"
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
const WIP = "media/wip.gif"

const projects=[
  {
    title:"Calculator",
    type:"JS + JQuery",
    href:"fcc/calculator/"
  },
  {
    title:"Random Quote",
    type:"JS + JQuery",
    href:"fcc/randomquote"
  },
  {
    title:"Pomodoro",
    type:"JS + JQuery",
    href:"fcc/pomodoro/"
  },
  {
    title:"Weather",
    type:"JS + JQuery",
    href:"fcc/weather"
  },
  {
    title:"Twitch",
    type:"JS + JQuery",
    href:"fcc/twitch"
  },
  {
    title:"Tictactoe",
    type:"JS + JQuery",
    href:"fcc/tictactoe/"
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
    let href = window.location.href
    href = href.split('/')
    href.pop()
    href.push('')
    href = href.join('/')
    return (

      <AchievementLink href={href + this.props.href}>
        <Title>{this.props.title}</Title>

        <Preview scrolling="no" src={href + this.props.href} />
        <Ribbon>{this.props.type}</Ribbon>
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

    componentWillMount(){
      configureAnchors({offset: -100, scrollDuration: 400})
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }


  render(){


    return(

      <Container>
      <Background />
      <ScrollableAnchor id='about'>
        <div></div>
      </ScrollableAnchor>
      <Header>
            <Baseline>Alexandre Robin</Baseline>
            <p>HR Consultant - Learning how to code</p>
            <p><FontAwesome name="map-marker"  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> Paris, France</p>
      </Header>


        <Nav navbarTop={this.state.navbarTop}>
          <Navbar  ref="navbar" id="navbar">
            <MenuItem color={"#006064"}><a href="#about">About</a></MenuItem>
            <MenuItem color={"#00838F"}><a href="#portfolio">Portfolio</a></MenuItem>
            <MenuItem color={"#0097A7"}><a href="#contact">Contact</a></MenuItem>
          </Navbar>
        </Nav>


        <About>

          <p>
            Welcome on my personal website & portfolio !</p>
            <p>I am following the Freecodecamp courses and trying to complete all their challenges.
              I will publish all my projects on this portfolio and the sources will be available on my <a href="https://github.com/exoran/exoran.github.io/" target="_blank">Github</a>
          </p>
            <p>This portfolio is entirely created in ReactJS.
          </p>
        </About>


        <ScrollableAnchor id='portfolio'>
          <SectionTitle>My Projects</SectionTitle>
        </ScrollableAnchor>
        <Portfolio>
          {
            projects.map(function(a) {
              if (a.href != WIP || ""){
              return (
                <Project title={a.title}
                  href={a.href} type={a.type}/>
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
        <ScrollableAnchor id='contact'>
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
      </ScrollableAnchor>
      </Container>
    )
  }
}
render(
  <Content/>, document.getElementById('root'));
