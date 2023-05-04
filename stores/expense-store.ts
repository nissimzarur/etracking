import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeAutoObservable, runInAction} from 'mobx';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';

class ExpenseStore {
  constructor() {
    makeAutoObservable(this);
    this.loadExpenses();
  }

  public expenses: IExpense[] = [];

  private async loadExpenses() {
    const JSONExpenses = await AsyncStorage.getItem('expenses');
    if (JSONExpenses?.length) {
      runInAction(() => {
        this.expenses = JSON.parse(JSONExpenses);
      });
    }
  }

  async addExpense(expenseBody: IExpenseBody): Promise<void> {
    runInAction(async () => {
      const expense: IExpense = {...expenseBody, id: uuid()};
      this.expenses.push(expense);
      await AsyncStorage.setItem('expenses', JSON.stringify(this.expenses));
    });
  }

  async removeExpense(expenseId:string): Promise<void> {
    runInAction(async () => {
      this.expenses = this.expenses.filter(
        storeExpense => storeExpense.id !== expenseId,
      );
      await AsyncStorage.setItem('expenses', JSON.stringify(this.expenses));
    });
  }

  async editExpense(newExpense:IExpense):Promise<void> {
    if (!newExpense) return;

    if(!this.expenses || !this.expenses.length) return;

    const othersExpenses = this.expenses.filter(
      expense => expense.id !== newExpense.id,
    );

    runInAction(async () => {
      this.expenses = [...othersExpenses, newExpense];
      await AsyncStorage.setItem('expenses', JSON.stringify(this.expenses));
    });
  }

  public async clearExpenses(){
    runInAction(async ()=>{
      this.expenses = [];
      await AsyncStorage.setItem('expenses', JSON.stringify(this.expenses));
    })
    
  }
}
export default new ExpenseStore();

export interface IExpenseBody {
  date: string;
  title: string;
  amount: number;
}
export interface IExpense extends IExpenseBody {
  id: string;
}
export interface IExpenseBodyOpt {
  amount?: number;
  date?: string;
  title?: string;
}
