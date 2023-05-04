import { IExpenseBody, IExpenseBodyOpt } from "@tracking/stores/expense-store";
import { ForwardedRef } from "react";
import { ViewProps } from "react-native";

export default interface ExpenseFormProps extends ViewProps {
    setChildState?:(state: any)=>void;
    data: IExpenseBody;
    onDataChange: (data: IExpenseBodyOpt) => void;
    buttonAlwaysActive?: boolean;
}