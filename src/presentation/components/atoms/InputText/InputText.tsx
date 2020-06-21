import React from 'react'

type TProp = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RadioButton: React.FC<TProp> = ({ value, onChange }) => {
  return (
    <input type="text" value={value} onChange={(event) => onChange(event)} />
  )
}

export default RadioButton
