import { useState, useRef, useEffect } from 'react';
import { Send, Trash2, MessageSquare } from 'lucide-react';

export default function MessageDetail({
  selectedMessage,
  view,
  isMobileView,
  deleteMessage,
  messages,
  setMessages,
  sendMessage,
  showMessageDetail,
  setShowMessageDetail,
  setSelectedMessage
}) {
  const [newMessage, setNewMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  
  const messageInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  // Reset states when selected message changes
  useEffect(() => {
    setNewMessage('');
    setPhoneNumber('');
    setIsMessageSent(false);
  }, [selectedMessage]);

  // Focus on the appropriate input when showing create message view
  useEffect(() => {
    if (showMessageDetail && !selectedMessage) {
      setTimeout(() => {
        if (phoneInputRef.current) {
          phoneInputRef.current.focus();
        }
      }, 100);
    }
  }, [showMessageDetail, selectedMessage]);

  // Handle sending message
  const handleSendMessage = () => {
    if (newMessage.trim() && (selectedMessage?.from || phoneNumber.trim())) {
      setIsSending(true);
      
      // If replying to existing message
      if (selectedMessage?.from) {
        const success = sendMessage(selectedMessage.from, newMessage);
        if (success) {
          setNewMessage('');
          setIsMessageSent(true);
          setTimeout(() => setIsMessageSent(false), 3000);
        }
      } 
      // If creating new message
      else {
        const success = sendMessage(phoneNumber, newMessage);
        if (success) {
          setNewMessage('');
          setPhoneNumber('');
          setIsMessageSent(true);
          setTimeout(() => {
            setIsMessageSent(false);
            setShowMessageDetail(false);
            setSelectedMessage(null);
          }, 1500);
        }
      }
      
      setIsSending(false);
    }
  };

  // Handle key presses for sending message
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-secondary rounded-lg shadow-md ml-0 md:ml-4">
      {selectedMessage ? (
        <>
          {/* Message header */}
          <div className="bg-background p-4 shadow-sm border-b border-gray-200 rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-medium text-lg">
                  {selectedMessage.from ? selectedMessage.from : 'You → ' + selectedMessage.to}
                </h2>
                <p className="text-xs text-gray-500">
                  {selectedMessage.timestamp.toLocaleString([], {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <div className="flex space-x-2">
                {view === 'inbox' && !selectedMessage.isTrash && (
                  <button
                    onClick={() => deleteMessage(selectedMessage.id)}
                    className="text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors"
                    aria-label="Delete message"
                  >
                    <Trash2 size={18} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Message content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <p className="whitespace-pre-wrap leading-relaxed">{selectedMessage.content}</p>
            </div>
          </div>

          {/* Reply area */}
          <div className="bg-background p-4 border-t border-gray-200 rounded-b-lg">
            <div className="flex flex-col space-y-2">
              {isMessageSent && (
                <div className="bg-green-50 text-green-700 py-2 px-3 rounded-md text-sm flex items-center">
                  <div className="mr-2">✓</div>
                  Message sent successfully
                </div>
              )}
              <div className="flex items-center">
                <textarea
                  ref={messageInputRef}
                  rows="2"
                  placeholder="Type your reply..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isSending || !newMessage.trim()}
                  className={`ml-2 bg-primary-500 text-background p-3 rounded-lg hover:bg-primary-600 transition-colors ${
                    isSending || !newMessage.trim() ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="text-xs text-gray-500 px-1">
                Press Enter to send, Shift+Enter for a new line
              </p>
            </div>
          </div>
        </>
      ) : showMessageDetail ? (
        /* New Message Form */
        <div className="flex-1 flex flex-col bg-background rounded-lg">
          <div className="bg-background p-4 shadow-sm border-b border-gray-200 rounded-t-lg">
            <h2 className="font-medium text-lg">New Message</h2>
          </div>
          <div className="flex-1 p-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Recipient:</label>
              <input
                ref={phoneInputRef}
                type="text"
                placeholder="Phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">Message:</label>
              <textarea
                placeholder="Type your message..."
                rows="8"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              ></textarea>
            </div>
            {isMessageSent && (
              <div className="bg-green-50 text-green-700 py-2 px-4 rounded-md text-sm flex items-center mb-4">
                <div className="mr-2">✓</div>
                Message sent successfully
              </div>
            )}
            <button
              onClick={handleSendMessage}
              disabled={isSending || !newMessage.trim() || !phoneNumber.trim()}
              className={`bg-primary-500 text-background px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center w-full ${
                isSending || !newMessage.trim() || !phoneNumber.trim() ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Send size={18} className="mr-2" />
              Send Message
            </button>
          </div>
        </div>
      ) : !isMobileView ? (
        /* Empty state - No message selected */
        <div className="flex flex-col items-center justify-center h-full text-gray-500 bg-background rounded-lg">
          <MessageSquare size={64} className="mb-4 opacity-30" />
          <h3 className="text-xl font-medium mb-2">No message selected</h3>
          <p className="text-center text-gray-400 max-w-xs">
            Select a message from the list to view its contents or compose a new message
          </p>
          <button
            onClick={() => {
              setSelectedMessage(null);
              setShowMessageDetail(true);
            }}
            className="mt-6 bg-primary-500 text-background px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center"
          >
            <Send size={16} className="mr-2" />
            New Message
          </button>
        </div>
      ) : null}

      {/* New Message floating button */}
      {!showMessageDetail && (
        <div className="fixed bottom-6 right-6">
          <button
            onClick={() => {
              setSelectedMessage(null);
              setShowMessageDetail(true);
            }}
            className="bg-primary-500 text-background p-4 rounded-full shadow-lg hover:bg-primary-600 transition-colors flex items-center justify-center"
            aria-label="New message"
          >
            <Send size={24} />
          </button>
        </div>
      )}
    </div>
  );
}