import React from 'react'
import Box from '@tracking/components/controllers/box/box'
import TotalExpensesHeaderProps from './interfaces'
import Text from '@tracking/components/controllers/text-temp/text'
import Styles from "./total-expenses-header.styles"

const TotalExpensesHeader = ({totalExpenses}:TotalExpensesHeaderProps) => {
    const textWithExpenses = `Total Expenses: `;
  return (
    <Box style={Styles.textBox}>
        <Text style={Styles.textBold}>{textWithExpenses}</Text>
        <Text style={Styles.textRegular}>{`$${totalExpenses}`}</Text>
    </Box>
  )
}

export default TotalExpensesHeader