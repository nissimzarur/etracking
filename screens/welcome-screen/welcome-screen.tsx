import React, {useEffect} from 'react';
import Screen from '@tracking/components/screen-base/screen-base';
import Box from '@tracking/components/controllers/box/box';
import TextInput from '@tracking/components/controllers/text-input/text-input';
import Styles from './welcome-screen.styles';
import Button from '@tracking/components/controllers/button/button';
import useSaveUserName from './hooks/useSaveUserName';

const WelcomeScreen = ({navigation}:{navigation:any}) => {
  const {handleLogin, setFullname } = useSaveUserName({navigation});

  return (
    <Screen>
      <Box style={Styles.nameInputBox}>
        <TextInput placeholder="Enter Name" onChangeText={setFullname} />
      </Box>
      <Box style={Styles.loginBtnBox}>
        <Button label="Login" onPress={handleLogin} />
      </Box>
    </Screen>
  );
};

export default WelcomeScreen;
