import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStore from '@tracking/stores/auth-store';
import {useCallback, useEffect, useState} from 'react';

function useSaveUserName({navigation}: {navigation: any}) {
  const [fullname, setFullname] = useState<string>('');

  const handleStoreFullname = () => {
    if (!fullname) return;
    AuthStore.setUsername(fullname);
    navigation.replace('Main');
  };

  const handleUserExit = useCallback(async () => {
    const savedUserFullname = await AsyncStorage.getItem('userFullName');
    if (
      !savedUserFullname ||
      typeof savedUserFullname !== 'string' ||
      savedUserFullname === ''
    )
      return false;

    AuthStore.setUsername(savedUserFullname);
    return navigation.replace('Main');
  }, []);

  const handleSetFullname = (fullname: string) => {
    setFullname(fullname || '');
  };

  useEffect(() => {
    handleUserExit();
  }, []);

  return {
    setFullname: handleSetFullname,
    handleLogin: handleStoreFullname,
  };
}

export default useSaveUserName;
