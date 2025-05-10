import axios from 'axios';

const BASE_URL = 'https://vokal-api.oyelabs.com';

const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  'access-token': localStorage.getItem('authToken')
});

export const phonebookApi = {
  // Get all phonebooks
  getPhonebooks: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/phonebook/get_my_phonebook`, {
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add new phonebook
  addPhonebook: async (name) => {
    try {
      const response = await axios.post(`${BASE_URL}/phonebook/add_phonebook`, 
        { name },
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Add single contact
  addContact: async (contactData) => {
    try {
      const response = await axios.post(`${BASE_URL}/phonebook/add_single_contact`, 
        contactData,
        { headers: getAuthHeaders() }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Import contacts via CSV
  importContacts: async (file, id, phonebook_name) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('id', id);
      formData.append('phonebook_name', phonebook_name);

      const response = await axios.post(`${BASE_URL}/phonebook/import_contacts`,
        formData,
        {
          headers: {
            ...getAuthHeaders(),
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get all contacts
  getContacts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/phonebook/get_my_contacts`, {
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};