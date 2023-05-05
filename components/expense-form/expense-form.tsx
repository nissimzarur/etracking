import React, {useEffect} from 'react';
import Box from '../controllers/box/box';
import TextInput from '../controllers/text-input/text-input';
import DateInput from '../date-input/date-input';
import Styles from './expense-form.styles';
import useDateValidator from '@tracking/helpers/hooks/useDateValidator';
import ExpenseFormProps from './interfaces';

const ExpenseForm = ({
  data,
  onDataChange,
  buttonAlwaysActive = false,
  children,
  setChildState,
  ...props
}: ExpenseFormProps) => {
  const isDateValid = useDateValidator(data.date);

  useEffect(() => {
    const locaState = {
      isDateValid
    }
    
    if (typeof setChildState === 'function') setChildState({...locaState});
  }, [isDateValid]);

  return (
    <Box style={Styles.formBox} {...props}>
      <TextInput
        defaultValue={String(data.title) || ''}
        placeholder="Title"
        style={Styles.input}
        onChangeText={title => onDataChange({title: title.trim()})}
      />
      <TextInput
        defaultValue={String(data.amount || '')}
        placeholder="Amount"
        style={Styles.input}
        onChangeText={amount => onDataChange({amount: Number(amount.trim())})}
        keyboardType="phone-pad"
      />
      <DateInput
        defaultValue={data.date}
        onChangeText={date => onDataChange({date: date.trim()})}
        invalid={!isDateValid}
        keyboardType="phone-pad"
      />
      {children}
    </Box>
  );
};

export default ExpenseForm;
