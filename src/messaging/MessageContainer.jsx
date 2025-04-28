import { useState, useEffect } from 'react';
import { Trash2, Send, Search, Check, Inbox, MessageSquare, AlertTriangle, X, MoreVertical, ArrowLeft, ChevronRight, RefreshCcw } from 'lucide-react';

export default function MessagingApp() {
  // State for messages
  const [messages, setMessages] = useState([]);
  const [view, setView] = useState('inbox'); // 'inbox', 'trash'
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [showMessageDetail, setShowMessageDetail] = useState(false);

  // Sample data
  useEffect(() => {
    // const sampleMessages = [
    //   { 
    //     id: 1, 
    //     from: '+1234567890', 
    //     content: "Hey there! Just checking in to see how you're doing today.", 
    //     timestamp: new Date(2025, 3, 28, 10, 15), 
    //     status: 'delivered',
    //     isTrash: false 
    //   },
    //   { 
    //     id: 2, 
    //     from: '+1987654321', 
    //     content: 'The meeting has been rescheduled to tomorrow at 2 PM. Please confirm your availability.', 
    //     timestamp: new Date(2025, 3, 28, 9, 30), 
    //     status: 'delivered',
    //     isTrash: false 
    //   },
    //   { 
    //     id: 3, 
    //     from: '+1555123456', 
    //     content: 'Your package has been delivered. Thank you for shopping with us!', 
    //     timestamp: new Date(2025, 3, 27, 14, 45), 
    //     status: 'delivered',
    //     isTrash: false 
    //   },
    //   { 
    //     id: 4, 
    //     to: '+1555123456', 
    //     content: 'Thanks for the update. I received the package.', 
    //     timestamp: new Date(2025, 3, 27, 15, 20), 
    //     status: 'sent',
    //     isTrash: false 
    //   },
    //   { 
    //     id: 5, 
    //     from: '+1444555666', 
    //     content: 'Your appointment is confirmed for Friday at 11 AM.', 
    //     timestamp: new Date(2025, 3, 26, 17, 10), 
    //     status: 'delivered',
    //     isTrash: false 
    //   }
    // ];
    const sampleMessages = [
        { 
          id: 1, 
          from: '+1234567890', 
          content: "Hey there! Just checking in to see how you're doing today.", 
          timestamp: new Date(2025, 3, 28, 10, 15), 
          status: 'delivered',
          isTrash: false 
        },
        { 
          id: 2, 
          from: '+1987654321', 
          content: 'The meeting has been rescheduled to tomorrow at 2 PM. Please confirm your availability.', 
          timestamp: new Date(2025, 3, 28, 9, 30), 
          status: 'delivered',
          isTrash: false 
        },
        { 
          id: 3, 
          from: '+1555123456', 
          content: 'Your package has been delivered. Thank you for shopping with us!', 
          timestamp: new Date(2025, 3, 27, 14, 45), 
          status: 'delivered',
          isTrash: false 
        },
        { 
          id: 4, 
          to: '+1555123456', 
          content: 'Thanks for the update. I received the package.', 
          timestamp: new Date(2025, 3, 27, 15, 20), 
          status: 'sent',
          isTrash: false 
        },
        { 
          id: 5, 
          from: '+1444555666', 
          content: 'Your appointment is confirmed for Friday at 11 AM.', 
          timestamp: new Date(2025, 3, 26, 17, 10), 
          status: 'delivered',
          isTrash: false 
        },
        { 
          id: 6, 
          from: '+1222333444', 
          content: 'Reminder: Your bill payment is due in 2 days.', 
          timestamp: new Date(2025, 3, 26, 12, 0), 
          status: 'delivered',
          isTrash: false 
        },
        { 
          id: 7, 
          to: '+1222333444', 
          content: 'Payment completed. Thanks for the reminder!', 
          timestamp: new Date(2025, 3, 26, 12, 30), 
          status: 'read',
          isTrash: false 
        },
        { 
          id: 8, 
          from: '+1777888999', 
          content: 'The team lunch is tomorrow at 1 PM. Bring your appetite!', 
          timestamp: new Date(2025, 3, 25, 16, 45), 
          status: 'delivered',
          isTrash: false 
        },
        { 
          id: 9, 
          from: '+1666777888', 
          content: 'Your recent transaction of $50 was completed successfully.', 
          timestamp: new Date(2025, 3, 25, 10, 20), 
          status: 'delivered',
          isTrash: false 
        },
        { 
          id: 10, 
          from: '+1999888777', 
          content: 'Weather alert: Thunderstorms expected this evening.', 
          timestamp: new Date(2025, 3, 24, 18, 15), 
          status: 'delivered',
          isTrash: true 
        },
        { 
          id: 11, 
          to: '+1999888777', 
          content: 'Thanks for the alert! Will stay indoors.', 
          timestamp: new Date(2025, 3, 24, 18, 30), 
          status: 'sent',
          isTrash: false 
        },
        { 
          id: 12, 
          from: '+1333444555', 
          content: 'Your subscription is about to renew. Reply STOP to cancel.', 
          timestamp: new Date(2025, 3, 23, 9, 0), 
          status: 'delivered',
          isTrash: false 
        },
        { 
          id: 13, 
          from: '+1888999000', 
          content: 'Happy birthday! Enjoy your special day!', 
          timestamp: new Date(2025, 3, 22, 0, 1), 
          status: 'delivered',
          isTrash: false 
        },
        { 
          id: 14, 
          to: '+1888999000', 
          content: 'Thank you for the birthday wishes!', 
          timestamp: new Date(2025, 3, 22, 10, 15), 
          status: 'read',
          isTrash: false 
        },
        { 
          id: 15, 
          from: '+1444333222', 
          content: 'Your delivery is running 30 minutes late. We apologize for the inconvenience.', 
          timestamp: new Date(2025, 3, 21, 14, 50), 
          status: 'delivered',
          isTrash: false 
        }
      ];
    
    setMessages(sampleMessages);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter messages based on view and search
  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.content.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (message.from && message.from.includes(searchQuery)) || 
                          (message.to && message.to.includes(searchQuery));
    return (view === 'inbox' && !message.isTrash && matchesSearch) || 
           (view === 'trash' && message.isTrash && matchesSearch);
  });

  // Message actions
  const moveToTrash = () => {
    setMessages(messages.map(msg => 
      selectedMessages.includes(msg.id) ? {...msg, isTrash: true} : msg
    ));
    setSelectedMessages([]);
  };

  const restoreFromTrash = () => {
    setMessages(messages.map(msg => 
      selectedMessages.includes(msg.id) ? {...msg, isTrash: false} : msg
    ));
    setSelectedMessages([]);
  };

  const deleteMessages = () => {
    setMessages(messages.filter(msg => !selectedMessages.includes(msg.id)));
    setSelectedMessages([]);
  };

  const sendMessage = () => {
    if (newMessage.trim() && phoneNumber.trim()) {
      const newMsg = {
        id: messages.length + 1,
        to: phoneNumber,
        content: newMessage,
        timestamp: new Date(),
        status: 'sent',
        isTrash: false
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
      setPhoneNumber('');
    }
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
      id: messages.length + 1,
      from: randomSender,
      content: randomMessage,
      timestamp: new Date(),
      status: 'delivered',
      isTrash: false
    };
    
    setMessages([...messages, newMsg]);
  };

  const toggleMessageSelect = (id) => {
    if (selectedMessages.includes(id)) {
      setSelectedMessages(selectedMessages.filter(messageId => messageId !== id));
    } else {
      setSelectedMessages([...selectedMessages, id]);
    }
  };

  const formatDate = (date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  const openMessageDetail = (message) => {
    setSelectedMessage(message);
    setShowMessageDetail(true);
  };

  const backToList = () => {
    setShowMessageDetail(false);
    setSelectedMessage(null);
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Header */} 
      <header className="bg-primary-500 text-white p-4 shadow-md rounded-md mt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {isMobileView && showMessageDetail && (
              <button onClick={backToList} className="mr-2">
                <ArrowLeft size={20} />
              </button>
            )}
            <MessageSquare size={24} />
            <h1 className="text-xl font-bold">Messaging App</h1>
          </div>
          <div className="flex items-center space-x-2">
            {selectedMessages.length > 0 && (
              <span className="text-sm">{selectedMessages.length} selected</span>
            )}
            {isMobileView && !showMessageDetail && (
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <MoreVertical size={20} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileView && isMobileMenuOpen && (
        <div className="bg-white shadow-md p-4 absolute top-16 right-0 z-10 w-48">
          <button 
            onClick={() => { setView('inbox'); setIsMobileMenuOpen(false); }} 
            className="flex items-center space-x-2 p-2 w-full text-left hover:bg-gray-100 rounded"
          >
            <Inbox size={18} />
            <span>Inbox</span>
          </button>
          <button 
            onClick={() => { setView('trash'); setIsMobileMenuOpen(false); }} 
            className="flex items-center space-x-2 p-2 w-full text-left hover:bg-gray-100 rounded"
          >
            <Trash2 size={18} />
            <span>Trash</span>
          </button>
          <button 
            onClick={receiveMessage} 
            className="flex items-center space-x-2 p-2 w-full text-left hover:bg-gray-100 rounded"
          >
            <MessageSquare size={18} />
            <span>Receive Message</span>
          </button>
        </div>
      )}

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - hidden on mobile when viewing message detail */}
        {(!isMobileView || !showMessageDetail) && (
          <div className={`${isMobileView ? 'w-full' : 'w-64'} bg-white shadow-md`}>
            {/* Sidebar navigation */}
            {!isMobileView && (
              <div className="p-4 mt-2">
                <button 
                  onClick={() => setView('inbox')} 
                  className={`flex items-center space-x-2 p-2 w-full text-left rounded ${view === 'inbox' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  <Inbox size={18} />
                  <span>Inbox</span>
                </button>
                <button 
                  onClick={() => setView('trash')} 
                  className={`flex items-center space-x-2 p-2 w-full text-left rounded ${view === 'trash' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'}`}
                >
                  <Trash2 size={18} />
                  <span>Trash</span>
                </button>
                <button 
                  onClick={receiveMessage} 
                  className="flex items-center space-x-2 p-2 w-full text-left hover:bg-gray-100 rounded mt-4"
                >
                  <MessageSquare size={18} />
                  <span>Receive Message</span>
                </button>
              </div>
            )}

            {/* Search */}
            <div className="p-4 border-t border-gray-200">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search messages..." 
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>

            {/* Action buttons */}
            {selectedMessages.length > 0 && (
              <div className="flex p-2 space-x-2 border-t border-gray-200">
                {view === 'inbox' ? (
                  <button 
                    onClick={moveToTrash} 
                    className="flex items-center space-x-1 bg-red-100 text-red-600 px-3 py-1 rounded-md hover:bg-red-200"
                  >
                    <Trash2 size={16} />
                    <span>Move to Trash</span>
                  </button>
                ) : (
                  <>
                    <button 
                      onClick={restoreFromTrash} 
                      className="flex items-center space-x-1 bg-green-100 text-green-600 px-3 py-1 rounded-md hover:bg-green-200"
                    >
                      <RefreshCcw size={16} />
                      <span>Restore</span>
                    </button>
                    <button 
                      onClick={deleteMessages} 
                      className="flex items-center space-x-1 bg-red-100 text-red-600 px-3 py-1 rounded-md hover:bg-red-200"
                    >
                      <X size={16} />
                      <span>Delete</span>
                    </button>
                  </>
                )}
              </div>
            )}

            {/* Message List */}
            <div className="overflow-y-auto h-full pb-32">
              {filteredMessages.length === 0 ? (
                <div className="text-center p-8 text-gray-500">
                  <MessageSquare size={40} className="mx-auto mb-2 opacity-30" />
                  <p>No messages to display</p>
                </div>
              ) : (
                filteredMessages.map(message => (
                  <div 
                    key={message.id} 
                    className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                  >
                    <div className="flex items-start p-4" onClick={() => openMessageDetail(message)}>
                      <div className="flex-shrink-0 mr-3">
                        <input 
                          type="checkbox" 
                          checked={selectedMessages.includes(message.id)}
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleMessageSelect(message.id);
                          }}
                          className="h-5 w-5 text-blue-600 rounded"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium truncate">
                            {message.from ? message.from : 'You → ' + message.to}
                          </span>
                          <span className="text-xs text-gray-500 ml-2">
                            {formatDate(message.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{message.content}</p>
                        {message.status && (
                          <div className="flex items-center mt-1">
                            {message.status === 'delivered' ? (
                              <Check size={14} className="text-green-500" />
                            ) : message.status === 'sent' ? (
                              <Check size={14} className="text-blue-500" />
                            ) : (
                              <AlertTriangle size={14} className="text-yellow-500" />
                            )}
                            <span className="text-xs ml-1 text-gray-500 capitalize">{message.status}</span>
                          </div>
                        )}
                      </div>
                      <ChevronRight size={16} className="text-gray-400 mt-1" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Message Detail View */}
        {(showMessageDetail || !isMobileView) && (
          <div className="flex-1 flex flex-col bg-gray-50">
            {selectedMessage ? (
              <>
                {/* Message header */}
                <div className="bg-white p-4 shadow-sm border-b border-gray-200 mt-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="font-medium">
                        {selectedMessage.from ? selectedMessage.from : 'You → ' + selectedMessage.to}
                      </h2>
                      <p className="text-xs text-gray-500">
                        {selectedMessage.timestamp.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      {view === 'inbox' && !selectedMessage.isTrash && (
                        <button 
                          onClick={() => {
                            setMessages(messages.map(msg => 
                              msg.id === selectedMessage.id ? {...msg, isTrash: true} : msg
                            ));
                            setSelectedMessage(null);
                            setShowMessageDetail(false);
                          }}
                          className="text-gray-600 hover:bg-gray-100 p-2 rounded-full"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message content */}
                <div className="flex-1 p-6 overflow-y-auto">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="whitespace-pre-wrap">{selectedMessage.content}</p>
                  </div>
                </div>

                {/* Reply area */}
                <div className="bg-white p-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Type your reply..."
                      className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button 
                      onClick={sendMessage}
                      className="ml-2 bg-primary-400 text-white p-2 rounded-lg hover:bg-primary-500"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </>
            ) : !isMobileView ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <MessageSquare size={64} className="mb-4 opacity-30" />
                <h3 className="text-xl font-medium mb-2">No message selected</h3>
                <p>Select a message from the list to view its contents</p>
              </div>
            ) : null}
          </div>
        )}
      </div>

      {/* New Message button - fixed at bottom */}
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={() => {
            setSelectedMessage(null);
            setShowMessageDetail(true);
          }}
          className="bg-primary-400 text-white p-4 rounded-full shadow-lg hover:bg-primary-500 flex items-center justify-center"
        >
          <Send size={24} />
        </button>
      </div>

      {/* Send SMS form (displayed when clicking new message) */}
      {showMessageDetail && !selectedMessage && (
        <div className="flex-1 flex flex-col bg-gray-50">
          <div className="bg-white p-4 shadow-sm border-b border-gray-200">
            <h2 className="font-medium">New Message</h2>
          </div>
          <div className="flex-1 p-6">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Recipient:</label>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Message:</label>
              <textarea
                placeholder="Type your message..."
                rows="6"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:bg-white focus:ring-primary-500"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              ></textarea>
            </div>
            <button 
              onClick={sendMessage}
              className="bg-primary-400 text-white px-6 py-2 rounded-lg hover:bg-primary-500 flex items-center justify-center w-full"
            >
              <Send size={18} className="mr-2" />
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
}