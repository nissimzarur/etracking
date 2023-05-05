import React from 'react';
import Box from '@tracking/components/controllers/box/box';
import Styles from './expense-row.styles';
import ExpenseRowProps from './interfaces';
import Text from '@tracking/components/controllers/text-temp/text';
import {TouchableOpacity} from 'react-native';

const ExpenseRow = ({handleOnEditPress ,expense}: ExpenseRowProps) => {
  return (
    <TouchableOpacity onPress={()=>handleOnEditPress(expense.id)}>
      <Box style={Styles.expenseRow}>
        <Text>{expense.title}</Text>
        <Text>${expense.amount.toFixed(2)}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default ExpenseRow;
