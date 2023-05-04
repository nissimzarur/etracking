import ExpenseStore from "@tracking/stores/expense-store";
import AuthStore from "@tracking/stores/auth-store";
function useSignOut({navigation}:any){

    const signOut = async ()=>{
        await ExpenseStore.clearExpenses();
        await AuthStore.signout();
        return navigation.replace('Welcome');
    }
    return {
        signOut
    }
}
export default useSignOut;