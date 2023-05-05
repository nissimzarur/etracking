import {IExpense} from '@tracking/stores/expense-store';
import { toJS } from 'mobx';
import moment from 'moment';

function useExpensesByDates(expenses: IExpense[]) {
  const expensesByDates: {[key: string]: IExpense[]}[] = [];

  const existsDates: string[] = [];
  const dates = expenses.map(expense => expense.date);


  dates.forEach(date => {
    const relatedExpenses: IExpense[] = [];

    expenses.forEach(expense => {
      if (expense.date === date && !existsDates.includes(expense.date)) {
        relatedExpenses.push(expense);
      }
    });

    if (!relatedExpenses.length) return;

    const expensesByDateObj = {
      [date]: relatedExpenses,
    };

    existsDates.push(date);
    expensesByDates.push(expensesByDateObj);
  });

  const sorted = expensesByDates.sort((a:any,b:any)=>{
    const [aKey]:any = Object.keys(a)
    const [bKey]:any = Object.keys(b)

    const dateA = moment(aKey, 'DD/MM/YYYY').format();
    const dateB = moment(bKey, 'DD/MM/YYYY').format();
    
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  })

  return sorted;
}
export default useExpensesByDates;
