import ExpenseStore, {
  IExpense,
  IExpenseBodyOpt,
} from '@tracking/stores/expense-store';
import {useMemo, useState} from 'react';

function useEditExpense({route, navigation}: {route: any; navigation: any}) {
  const {expenses} = ExpenseStore;
  const {expenseId} = route.params;
  const initValues = {
    id: expenseId || '',
    amount: 0,
    date: '',
    title: '',
  };

  const expenseInitData: IExpense = useMemo(() => {
    if (!expenses || !expenses.length || !expenseId) return initValues;

    const [expense] = expenses.filter(expense => expense.id === expenseId);
    if (!expense) return initValues;

    return expense;
  }, [expenseId]);
  const [expense, setExpense] = useState<IExpense>(expenseInitData);

  const handleSaveChanges = async () => {
    await ExpenseStore.editExpense(expense);
    navigation.goBack();
  };

  const handleDeleteExpense = ()=> {
    ExpenseStore.removeExpense(expense.id);
    navigation.goBack();
  }

  const handleExpenseChange = (expenseBody: IExpenseBodyOpt) => {
    setExpense(prevState => ({...prevState, ...expenseBody}));
  };

  return {
    expense,
    handleExpenseChange,
    handleSaveChanges,
    handleDeleteExpense
  };
}
export default useEditExpense;
