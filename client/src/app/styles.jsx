import styled from 'styled-components'

export const Container = styled.div `
  height: 100%;
  width: 100%;
`

/* Navigation panel     */
export const Nav = styled.div `
  transition: all 0.5s
  position:${props => props.navbarTop === false ? 'relative' : 'fixed'}
  top:${props => props.navbarTop === false ? 'null' : '0'}
  background-color:#CFD8DC
  z-index:500000000000;
  display: block;
  width: ${props => props.navbarTop === false ? '66%' : '100%'}
  margin-left:${props => props.navbarTop === false ? '17%' : '0'}
  background-color: transparent
  margin-bottom: 0;
  font-family: 'Open Sans', 'Helvetica Neue', Arial, sans-serif;
`

export const Navbar = styled.ul`
  background-color:#37474F;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

export const MenuItem = styled.li`
  float: left;


  >a{
    display: block;
    color: white
    text-align: center;
    padding: 10px 12px;
    text-decoration: none;
    border-bottom:3px;
    border-bottom-style:solid
    border-color:#CFD8DC
  }
  >a:hover {
    border-bottom:3px;
    border-bottom-style:solid
    border-color:${props => props.color}
    color:${props => props.color};
  }
`


export const Header = styled.div `
  width: 66%;
  margin-top: 2%;
  margin-left: 17%;
  padding-top: 20px;
  padding-bottom: 20px;
  min-height: auto;
  background-color: transparent;
  text-align: center;
  color: white;
`

export const Baseline = styled.h1`
  display:inline;
  background-color:null
`


export const About = styled.div `
  padding:8px;
  box-sizing: border-box;
  display:block;
  width: 66%;
  margin-left: 17%;
  margin-top: 0%;
  background-color:#ECEFF1;
  margin-bottom: 5%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.16)
`

export const SectionTitle = styled.div`
  text-align:center;
  color:white;
  font-weight: bold;
  background-color:#263238;
  width:66%;
  margin-left:17%;
  height:35px;
  line-height: 35px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`

export const Portfolio = styled.div `
  width:66%;
  margin-left: 17%;
  padding-top: 1%
  display: flex;
  background: #546E7A;
  box-shadow: 0 1px 3px rgba(0,0,0,0.16)
  flex-direction: horizontal;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
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
  height: 250px;
  margin-bottom: 16px;
  background: white;
  border-radius: 2px;
  overflow: hidden;
  & h1 {
    position: absolute;
    display: block;
    left:0;
    right:0;
    top:0;
    bottom:0;
    height: 30px;
    line-height: 30px;
    color: #263238;
    font-size: 130%;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  & h1::after {
    display: none;
  }
  &:before {
  content: '';
  position: absolute;
  top: -1;
  right: -1;
  border-top: 35px solid #546E7A;
  border-left: 35px solid transparent;
  width: 0;
  z-index: 1;
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
  margin-top: 34px;
`

export const Ribbon = styled.div`
  width: 200px;
  background: #006064;
  position: absolute;
  top: auto;
  bottom: 25px;
  left: -50px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  text-align: center;
  line-height: 50px;
  letter-spacing: 1px;
  color: #f0f0f0;
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

export const Footer = styled.div`
  padding:50px;
  text-align:center;
  background-color:transparent;
  height:50px;
`

export const Wrapper = styled.div`
  top:0;
  position:fixed;
  height: 100%;
  width: 100%;
  text-align: center;
  z-index: -1
`



export const Social = styled.a`
  color:white;
  font-size:35px;
  line-height: 50px;
  margin:8px;

  &:hover{
    color:#263238;
  }
`
