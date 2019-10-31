import React, { Component } from 'react';
import styled from 'styled-components';

const ws = new WebSocket('ws://unvaluted.co.uk/chat');

const InputMessage = styled.input`
  width: 80%;
`;

const Online = styled.p`
  text-align: right;
`;

const Display = styled.div`
  height: 65vh;
  overflow: scroll;
`;
const unixTimestampToHuman = timestamp => {
  var t = new Date(1970, 0, 1);
  t.setSeconds(timestamp);
  const format = t.toString().split(' ');
  return {
    date: format.slice(1, 3).join(' '),
    time: format[4]
  };
};

class Chat extends Component {
  state = {
    name: '',
    message: '',
    messages: [],
    timeStamp: '',
    connections: 0
  };

  componentDidMount() {
    fetch('/chat')
      .then(response => response.json())
      .then(result => {
        this.setState({
          messages: result
        });
      })
      .catch(function(error) {
        console.error(error);
      });

    ws.onopen = evt => {
      console.log('connected');
    };

    ws.onmessage = evt => {
      console.log('onmessage', evt.data);

      if (evt.data === 'wsId') {
        console.log(true)
      }
      // on receiving a message, add it to the list of messages

      const message = JSON.parse(evt.data);
      if (typeof message === 'number') {
        this.setState({ connections: message });
      }
      this.addMessage(message);
    };

    ws.onclose = () => {
      // automatically try to reconnect on connection loss
      this.setState({
        ws: this.ws
      });
    };
  }
  componentDidUpdate() {
    // console.log('this.state.message', this.state.messages);
  }

  timeStamp = () => {
    return Math.floor(new Date().getTime() / 1000);
  };

  addMessage = message => {
    this.setState({
      messages: [...this.state.messages, message]
    });
  };

  submitMessage = e => {
    e.preventDefault();
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = {
      name: this.state.name,
      message: this.state.message,
      timeStamp: this.state.timeStamp
    };
    ws.send(JSON.stringify(message));
  };
  enterMessage = e => {
    this.setState({ message: e.target.value, timeStamp: this.timeStamp() });
  };

  render() {
    return (
      <div>
        <label htmlFor="name">
          Name:&nbsp;
          <input
            type="text"
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <label />
        <Online>Connections: {this.state.connections}</Online>
        <Display>
        {this.state.messages.map((message, index) => {
          const { date, time } = unixTimestampToHuman(message.timeStamp);
          return (
              <h3 key={index}>
                {message.name} {message.message} {time}
              </h3>
          );
        })}
          </Display>
        <form
          htmlFor="message"
          action="."
          onSubmit={e => this.submitMessage(e)}
        >
          Message:&nbsp;
          <InputMessage
            type="text"
            placeholder={'Enter message...'}
            value={this.state.message}
            onChange={e => this.enterMessage(e)}
          />
          <input type="submit" value={'Send'} />
        </form>
      </div>
    );
  }
}

export default Chat;
