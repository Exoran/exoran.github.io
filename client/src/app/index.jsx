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
        NoClick} from "./styles"
import {injectGlobal} from 'styled-components'

//Global CSS
injectGlobal `
  html,body{
    height: 100%;
    width: 100%;
    margin:0
  }
  body{
    font-family: 'Merriweather', 'Helvetica Neue', Arial, sans-serif;
    background-color:grey;
  }
`

let projects=[
  {
    title:"Calculator",
    type:"FCC",
    href:"http://alexandrerobin.fr/fcc/calculator/"
  },
  {
    title:"Pomodoro",
    type:"FCC",
    href:""
  },
  {
    title:"Weather",
    type:"FCC",
    href:""
  },
  {
    title:"Are they online ?",
    type:"FCC",
    href:""
  },
  {
    title:"tictactoe",
    type:"FCC",
    href:""
  },
]

let socialNetworks= [
  {
    title:"LinkedIN",
    href:"http://linkedin.com/in/robinalexandre",
    logo:"",
  },
  {
    title:"Twitter",
    href:"http://twitter.com/alexandrobin",
    logo:"",
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
      <AchievementLink href={this.props.href}>
        <Title>{this.props.title}</Title>
        <Preview scrolling="no" src={this.props.href} />
        <NoClick />
      </AchievementLink>
    )
  }
}

class Content extends Component{
  render(){
    return(
      <Container>
      <Header>
            <h1>Alexandre Robin</h1>
            <p>HR Consultant & Web Developer</p>
            <p>from France</p>
      </Header>

        <Nav>
          <Navbar>
            <MenuItem><a href="#">About Me</a></MenuItem>
            <MenuItem><a href="#">Portfolio</a></MenuItem>
            <MenuItem><a href="#">Contact</a></MenuItem>
          </Navbar>

        </Nav>
        <About>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</About>

        <Portfolio>
          {
            projects.map(function(a) {
              if (a.href != ""){
              return (
                <Project title={a.title}
                  href={a.href} />
              )
            } else {
              return (
                <Project title={a.title + " - Work in Progress"}
                  href={a.href} />
              )
            }
            })
          }
        <AchievementHidden/>
        </Portfolio>
        <div className="Footer">
          <p>Thanks</p>
        </div>
      </Container>
    )
  }
}
render(
  <Content/>, document.getElementById('root'));
