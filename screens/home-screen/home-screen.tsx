import React from 'react';
import Screen from '@tracking/components/screen-base/screen-base';
import { observer } from 'mobx-react';
import useCalcExpenses from './hooks/useCalcExpenses';
import TotalExpensesHeader from './total-expenses-header/total-expenses-header';
import ExpensesSection from './expenses-section/expenses-section';
import useExpensesByDates from './hooks/useExpensesByDates';
import Filter from '@tracking/components/filter/filter';
import Box from '@tracking/components/controllers/box-temp/box';
import Styles from "./home-screen.styles"
import useFilterExpenses from './hooks/useFilterExpenses';

const HomeScreen = ({navigation}:any) => {
  const totalExpenses = useCalcExpenses();
  const filterdExpenses = useFilterExpenses();
  const expensesByDates = useExpensesByDates(filterdExpenses)
  const handleOnFilterPress = ()=>{
    navigation.navigate('Filters')
  }
  const handleOnEditPress = (expenseId:string)=>{
    navigation.navigate('EditExpense', {expenseId})
  }
  return (
    <Screen>
      <TotalExpensesHeader totalExpenses={totalExpenses} />
      <Box style={Styles.filterBox}>
        <Filter onPress={handleOnFilterPress}/>
      </Box>
      <ExpensesSection expenses={expensesByDates} handleOnEditPress={handleOnEditPress}/>
    </Screen>
  );
};

export default observer(HomeScreen);
