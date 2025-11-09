import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  const { role, content, timestamp, isError } = message;

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`message ${role} ${isError ? 'error' : ''}`}>
      <div className="message-content">
        <div className="message-text">{content}</div>
        <div className="message-time">{formatTime(timestamp)}</div>
      </div>
    </div>
  );
};

export default Message;