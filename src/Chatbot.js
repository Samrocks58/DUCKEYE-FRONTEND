import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hello! Ask me about your career.", sender: "bot" }]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    setTimeout(() => {
      const botResponse = {
        text: generateBotResponse(input),
        sender: "bot",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);

    setInput("");
  };

  const generateBotResponse = (userText) => {
    const responses = {
      "how to get a job": "Apply to positions relevant to your skills and build a strong LinkedIn profile.",
      "resume tips": "Keep it concise, highlight your achievements, and tailor it to each job application.",
      "interview advice": "Practice common questions, research the company, and stay confident!",
    };
    
    return responses[userText.toLowerCase()] || "I'm not sure. Could you ask something else?";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.sender === "user" ? styles.userMessage : styles.botMessage}>
            {msg.text}
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your question..."
          style={styles.input}
        />
        <button onClick={handleSendMessage} style={styles.button}>Send</button>
      </div>
    </div>
  );
};

// Chatbot Styles
const styles = {
  chatContainer: {
    width: "400px",
    margin: "20px auto",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  chatBox: {
    height: "250px",
    overflowY: "auto",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  userMessage: {
    textAlign: "right",
    backgroundColor: "#d1e7fd",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "5px",
  },
  botMessage: {
    textAlign: "left",
    backgroundColor: "#e3e3e3",
    padding: "8px",
    margin: "5px 0",
    borderRadius: "5px",
  },
  inputContainer: {
    display: "flex",
    marginTop: "10px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "8px 15px",
    marginLeft: "5px",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Chatbot;
