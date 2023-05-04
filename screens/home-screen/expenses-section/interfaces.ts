import {IExpense} from '@tracking/stores/expense-store';

export default interface ExpensesSectionProps {
  handleOnEditPress:(expenseId:string)=>void;
  expenses: {
    [key: string]: IExpense[];
  }[];
}
