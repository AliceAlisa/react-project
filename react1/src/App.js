import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const checkMessage = () => {
      if (messageList.length > 0 && messageList[messageList.length - 1].author === 'user') {
        setMessageList((state) => {
          const copyState = [...state];
          copyState.push({
            author: 'bot',
            text: 'hello! I am bot'
          })
          return copyState;
        })
      }
      return
    };

    const timerAnswer = setTimeout(() => {
      checkMessage();
    }, 1500);

    return () => {
      clearTimeout(timerAnswer);
    }
  }, [messageList]);

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const copyMessages = [...messageList];
    copyMessages.push({ author: 'user', text: value });
    setMessageList(copyMessages);
    setValue('');
  }

  return (
    <div className="App">
      <div className="messages"> {
        messageList.map((message, i) => <div className="message_text" key={i}><span className="author">{message.author}</span> : {message.text}</div>)
      }
      </div>
      <form onSubmit={onSubmit} action="" className="message_form">
        <textarea className="text_area" rows="3" cols="25" onChange={onChange} value={value}>
        </textarea>
        <button className="submit_button" type="submit">Send</button>
      </form>
    </div>
  );
}
export default App;