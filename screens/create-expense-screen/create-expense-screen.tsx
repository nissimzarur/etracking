import React from 'react';
import Screen from '@tracking/components/screen-base/screen-base';
import Text from '@tracking/components/controllers/Text/text';
import Box from '@tracking/components/controllers/Box/box';
import Styles from './create-expense-screen.styles';
const CreateExpenseScreen = () => {
  return (
    <Screen>
      <Box style={Styles.titleBox}>
        <Text style={Styles.title}>Create Expense</Text>
      </Box>
      <Box></Box>
    </Screen>
  );
};

export default CreateExpenseScreen;
