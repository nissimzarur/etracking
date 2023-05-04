import systemColors from '@tracking/assets/styles/system-colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#696969',
  },
  dateInvalid: {
    color: systemColors.invalid,
    fontSize: 12,
  },
});
