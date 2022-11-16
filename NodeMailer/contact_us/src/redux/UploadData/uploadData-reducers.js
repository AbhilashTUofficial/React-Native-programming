import linkmailer from '../../mailer/linkmailer';

const INITIAL_STATE = {
  name: '',
  ph: '',
  email: '',
  message: '',
};

const uploadDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SUBMIT_DATA':
      var name = action.payload.name;
      var ph = action.payload.ph;
      var email = action.payload.email;
      var message = action.payload.message;

      state.name = name;
      state.ph = ph;
      state.email = email;
      state.message = message;
      linkmailer(name, ph, email, message);

      // sentMail(name, ph, email, message, password);

      return {...state};

    default:
      return state;
  }
};

export default uploadDataReducer;
