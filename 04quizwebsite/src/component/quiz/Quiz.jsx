import React, { useRef, useState, useEffect } from 'react'
import { data } from '../../assets/Data'

function Quiz() {

  let [index, setIndex] = useState(0)
  let [question, setQuestion] = useState(data[index])
  let [lock, setLock] = useState(false)
  let [score, setScore] = useState(0)
  let [nextButtonLock, setNextButtonLock] = useState(false);
  let [result, setResult] = useState(false)

  let option1 = useRef(null)
  let option2 = useRef(null)
  let option3 = useRef(null)
  let option4 = useRef(null)

  let option_arry = [option1, option2, option3, option4]

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans ) {
        e.target.style.color = "green"
        setLock(true)
        setScore(prev=>prev+1)
      } else{
      e.target.style.color = "red"
      setLock(true)
      option_arry[question.ans-1].current.style.color = 'green'  
      }
    }
  }

  const next = () => {
    if (lock === true) {

      if (index === data.length -1) {
        setResult(true)
        return(0)
      }
      setIndex(++index);
      setQuestion(data[index])
      setLock(false)
      option_arry.map((Option)=>{
        Option.current.style.color = ""
        return null;
      })
    }
    console.log('clicked')
  }

  
 
  return (
    <div className='bg-black w-screen flex items-center justify-center h-screen' >
    <div className='bg-zinc-500 h-auto w-1/2 p-4 my-10 text-xl'>
        <h1 className='my-5'>Quiz App</h1>
        <hr />
        {result ? <> game finish</> : <><h2 className='my-5'>{index+1}. {question.question}</h2>
            <ul className='my-5'>
                <li ref={option1} onClick={(e) => (checkAns(e,1))} className='border-2 mb-1 p-1 cursor-pointer'>{question.option1}</li>
                <li ref={option2} onClick={(e) => (checkAns(e,2))} className='border-2 mb-1 p-1 cursor-pointer'>{question.option2}</li>
                <li ref={option3} onClick={(e) => (checkAns(e,3))} className='border-2 mb-1 p-1 cursor-pointer'>{question.option3}</li>
                <li ref={option4} onClick={(e) => (checkAns(e,4))} className='border-2 mb-1 p-1 cursor-pointer'>{question.option4}</li>
            </ul>
        <button onClick={next} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Next</button>
        <div className='my-5'>{index+1} of {data.length} Questions</div></>}
    </div>
    </div>
  )
}

export default Quiz