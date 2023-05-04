import {IExpenseBody, IExpenseBodyOpt} from '@tracking/stores/expense-store';
import FilterStore from '@tracking/stores/filter-store';
import {useState} from 'react';

const initValues = {
  amount: 0,
  date: '',
  title: '',
};

function useFilterExpenses({navigation}:any) {
  const [filter, setFilter] = useState<IExpenseBody>(FilterStore.filterParams || initValues);

  const handleFilterChange = (filter: IExpenseBodyOpt) => {
    setFilter(prevState => ({...prevState, ...filter}));
  };

  const handleClean = () => {
    setFilter(initValues);
  };

  const handleFilter = ()=>{
    FilterStore.setFilter(filter);
    navigation.goBack();
  }

  return {
    filter,
    handleFilterChange,
    handleClean,
    handleFilter
  };
}
export default useFilterExpenses;
