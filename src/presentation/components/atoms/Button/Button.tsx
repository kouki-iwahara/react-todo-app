import React from 'react'

type TProp = {
  text: string
  onClick: () => void
  disable?: boolean
}

const Button: React.FC<TProp> = ({ text, onClick, disable }) => {
  return (
    <button onClick={onClick} disabled={disable}>
      {text}
    </button>
  )
}

export default Button
