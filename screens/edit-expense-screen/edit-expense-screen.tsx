import React, {useState} from 'react';
import Screen from '@tracking/components/screen-base/screen-base';
import Box from '@tracking/components/controllers/box/box';
import Text from '@tracking/components/controllers/text-temp/text';
import Styles from './edit-expense-screen.styles';
import ExpenseForm from '@tracking/components/expense-form/expense-form';
import useEditExpense from './hooks/useEditExpense';
import Button from '@tracking/components/controllers/button-temp/button';
import {observer} from 'mobx-react';

const EditExpenseScreen = ({route, navigation}: any) => {
  const {expense, handleExpenseChange, handleSaveChanges, handleDeleteExpense} =
    useEditExpense({
      route,
      navigation,
    });
  const [childState, setChildState] = useState<{isDateValid: boolean}>({
    isDateValid: true,
  });

  return (
    <Screen>
      <Box style={Styles.titleBox}>
        <Text style={Styles.title}>Edit Expense</Text>
      </Box>
      <ExpenseForm
        setChildState={setChildState}
        data={expense}
        onDataChange={handleExpenseChange}
        style={Styles.form}>
        <Box style={Styles.buttonBox}>
          <Button
            label="Save"
            onPress={handleSaveChanges}
            disabled={!childState.isDateValid}
          />
          <Button label="Delete" onPress={handleDeleteExpense} type="delete" />
        </Box>
      </ExpenseForm>
    </Screen>
  );
};

export default observer(EditExpenseScreen);
