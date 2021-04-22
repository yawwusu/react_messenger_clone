import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const handleChange = function(event) {
    setInput(event.target.value)
  }

  const sendMessage = function(event) {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Facebook Messenger Clone</h1>
      </header>
      <main className="App-body">
        <form>
          <FormControl>
            <InputLabel htmlFor="message">Enter a message</InputLabel>
            <Input value={input} onChange={handleChange} id="message" aria-describedby="message-helper-text" />
          </FormControl>
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </form>

        {
          messages.map(message => (
            <Message message={message} />
          ))
        }
      </main>
    </div>
  );
}

export default App;
