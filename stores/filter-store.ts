import {makeAutoObservable, runInAction} from 'mobx';
import { IExpenseBody } from './expense-store';

class FilterStore {
  constructor() {
    makeAutoObservable(this);
  }

  public filterParams:IExpenseBody = {
    title:"",
    amount:0,
    date:''
  }

  async setFilter(filterParams:IExpenseBody): Promise<void> {
    runInAction(async () => {
        this.filterParams = {...this.filterParams, ...filterParams}
    });
  }
}
export default new FilterStore();
