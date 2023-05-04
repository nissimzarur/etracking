import { IExpense } from "@tracking/stores/expense-store";

export default interface ExpenseRowProps{
    handleOnEditPress:(expenseId:string)=>void;
    expense:IExpense;
}