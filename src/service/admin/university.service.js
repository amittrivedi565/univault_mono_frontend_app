import axios from 'axios';


export const Get = async () => {
  try {
    const response = await axios.get('http://localhost:3300/close/university');
    return response.data
  } catch (error) {
    console.error('Error fetching form data:', error);
    return { success: false, message: 'Error fetching form data' };
  }
};

export const Post = async (formData) => {
  try {
    const response = await axios.post('http://localhost:3300/close/university', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return { success: true, message: 'Form submitted successfully!' };
    } else {
      return { success: false, message: 'Error submitting form!' };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Error submitting form!' };
  }
};

export const Put = async (formData) => {
  try {
    const response = await axios.put('http://localhost:3300/close/university', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return { success: true, message: 'Data updated successfully!' };
    } else {
      return { success: false, message: 'Error updating data!' };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Error updating data!' };
  }
};

export const Delete = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3300/close/university/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return { success: true, message: 'Data deleted successfully!' };
    } else {
      return { success: false, message: 'Error deleting data!' };
    }
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'Error deleting data!' };
  }
};
