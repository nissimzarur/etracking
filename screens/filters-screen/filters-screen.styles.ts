import systemColors from '@tracking/assets/styles/system-colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  modalContentBox: {
    height: '50%',
    width: '100%',
    backgroundColor: systemColors.screen.background,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 22,
  },
  cleanButtonText: {
    color: systemColors.primary,
  },
  button: {
    alignSelf: 'center',
    marginTop:'20%',
    marginBottom: 20,
  }
});
