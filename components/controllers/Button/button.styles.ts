import systemColors from '@tracking/assets/styles/system-colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    backgroundColor: systemColors.button.background,
    width: 148,
    height: 48,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 16,
    color:systemColors.button.text,
    fontWeight:'700',
  }
});
