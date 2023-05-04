import ExpenseStore, {IExpenseBody, IExpenseBodyOpt} from '@tracking/stores/expense-store';
import {useState} from 'react';
import { Alert } from 'react-native';

function useCreateExpense({navigation}:{navigation:any}) {
  const [expense, setExpense] = useState<IExpenseBody>({
    amount: 0,
    date: '',
    title: '',
  });

  const handleExpenseChange = (expense: IExpenseBodyOpt) => {
    setExpense(prevState => ({...prevState, ...expense}));
  };

  const storeExpense = ()=>{
    if(!expense.amount || !expense.date || !expense.title) return Alert.alert('Please fill all the fields');
    ExpenseStore.addExpense(expense);
    navigation.goBack();
  }

  return {
    handleExpenseChange,
    handleInsert:storeExpense,
    expense
  };
}
export default useCreateExpense;