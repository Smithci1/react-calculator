import React, { useState } from 'react'

export default () => {
    // declare state
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [operator, setOperator] = useState('*')
    const [result, setResult] = useState('')
    const [error, setError] = useState('')
}
