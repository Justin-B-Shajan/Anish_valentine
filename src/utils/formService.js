// Formspree service
// Replace YOUR_FORM_ID with your actual Formspree form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgolaber';

export const submitResponse = async (data) => {
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        response: data.response || 'YES!',
        timestamp: new Date().toLocaleString(),
        message: data.message || 'Your girlfriend accepted your proposal! 💕',
        name: data.name || '',
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error: error.message };
  }
};
