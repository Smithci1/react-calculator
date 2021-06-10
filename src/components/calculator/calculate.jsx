/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react'
import './calcstyle.css'

// export () => {
    // declare state
    export default () => {
    
    
        const [input1, setInput1] = useState('')
        const [input2, setInput2] = useState('')
        const [operator, setOperator] = useState('*')
        const [result, setResult] = useState('')
        const [error, setError] = useState('')
    const Calculator = () => {
            

            if (operator === "minus"){
               
                return setResult(Number(input1) - Number(input2))
               
            }else if (operator ===  "multiply"){
                return setResult(Number(input1) * Number(input2))
                
            }else if (operator === "divide"){
               return setResult(Number(input1) / Number(input2))
               
            }else if (operator === "add"){
                return setResult(Number(input1) + Number(input2))
                
            }else
                return setError('please choose a valid operator')
        }
        
        return (
            <div className="calc">
                <form>
                    <input className="val1" value={input1} onChange={event => setInput1(event.target.value)} type="text"/>
                </form>

            <select className="op" value={operator} onChange={event => setOperator(event.target.value)}>
                <option value="times">*</option>
                <option value="divide">÷</option>
                <option value="add">+</option>
                <option value="minus">-</option>
            </select>

                <form>
                    <input className="val2" value={input2} onChange={event => setInput2(event.target.value)} type="text" />
                </form>
                <form>

                    <input className="equal" type="button" value="=" onClick={Calculator}></input>
                </form>

                <form>
                    <input className="result" value={result} readOnly/>
                </form>
            </div>
        )
    }
            