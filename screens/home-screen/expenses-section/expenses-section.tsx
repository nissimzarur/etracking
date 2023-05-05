import {FlatList} from 'react-native';
import React from 'react';
import Box from '@tracking/components/controllers/box-temp/box';
import ExpensesSectionProps from './interfaces';
import ExpenseSection from './expense-section/expense-section';

const ExpensesSection = ({expenses, handleOnEditPress}: ExpensesSectionProps) => {
  if (!expenses || !expenses.length) return <Box />;

  return (
    <Box>
      <FlatList
        style={{height: '80%'}}
        data={expenses}
        renderItem={({item}) => <ExpenseSection expense={item} handleOnEditPress={handleOnEditPress}/>}
      />
    </Box>
  );
};

export default ExpensesSection;
