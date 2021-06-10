import React, { useState } from 'react'
import './calcstyle.css'

// export default () => {
    // declare state
    // const [input1, setInput1] = useState('')
    // const [input2, setInput2] = useState('')
    // const [operator, setOperator] = useState('*')
    // const [result, setResult] = useState('')
    // const [error, setError] = useState('')


    const Calculate = () => {
        // if (operator === "times") {
        //     return setResult(Number(input1) * (Number(input2))
        // }
       
       
        return (
            <div className="calc">
                <form>
                    <input className="val1" type="text"/>
                </form>

            <select className="op">
                <option value="times">*</option>
                <option value="divide">÷</option>
                <option value="add">+</option>
                <option value="minus">-</option>
            </select>

                <form>
                    <input className="val2" type="text" />
                </form>
                <form>

                    <input className="equal" type="button" value="="></input>
                </form>

                <form>
                    <input className="result" readOnly/>
                </form>
            </div>
        )
            
        
            
        }
    


    

export default Calculate
