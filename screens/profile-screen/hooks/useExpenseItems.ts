import expenseStore from "@tracking/stores/expense-store";

function useExpenseItems(){
    const {expenses} = expenseStore;

    return {
        expensesItems:expenses.length
    }
}
export default useExpenseItems;