import React from 'react'
import Box from '@tracking/components/controllers/box/box'
import FilterIcon from "@tracking/assets/icons/filter.svg"
import Text from '@tracking/components/controllers/text/text'
import Styles from "./filter.styles"
import { TouchableOpacity } from 'react-native'
import FilterProps from './interfaces'

const Filter = ({onPress}:FilterProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <Box style={Styles.filterBox}>
        <FilterIcon />
        <Text style={Styles.title}>Filters</Text>
    </Box>
    </TouchableOpacity>
  )
}

export default Filter