import { 
  Search, Inbox, Trash2, MessageSquare, RefreshCcw, 
  X, MoreVertical, Check, AlertTriangle, ChevronRight
} from 'lucide-react';

export default function MessageList({
  view,
  setView,
  filteredMessages,
  searchQuery,
  setSearchQuery,
  selectedMessages,
  toggleMessageSelect,
  moveToTrash,
  restoreFromTrash,
  deleteMessages,
  receiveMessage,
  openMessageDetail,
  isMobileView,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  showMessageDetail,
  backToList
}) {

  // Format dates for display
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

  return (
    <div className="bg-background shadow-md rounded-lg w-full md:w-64 xl:w-72 flex flex-col">
      {/* Sidebar navigation - Desktop only */}
      {!isMobileView && (
        <div className="p-4 mt-2">
          <button
            onClick={() => setView('inbox')}
            className={`flex items-center space-x-2 p-2 w-full text-left rounded transition-colors ${
              view === 'inbox' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'
            }`}
          >
            <Inbox size={18} />
            <span>Inbox</span>
          </button>
          <button
            onClick={() => setView('trash')}
            className={`flex items-center space-x-2 p-2 w-full text-left rounded transition-colors ${
              view === 'trash' ? 'bg-blue-100 text-blue-700 font-medium' : 'hover:bg-gray-100'
            }`}
          >
            <Trash2 size={18} />
            <span>Trash</span>
          </button>
          <button
            onClick={receiveMessage}
            className="flex items-center space-x-2 p-2 w-full text-left hover:bg-gray-100 rounded mt-4 transition-colors"
          >
            <MessageSquare size={18} />
            <span>Receive Message</span>
          </button>
        </div>
      )}

      {/* Mobile menu toggle */}
      {isMobileView && (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex space-x-2">
            {showMessageDetail && (
              <button 
                onClick={backToList}
                className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-100"
              >
                <ChevronRight size={20} className="transform rotate-180" />
              </button>
            )}
            <h2 className="font-medium text-lg">{view === 'inbox' ? 'Inbox' : 'Trash'}</h2>
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center h-8 w-8 rounded-full hover:bg-gray-100"
          >
            <MoreVertical size={20} />
          </button>
        </div>
      )}

      {/* Mobile menu dropdown */}
      {isMobileView && isMobileMenuOpen && (
        <div className="bg-white shadow-lg rounded-lg absolute top-32 right-4 z-10 w-48 overflow-hidden">
          <button
            onClick={() => { setView('inbox'); setIsMobileMenuOpen(false); }}
            className={`flex items-center space-x-2 p-3 w-full text-left hover:bg-gray-100 ${
              view === 'inbox' ? 'bg-blue-50 text-blue-700' : ''
            }`}
          >
            <Inbox size={18} />
            <span>Inbox</span>
          </button>
          <button
            onClick={() => { setView('trash'); setIsMobileMenuOpen(false); }}
            className={`flex items-center space-x-2 p-3 w-full text-left hover:bg-gray-100 ${
              view === 'trash' ? 'bg-blue-50 text-blue-700' : ''
            }`}
          >
            <Trash2 size={18} />
            <span>Trash</span>
          </button>
          <button
            onClick={() => { receiveMessage(); setIsMobileMenuOpen(false); }}
            className="flex items-center space-x-2 p-3 w-full text-left hover:bg-gray-100"
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
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Action buttons */}
      {selectedMessages.length > 0 && (
        <div className="flex p-3 space-x-2 border-t border-gray-200 bg-gray-50">
          {view === 'inbox' ? (
            <button
              onClick={moveToTrash}
              className="flex items-center justify-center space-x-1 bg-red-50 text-red-600 px-3 py-2 rounded-md hover:bg-red-100 transition-colors w-full"
            >
              <Trash2 size={16} />
              <span>Move to Trash</span>
            </button>
          ) : (
            <>
              <button
                onClick={restoreFromTrash}
                className="flex items-center justify-center space-x-1 bg-green-50 text-green-600 px-3 py-2 rounded-md hover:bg-green-100 transition-colors flex-1"
              >
                <RefreshCcw size={16} />
                <span>Restore</span>
              </button>
              <button
                onClick={deleteMessages}
                className="flex items-center justify-center space-x-1 bg-red-50 text-red-600 px-3 py-2 rounded-md hover:bg-red-100 transition-colors flex-1"
              >
                <X size={16} />
                <span>Delete</span>
              </button>
            </>
          )}
        </div>
      )}

      {/* Message List */}
      <div className="overflow-y-auto flex-1">
        {filteredMessages.length === 0 ? (
          <div className="text-center p-8 text-gray-500">
            <MessageSquare size={40} className="mx-auto mb-3 opacity-30" />
            <p className="font-medium">No messages to display</p>
            <p className="text-sm mt-1 text-gray-400">
              {view === 'inbox' ? 'Your inbox is empty' : 'Trash is empty'}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredMessages.map(message => (
              <div
                key={message.id}
                className="hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div 
                  className="flex items-start p-4" 
                  onClick={() => openMessageDetail(message)}
                >
                  <div className="flex-shrink-0 mr-3 pt-1">
                    <input
                      type="checkbox"
                      checked={selectedMessages.includes(message.id)}
                      onChange={(e) => {
                        e.stopPropagation();
                        toggleMessageSelect(message.id);
                      }}
                      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className={`font-medium truncate ${message.unread ? 'text-black' : 'text-gray-700'}`}>
                        {message.from ? message.from : 'You → ' + message.to}
                      </span>
                      <span className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                        {formatDate(message.timestamp)}
                      </span>
                    </div>
                    <p className={`text-sm truncate ${message.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                      {message.content}
                    </p>
                    {message.status && (
                      <div className="flex items-center mt-1.5">
                        {message.status === 'delivered' ? (
                          <Check size={14} className="text-green-500" />
                        ) : message.status === 'sent' ? (
                          <Check size={14} className="text-blue-500" />
                        ) : message.status === 'read' ? (
                          <div className="flex">
                            <Check size={14} className="text-blue-500" />
                            <Check size={14} className="text-blue-500 -ml-1" />
                          </div>
                        ) : (
                          <AlertTriangle size={14} className="text-yellow-500" />
                        )}
                        <span className="text-xs ml-1 text-gray-500 capitalize">{message.status}</span>
                      </div>
                    )}
                  </div>
                  <ChevronRight size={16} className="text-gray-400 ml-1 mt-1 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}