import {render} from 'react-dom';
import React, {Component} from 'react';
import {injectGlobal} from 'styled-components'
import styled from 'styled-components'


injectGlobal `
html,body{
  height: 100%;
  width: 100%;
  margin:0;
}
`

const Header = styled.div`
  margin-bottom: 30px;
  background-color: #006400;
  color: #eeeeee;
  line-height: 50px;
  width: 100%;
  text-align:center;
  font-family:Arial;
`

const Title = styled.h3`
  text-align:center;
  background-color:#006400;
  color:#eeeeee;
`

const Avatar = styled.img`
  width:40px;
  border-radius:20%
`

const Table = styled.div`
  background-color: white;
  overflow-x:auto;
  margin-right:10%;
  margin-left: 10%;

  >table{
    border-collapse: collapse;
    width: 100%;
  }

  >td, a {
    text-decoration:none;
    line-height: 35px;
  }
  >th, td {
    text-align: center;
  }


  tr:nth-child(even){background-color: #f2f2f2}
`
const Footer = styled.div`
  text-align:center
`







class LeaderBoard extends React.Component{
  constructor(){
    super()
    this.onRecentClick = this.onRecentClick.bind(this)
    this.onAllTimeClick = this.onAllTimeClick.bind(this)
  }

  onRecentClick(){
    this.props.column('/top/recent')
  }
  onAllTimeClick(){
    this.props.column('/top/alltime')
  }


  render(){
    return (
      <div className="container">
        <Title>LeaderBoard</Title>
      <Table>
        <table>
          <thead>
      <tr>
        <th>#</th>
        <th>Camper Name</th>
        <th><a href='#' onClick={this.onRecentClick}>Points in past 30 days</a></th>
        <th><a href='#' onClick={this.onAllTimeClick}>All time points</a> </th>
      </tr>
      </thead>
          <tbody>
           {this.props.users.map((user, i) => {
              console.log(user)
              return (
               <tr>
                <td>
                  {i+1}
                </td>
                <td>
                  <a href={"https://freecodecamp.com/"+ user.username}><Avatar src={user.img}/>  {user.username}</a>
                </td>
                <td>
                  {user.recent}
                </td>
                <td>
                  {user.alltime}
                </td>
              </tr>)
            })
            }
          </tbody>
        </table>
      </Table>
        </div>
    )
  }
}

class Application extends React.Component{
  constructor(){
    super()
    this.state = {
      users :[],
    }
    this.column = '/top/recent'
    this.callback = this.callback.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  callback(json){
    this.setState({
      users:json
    })
  }

  handleChange(newColumn){
    if (newColumn != this.column){
      this.column= newColumn
      this.getData()
    }
  }
  getData(){
    $.get(this.props.apiroot + this.column, this.callback)
  }

  componentDidMount(){
    this.getData()

  }

  render(){
    return (

      <div>
        <Header><h1>FCC Top Users </h1></Header>
        <LeaderBoard column={this.handleChange} users={this.state.users}/>
        <Footer>Alexandre Robin - FreeCodeCamp</Footer>
      </div>)
  }
}


render(<Application apiroot='https://fcctop100.herokuapp.com/api/fccusers' />, document.getElementById('app'))
