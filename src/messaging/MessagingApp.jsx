import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import MessageList from './MessageList';
import MessageDetail from './MessageDetail';
import { generateSampleData } from '../utils/data';

export default function MessagingApp() {
  // Core state
  const [messages, setMessages] = useState([]);
  const [view, setView] = useState('inbox'); // 'inbox', 'trash'
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMessageDetail, setShowMessageDetail] = useState(false);

  // Initialize with sample data
  useEffect(() => {
    setMessages(generateSampleData());
    setIsMobileView(window.innerWidth < 768);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const newIsMobileView = window.innerWidth < 768;
      setIsMobileView(newIsMobileView);
      if (!newIsMobileView) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter messages based on view and search
  const filteredMessages = messages.filter(message => {
    const matchesSearch = 
      message.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (message.from && message.from.includes(searchQuery)) ||
      (message.to && message.to.includes(searchQuery));
    
    return (view === 'inbox' && !message.isTrash && matchesSearch) ||
           (view === 'trash' && message.isTrash && matchesSearch);
  });

  // Message actions
  const moveToTrash = () => {
    setMessages(messages.map(msg =>
      selectedMessages.includes(msg.id) ? { ...msg, isTrash: true } : msg
    ));
    setSelectedMessages([]);
  };

  const restoreFromTrash = () => {
    setMessages(messages.map(msg =>
      selectedMessages.includes(msg.id) ? { ...msg, isTrash: false } : msg
    ));
    setSelectedMessages([]);
  };

  const deleteMessages = () => {
    setMessages(messages.filter(msg => !selectedMessages.includes(msg.id)));
    setSelectedMessages([]);
    if (selectedMessage && selectedMessages.includes(selectedMessage.id)) {
      setSelectedMessage(null);
      setShowMessageDetail(false);
    }
  };

  const sendMessage = (phoneNumber, messageContent) => {
    if (messageContent.trim() && phoneNumber.trim()) {
      const newMsg = {
        id: Date.now(),
        to: phoneNumber,
        content: messageContent,
        timestamp: new Date(),
        status: 'sent',
        isTrash: false
      };
      setMessages([...messages, newMsg]);
      return true;
    }
    return false;
  };

  // Simulate receiving a message
  const receiveMessage = () => {
    const senders = ['+1234567890', '+1987654321', '+1555123456', '+1444555666'];
    const randomSender = senders[Math.floor(Math.random() * senders.length)];
    const messageTemplates = [
      'Hi there! Just checking in.',
      "Hope you're having a great day!",
      'Can we schedule a call sometime today?',
      'Thank you for your recent message.',
      'Your account has been updated successfully.'
    ];
    const randomMessage = messageTemplates[Math.floor(Math.random() * messageTemplates.length)];

    const newMsg = {
      id: Date.now(),
      from: randomSender,
      content: randomMessage,
      timestamp: new Date(),
      status: 'delivered',
      isTrash: false
    };

    setMessages(prev => [...prev, newMsg]);
  };

  const toggleMessageSelect = (id) => {
    setSelectedMessages(prev => 
      prev.includes(id) 
        ? prev.filter(messageId => messageId !== id) 
        : [...prev, id]
    );
  };

  const openMessageDetail = (message) => {
    setSelectedMessage(message);
    setShowMessageDetail(true);
  };

  const backToList = () => {
    setShowMessageDetail(false);
    setSelectedMessage(null);
  };

  const deleteMessage = (id) => {
    setMessages(messages.map(msg =>
      msg.id === id ? { ...msg, isTrash: true } : msg
    ));
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(null);
      setShowMessageDetail(false);
    }
  };

  return (
    <div className="h-screen bg-secondary flex flex-col p-4">
      {/* App Header */}
      <header className="bg-primary-500 text-background p-4 shadow-sm rounded-md mt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <MessageSquare size={24} className="text-background" />
            <h1 className="text-xl font-bold tracking-tight">MessengerPro</h1>
          </div>
          <div className="flex items-center space-x-2">
            {selectedMessages.length > 0 && (
              <span className="text-sm bg-primary-600 px-2 py-1 rounded-full">
                {selectedMessages.length} selected
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden py-3 w-full">
        {/* Message List Component */}
        {(!isMobileView || !showMessageDetail) && (
          <MessageList 
            view={view}
            setView={setView}
            filteredMessages={filteredMessages}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedMessages={selectedMessages}
            toggleMessageSelect={toggleMessageSelect}
            moveToTrash={moveToTrash}
            restoreFromTrash={restoreFromTrash}
            deleteMessages={deleteMessages}
            receiveMessage={receiveMessage}
            openMessageDetail={openMessageDetail}
            isMobileView={isMobileView}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
            showMessageDetail={showMessageDetail}
            backToList={backToList}
          />
        )}

        {/* Message Detail Component */}
        {(showMessageDetail || !isMobileView) && (
          <MessageDetail
            selectedMessage={selectedMessage}
            view={view}
            isMobileView={isMobileView}
            deleteMessage={deleteMessage}
            messages={messages}
            setMessages={setMessages}
            sendMessage={sendMessage}
            showMessageDetail={showMessageDetail}
            setShowMessageDetail={setShowMessageDetail}
            setSelectedMessage={setSelectedMessage}
          />
        )}
      </div>
    </div>
  );
}