import ExpenseStore from '@tracking/stores/expense-store';

function useCalcExpenses(){
    const { expenses } = ExpenseStore;

    let totalExpenses = 0;
    if(!expenses || !Array.isArray(expenses) || !expenses.length) return totalExpenses;

    expenses.forEach(expense => {
        totalExpenses += expense.amount;
    });

    return totalExpenses;

}
export default useCalcExpenses;