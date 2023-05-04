import {IExpense, IExpenseBody} from '@tracking/stores/expense-store';

function useFilterExpenses(expenses: IExpense[], filterParams: IExpenseBody) {
  if (!expenses) return [];
  if (!filterParams.title && !filterParams.amount && !filterParams.date)
    return expenses;

  let filteredExpenses: IExpense[] = [];

  if (filterParams.amount) {
    filteredExpenses = expenses.filter(
      expense => expense.amount == filterParams.amount,
    );
  }
  if (filterParams.date) {
    filteredExpenses = expenses.filter(expense => {
      return expense.date.includes(filterParams.date);
    });
  }
  if (filterParams.title) {
    filteredExpenses = expenses.filter(
      expense => expense.title.includes(filterParams.title),
    );
  }

  return filteredExpenses;
}
export default useFilterExpenses;
