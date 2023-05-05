import React from 'react';
import Box from '@tracking/components/controllers/box-temp/box';
import FilterIcon from '@tracking/assets/icons/filter.svg';
import Text from '@tracking/components/controllers/text/text';
import Styles from './filter.styles';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import FilterProps from './interfaces';

const Filter = ({onPress, ...props}: FilterProps) => {
  let filterStyle:StyleProp<ViewStyle> = {...Styles.filterBox}
  const styleProps: any = props.style?.valueOf();

  if(styleProps){
    filterStyle = {...filterStyle, ...styleProps}
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Box style={filterStyle} {...props}>
        <FilterIcon />
        <Text style={Styles.title}>Filters</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Filter;
