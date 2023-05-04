import Box from '../controllers/box/box';
import Styles from './date-input.styles';
import DateInputProps from './interfaces';
import Text from '../controllers/text/text';
import TextInput from '../controllers/text-input/text-input';

const DateInput = ({invalid = false, ...props}: DateInputProps) => {
  return (
    <Box>
      <TextInput
        placeholder="Date (01/01/2001)"
        style={Styles.input}
        {...props}
      />
      {invalid ? (
        <Text style={Styles.dateInvalid}>
          Please follow the format of dd/mm/yyyy
        </Text>
      ) : (
        <Box />
      )}
    </Box>
  );
};

export default DateInput;
