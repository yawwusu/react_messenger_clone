import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button'
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'

function App() {
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [username, setUserName] = React.useState('');

  React.useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        // console.log('data', snapshot.docs.map(doc => doc.data()))
        setMessages(snapshot.docs.map(doc => ({'id': doc.id, 'data': doc.data()})))
      })
  }, [])

  React.useEffect(() => {
    if (!username) {
      setUserName(prompt('Please enter your name'))
    }
  }, [username])

  const handleChange = function(event) {
    setInput(event.target.value)
  }

  const sendMessage = function(event) {
    event.preventDefault();

    db.collection('messages').add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Facebook Messenger Clone</h1>
        <p>Welcome {username}</p>
      </header>
      <main className="App-body">
        <form>
          <FormControl>
            <InputLabel htmlFor="message">Enter a message</InputLabel>
            <Input value={input} onChange={handleChange} id="message" aria-describedby="message-helper-text" />
          </FormControl>
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>Send Message</Button>
        </form>

        <FlipMove>
          {
            messages.map(message => (
              <Message key={message.id} message={message.data} username={username} />
            ))
          }
        </FlipMove>
      </main>
    </div>
  );
}

export default App;
