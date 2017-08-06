import styled from 'styled-components'

export const Container = styled.div `
  height: 100%;
  width: 100%;
`

/* Navigation panel     */
export const Nav = styled.div `
  position:relative;
  display: block;
  width: 66%;
  margin-left: 17%;
  background-color: white;
  margin-bottom: 0;
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
`

export const Navbar = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

export const MenuItem = styled.li`
  float: left;

  >a{
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
  >a:hover {
    background-color: #111;
    color:white;
}
`


export const Header = styled.div `
width: 66%;
margin-top: 2%;
margin-left: 17%;
min-height: auto;
background-color: transparent;
text-align: center;
color: white;
`

export const About = styled.div `
  width: 66%;
  margin-left: 17%;
  margin-top: 0%;
  background-color:#ECEFF1;
  margin-bottom: 5%;
`

export const Portfolio = styled.div `
  width:66%;
  margin-left: 17%;
  display: flex;
  padding-top: 5%;
  background: #CCCCCC;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.16), inset 0 1px 3px rgba(0,0,0,0.23);
  flex-direction: horizontal;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const Link = styled.a `
  text-decoration: none;
  color: #1976D2;
  display: block;
  position: relative;
  &:visited {
  color: #1976D2;
  }
`

export const Title = styled.h1 `
  text-align: center;
  padding: 16px;
  &::after {
  display: block;
  content: ' ';
  height: 1px;
  background: #00695C;
  width: 50%;
  margin: auto;
  margin-top: 16px;
}
`

export const AchievementLink = styled(Link)`
  position: relative;
  display: block;
  width: 384px;
  height: 260px;
  margin-bottom: 16px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  overflow: hidden;
  & h1 {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    height: 48px;
    line-height: 48px;
    color: #00695C;
    font-size: 160%;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  & h1::after {
    display: none;
  }
`

export const AchievementHidden = styled.div `
  display: block;
  width: 384px;
  height: 0px;
`

export const Preview = styled.embed`
  transform: scale(0.2);
  transform-origin: 0 0;
  width: 1920;
  height: 1080;
  border: none;
  position: relative;
  margin-top: 44px;
`
export const NoClick = styled.div`
  display: block;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0);
`
