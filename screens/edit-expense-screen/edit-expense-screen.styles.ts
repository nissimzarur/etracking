import systemColors from '@tracking/assets/styles/system-colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  titleBox: {
    alignItems: 'center',
    marginTop: 34,
  },
  title: {
    fontSize: 22,
    color: systemColors.modal.title,
  },
  form: {
    marginTop:50,
    rowGap:20,
    alignItems:'center'
  },
  buttonBox:{
    marginTop:'70%',
    alignItems:'center',
    rowGap:10
  }
});
