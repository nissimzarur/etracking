import React from 'react';
import Box from '@tracking/components/controllers/box-temp/box';
import ExpenseSectionProps from './interfaces';
import Text from '@tracking/components/controllers/text/text';
import Styles from './expense-section.styles';
import {FlatList} from 'react-native';
import ExpenseRow from './expense-row/expense-row';

const ExpenseSection = ({expense, handleOnEditPress}: ExpenseSectionProps) => {
  if (!expense) return <Box />;
  const [objectKey] = Object.keys(expense);

  return (
    <Box>
      <Box>
        <Box style={Styles.sectionTitleBox}>
          <Text style={Styles.sectionTitle}>{objectKey}</Text>
        </Box>
        <FlatList
          data={expense[objectKey]}
          renderItem={({item}) => <ExpenseRow expense={item} handleOnEditPress={handleOnEditPress}/>}
          ItemSeparatorComponent={() => <Box style={Styles.separator}/>}
        />
      </Box>
    </Box>
  );
};

export default ExpenseSection;
