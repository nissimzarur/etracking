import React, { useState } from 'react';
import Screen from '@tracking/components/screen-base/screen-base';
import Text from '@tracking/components/controllers/text/text';
import Box from '@tracking/components/controllers/box/box';
import Styles from './create-expense-screen.styles';
import Button from '@tracking/components/controllers/button/button';
import useCreateExpense from './hooks/useCreateExpense';
import ExpenseForm from '@tracking/components/expense-form/expense-form';

const CreateExpenseScreen = ({navigation}: {navigation: any}) => {
  const {expense, handleExpenseChange, handleInsert} = useCreateExpense({
    navigation,
  });
  const [childState, setChildState] = useState<{isDateValid: boolean}>({isDateValid:true});

  return (
    <Screen>
      <Box style={Styles.titleBox}>
        <Text style={Styles.title}>Create Expense</Text>
      </Box>
      <ExpenseForm
        setChildState={setChildState}
        onDataChange={handleExpenseChange}
        data={expense}
        style={Styles.form}>
        <Box style={Styles.buttonBox}>
          <Button
            label="Create"
            onPress={handleInsert}
            disabled={!childState.isDateValid}
          />
        </Box>
      </ExpenseForm>
    </Screen>
  );
};

export default CreateExpenseScreen;
