import {Linking} from 'react-native';

const toMailId = 'info@redpositive.in';

const linkEmailApp = ({name, ph, email, message}) => {
  const emailBody =
    'Name: ' + name + '\nPhone Number: ' + ph + '\nMessage:\t' + message;
  return Linking.openURL('mailto:' + toMailId + '?body=' + emailBody);
};

export default linkEmailApp;
