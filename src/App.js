import React, { useState } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';

function App() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '你好！我是 AI 助手，有什么可以帮助你的吗？',
      timestamp: new Date()
    }
  ]);

  return (
    <div className="App">
      <div className="app-container">
        <header className="app-header">
          <h1>AI Chatbox</h1>
          <p>基于 ChatGPT 的智能对话助手</p>
        </header>
        <ChatBox messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
}

export default App;