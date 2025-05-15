import { useState } from 'react';
import { motion } from 'framer-motion';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Mock bot response
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: 'Thanks for your message! How can I help you today?', sender: 'bot' }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-80"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Chat with Us</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-500">×</button>
          </div>
          <div className="h-60 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-l"
            />
            <button onClick={handleSend} className="btn btn-primary rounded-r">Send</button>
          </div>
        </motion.div>
      ) : (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setIsOpen(true)}
          className="btn btn-primary"
        >
          Chat with Us
        </motion.button>
      )}
    </div>
  );
};

export default ChatWidget; 