import {IExpense} from '@tracking/stores/expense-store';

export default interface ExpenseSectionProps {
  handleOnEditPress:(expenseId:string)=>void;
  expense: {
    [key: string]: IExpense[];
  };
}
