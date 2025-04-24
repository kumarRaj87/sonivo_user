import axios from 'axios';

const BASE_URL = 'http://62.169.31.76:3000';

const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  'access-token': localStorage.getItem('authToken')
});

export const callForceApi = {
  getCallForceTasks: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/agent/call_force/get_call_force`, {
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addCallForceTask: async (taskData) => {
    try {
      const response = await axios.post(`${BASE_URL}/agent/call_force/add_force_task`, taskData, {
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteCallForceTask: async (taskId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/agent/call_force/del_task/${taskId}`, {
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getCallForceLogs: async (taskId) => {
    try {
      const response = await axios.get(`${BASE_URL}/agent/call_force/get_log_by_id/${taskId}`, {
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteCallForceLog: async (logId) => {
    try {
      const response = await axios.delete(`${BASE_URL}/agent/call_force/del_call_force_log/${logId}`, {
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateCallForceTaskAgent: async (taskId, callForce) => {
    try {
      const response = await axios.patch(`${BASE_URL}/agent/call_force/update_call_task_agent/${taskId}`, { callForce }, {
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getDeviceToken: async (identity) => {
    try {
      const response = await axios.post(`${BASE_URL}/agent/call_force/get_device_token`, { identity }, {
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getTaskCall: async (taskId) => {
    try {
      const response = await axios.get(`${BASE_URL}/agent/call_force/get_task_call`, {
        data: { task_id: taskId },
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateCallLog: async (logData) => {
    try {
      const response = await axios.post(`${BASE_URL}/agent/call_force/update_call_log`, logData, {
        headers: getAuthHeaders()
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};