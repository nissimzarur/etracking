import React from 'react';
import Screen from '@tracking/components/screen-base/screen-base';
import Box from '@tracking/components/controllers/box/box';
import {observer} from 'mobx-react';
import useExpenseItems from './hooks/useExpenseItems';
import Text from '@tracking/components/controllers/text/text';
import Styles from './profile-screen.styles';
import useSignOut from './hooks/useSignOut';
import {TouchableOpacity} from 'react-native';

const ProfileScreen = ({navigation}: any) => {
  const {expensesItems} = useExpenseItems();
  const {signOut} = useSignOut({navigation});

  return (
    <Screen>
      <Box style={Styles.rowBoxContainer}>
        <Box style={Styles.rowBox}>
          <Text style={Styles.rowTitle}>Total Expenses Item:</Text>
          <Text style={Styles.rowValue}>{expensesItems}</Text>
        </Box>
        <Box style={Styles.rowBox}>
          <TouchableOpacity onPress={signOut}>
            <Text style={Styles.rowTitle}>Sign out</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </Screen>
  );
};

export default observer(ProfileScreen);
