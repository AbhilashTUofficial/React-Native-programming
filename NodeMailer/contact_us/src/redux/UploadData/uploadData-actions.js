export const submitData = (name, ph, email, message) => {
  return {
    type: 'SUBMIT_DATA',
    payload: {
      name: name,
      ph: ph,
      email: email,
      message: message,
    },
  };
};
