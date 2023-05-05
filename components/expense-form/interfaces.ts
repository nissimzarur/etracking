import { IExpenseBody, IExpenseBodyOpt } from "@tracking/stores/expense-store";
import { ViewProps } from "react-native";

export default interface ExpenseFormProps extends ViewProps {
    data: IExpenseBody;
    onDataChange: (data: IExpenseBodyOpt) => void;
    buttonAlwaysActive?: boolean;
    setChildState?:(state: any)=>void;
}