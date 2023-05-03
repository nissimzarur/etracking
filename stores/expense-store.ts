import {makeAutoObservable, runInAction} from 'mobx';
import {uuid} from 'uuidv4';

class ExpenseStore {
  constructor() {
    makeAutoObservable(this);
  }

  public expenses: IExpense[] = [];

  async addExpense(expenseBody: IExpenseBody): Promise<void> {
    runInAction(() => {
      const expense: IExpense = {...expenseBody, id: uuid()};
      this.expenses.push(expense);
    });
  }
}
export default new ExpenseStore();

interface IExpenseBody {
  date: string;
  title: string;
  amount: number;
}
interface IExpense extends IExpenseBody {
  id: string;
}
