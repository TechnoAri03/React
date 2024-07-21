import React, { useRef, useState } from 'react'
import './quiz.css'
import { data } from './assets/ques';


const Quiz = () => {

    let [index, setIndex] = useState(0);
    // let [level,setLevel]= useState(0)
    let [question, setQuestion] = useState(data[index]);
    let [lock, setLock] = useState(false)
    let [score, setScore] = useState(0)
    let [result, setResult] = useState(false)

    let option1 = useRef(null)
    let option2 = useRef(null)
    let option3 = useRef(null)
    let option4 = useRef(null)

    let option_array = [option1, option2, option3, option4]
    const checkAns = (e, ans) => {
        if (lock === false) {
            if (question.ans === ans) {
                e.target.classList.add("correct")
                setLock(true)
                setScore(previousScore => previousScore + 1)
            } else {
                e.target.classList.add("wrong")
                setLock(true)
                option_array[question.ans - 1].current.classList.add("correct");
            }
        }

    }
    const next = () => {
        if (lock === true) {
            if (index === data.length - 1) {
                setResult(true)
                return 0;
            }
            setIndex(++index)
            setQuestion(data[index])
            setLock(false)
            option_array.map((option) => {
                option.current.classList.remove("wrong")
                option.current.classList.remove("correct")
                return null;
            })
        }
    }
    const prevoius = () => {
        setIndex(--index)
        setQuestion(data[index])
        setLock(false)
    }
    const reset = () => {
        setIndex(0)
        setQuestion(data[0])
        setScore(0)
        setLock(false)
        setResult(false)
    }
    return (
        <>
            <div className="app">
                <div className="container">
                    <h3>levels</h3>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                </div>
                <div className='container'>
                    <h1>Quiz app</h1>
                    <hr />
                    {result ? <></> : <>
                        <h2>{index + 1}. {question.question}</h2>
                        <ul>
                            <li ref={option1} onClick={(e) => { checkAns(e, 1) }}>{question.opton1}</li>
                            <li ref={option2} onClick={(e) => { checkAns(e, 2) }}>{question.opton2}</li>
                            <li ref={option3} onClick={(e) => { checkAns(e, 3) }}>{question.opton3}</li>
                            <li ref={option4} onClick={(e) => { checkAns(e, 4) }}>{question.opton4}</li>
                        </ul>
                        <button onClick={prevoius}>Previous</button>
                        <button onClick={next}>Next</button>
                        <div className="index">{index + 1} of {data.length} quetions</div>
                    </>}
                    {result ? <>
                        <h2>score : {score} out of {data.length}</h2>
                        <button onClick={reset}>Reset</button>
                    </> : <></>}

                </div>
            </div>

        </>

    )
}

export default Quiz;