/**
 * Generate sample data for the messaging application
 * @returns {Array} Array of message objects
 */
export function generateSampleData() {
    return [
      {
        id: 1,
        from: '+1234567890',
        content: "Hey there! Just checking in to see how you're doing today.",
        timestamp: new Date(2025, 3, 28, 10, 15),
        status: 'delivered',
        isTrash: false,
        unread: true
      },
      {
        id: 2,
        from: '+1987654321',
        content: 'The meeting has been rescheduled to tomorrow at 2 PM. Please confirm your availability.',
        timestamp: new Date(2025, 3, 28, 9, 30),
        status: 'delivered',
        isTrash: false,
        unread: true
      },
      {
        id: 3,
        from: '+1555123456',
        content: 'Your package has been delivered. Thank you for shopping with us!',
        timestamp: new Date(2025, 3, 27, 14, 45),
        status: 'delivered',
        isTrash: false,
        unread: false
      },
      {
        id: 4,
        to: '+1555123456',
        content: 'Thanks for the update. I received the package.',
        timestamp: new Date(2025, 3, 27, 15, 20),
        status: 'read',
        isTrash: false,
        unread: false
      },
      {
        id: 5,
        from: '+1444555666',
        content: 'Your appointment is confirmed for Friday at 11 AM.',
        timestamp: new Date(2025, 3, 26, 17, 10),
        status: 'delivered',
        isTrash: false,
        unread: false
      },
      {
        id: 6,
        from: '+1222333444',
        content: 'Reminder: Your bill payment is due in 2 days.',
        timestamp: new Date(2025, 3, 26, 12, 0),
        status: 'delivered',
        isTrash: false,
        unread: false
      },
      {
        id: 7,
        to: '+1222333444',
        content: 'Payment completed. Thanks for the reminder!',
        timestamp: new Date(2025, 3, 26, 12, 30),
        status: 'read',
        isTrash: false,
        unread: false
      },
      {
        id: 8,
        from: '+1777888999',
        content: 'The team lunch is tomorrow at 1 PM. Bring your appetite!',
        timestamp: new Date(2025, 3, 25, 16, 45),
        status: 'delivered',
        isTrash: false,
        unread: false
      },
      {
        id: 9,
        from: '+1666777888',
        content: 'Your recent transaction of $50 was completed successfully.',
        timestamp: new Date(2025, 3, 25, 10, 20),
        status: 'delivered',
        isTrash: false,
        unread: false
      },
      {
        id: 10,
        from: '+1999888777',
        content: 'Weather alert: Thunderstorms expected this evening.',
        timestamp: new Date(2025, 3, 24, 18, 15),
        status: 'delivered',
        isTrash: true,
        unread: false
      },
      {
        id: 11,
        to: '+1999888777',
        content: 'Thanks for the alert! Will stay indoors.',
        timestamp: new Date(2025, 3, 24, 18, 30),
        status: 'sent',
        isTrash: false,
        unread: false
      },
      {
        id: 12,
        from: '+1333444555',
        content: 'Your subscription is about to renew. Reply STOP to cancel.',
        timestamp: new Date(2025, 3, 23, 9, 0),
        status: 'delivered',
        isTrash: false,
        unread: false
      },
      {
        id: 13,
        from: '+1888999000',
        content: 'Happy birthday! Enjoy your special day!',
        timestamp: new Date(2025, 3, 22, 0, 1),
        status: 'delivered',
        isTrash: false,
        unread: false
      },
      {
        id: 14,
        to: '+1888999000',
        content: 'Thank you for the birthday wishes!',
        timestamp: new Date(2025, 3, 22, 10, 15),
        status: 'read',
        isTrash: false,
        unread: false
      },
      {
        id: 15,
        from: '+1444333222',
        content: 'Your delivery is running 30 minutes late. We apologize for the inconvenience.',
        timestamp: new Date(2025, 3, 21, 14, 50),
        status: 'delivered',
        isTrash: false,
        unread: false
      }
    ];
  }
  
  /**
   * Generate a message status indicator text
   * @param {string} status - Message status ('sent', 'delivered', 'read', 'failed')
   * @returns {string} Formatted status text
   */
  export function getStatusText(status) {
    switch (status) {
      case 'sent':
        return 'Sent';
      case 'delivered':
        return 'Delivered';
      case 'read':
        return 'Read';
      case 'failed':
        return 'Failed to send';
      default:
        return '';
    }
  }
  
  /**
   * Format phone number for display
   * @param {string} phoneNumber - Raw phone number
   * @returns {string} Formatted phone number
   */
  export function formatPhoneNumber(phoneNumber) {
    if (!phoneNumber) return '';
    
    // Remove non-numeric characters
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    // Format based on length
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    } else if (cleaned.length === 11 && cleaned[0] === '1') {
      return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
    } else {
      // Return with country code format if longer
      if (cleaned.length > 10) {
        return `+${cleaned.slice(0, cleaned.length-10)} ${cleaned.slice(-10, -7)} ${cleaned.slice(-7, -4)}-${cleaned.slice(-4)}`;
      }
      // Return as is for shorter numbers
      return phoneNumber;
    }
  }
  
  /**
   * Group messages by date for display in conversation view
   * @param {Array} messages - Array of message objects
   * @returns {Object} Object with date keys and arrays of messages
   */
  export function groupMessagesByDate(messages) {
    const groups = {};
    
    messages.forEach(message => {
      const date = message.timestamp.toDateString();
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
    });
    
    // Sort messages within each group
    Object.keys(groups).forEach(date => {
      groups[date].sort((a, b) => a.timestamp - b.timestamp);
    });
    
    return groups;
  }
  
  /**
   * Format date for message groups
   * @param {Date} date - Date object
   * @returns {string} Formatted date string
   */
  export function formatMessageDate(date) {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString(undefined, { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  }