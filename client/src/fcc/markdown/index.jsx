import {render} from 'react-dom';
import React, {Component} from 'react';
import {injectGlobal} from 'styled-components'
import styled from 'styled-components'


const Footer = styled.div`
  text-align:center
`

const Title = styled.h1`
  text-align:center;
  border-bottom:2px solid black;
`

const Column = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    display: flex;
    width: 45%;
    padding: 10px;
    margin: 10px 1.5%;
    background: #FFF;
    box-shadow: 0 0 3px rgba(0,0,0,0.05);

    >textarea {
      width:100%
    }
  }
`

const Text = styled.textarea`
  width:100%
`


class Display extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain --- not the reign---in\nSpain.\n\n *[Alexandre](https://freecodecamp.com/exoran)*'
    }
    this.updateValue = this.updateValue.bind(this)
  }

  updateValue(modifiedValue) {
    this.setState({
      value: modifiedValue
    })
  }

  render() {
    return (
      <div>
        <Title>
          Markdown editor
        </Title>
        <Column>
          <div>
            <InputText value={this.state.value}   updateValue={this.updateValue} />
          </div>
          <div>
            <Markdown value={this.state.value}/>
          </div>
      </Column>
        <Footer>Alexandre Robin - FreeCodeCamp</Footer>
      </div>
    )
  }
}

class InputText extends React.Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
  }

  update() {
    var modifiedValue = this.refs.inputValue.value;
    this.props.updateValue(modifiedValue);
  }

  render() {
    return (
      <textarea rows="22" type="text" ref="inputValue" value={this.props.value} onChange={this.update}/>
    )
  }
}


class Markdown extends React.Component {

  rawMarkup(value) {
    var rawMarkup = marked(value, {
      sanitize: true
    });
    return {
      __html: rawMarkup
    };
  }

  render() {
    return <span dangerouslySetInnerHTML={this.rawMarkup(this.props.value)}/>
  }
}

render(
  <Display />,
  document.getElementById('app')
);
