import React, {useState} from 'react';
import Screen from '@tracking/components/screen-base/screen-base';
import Styles from './filters-screen.styles';
import Box from '@tracking/components/controllers/box/box';
import Text from '@tracking/components/controllers/text/text';
import {TouchableOpacity, View} from 'react-native';
import Button from '@tracking/components/controllers/button/button';
import CloseIcon from '@tracking/assets/icons/close.svg';
import useFilterExpenses from './hooks/useFilterExpenses';
import ExpenseForm from '@tracking/components/expense-form/expense-form';

const FiltersScreen = ({navigation}: any) => {
  const {filter, handleClean, handleFilterChange, handleFilter} =
    useFilterExpenses({navigation});

  const handleOnClose = () => {
    navigation.goBack();
  };
  const [childState, setChildState] = useState<{isDateValid: boolean}>({
    isDateValid: true,
  });

  return (
    <Screen style={Styles.modalBox}>
      <Box style={Styles.modalContentBox}>
        <Box style={Styles.modalHeader}>
          <Text style={Styles.cleanButtonText} onPress={handleClean}>
            Clean
          </Text>
          <Text style={Styles.modalTitle}>Filters</Text>
          <TouchableOpacity onPress={handleOnClose}>
            <CloseIcon />
          </TouchableOpacity>
        </Box>
        <ExpenseForm
          onDataChange={handleFilterChange}
          data={filter}
          setChildState={setChildState}>
          <Button
            label="Filter"
            style={Styles.button}
            onPress={handleFilter}
            disabled={!childState.isDateValid}
          />
        </ExpenseForm>
      </Box>
    </Screen>
  );
};

export default FiltersScreen;
