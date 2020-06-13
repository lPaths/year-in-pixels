import React, { useRef } from 'react'
import styled from 'styled-components'
import { DatePicker } from 'antd'

import { useStore } from 'store'
import { SET_YEAR } from 'store/data'

const StyledDatePicker = styled(DatePicker)`
  margin-left: ${(p) => p.theme.spacing.xs};

  input {
    &::placeholder {
      user-select: none;
    }
  }
`

const RightHeader = () => {
  const [{ data }, dispatch] = useStore()

  const datePickerRef = useRef(null)

  const onDateChange = (date) => {
    dispatch({ type: SET_YEAR, payload: date })
  }

  const onOpenChange = () => {
    datePickerRef.current.blur()
  }

  return (
    <>
      <StyledDatePicker
        ref={datePickerRef}
        value={data.selectedYear}
        onChange={onDateChange}
        onOpenChange={onOpenChange}
        picker='year'
        inputReadOnly
      />
    </>
  )
}

export default RightHeader
