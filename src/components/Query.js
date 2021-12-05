import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { AiOutlineUp } from 'react-icons/ai'
const Query = ({ question, ans, theme }) => {

    let bgclr='white';
    let textclr='black';
    const [queryOpen, setQueryOpen] = useState(false);
    const toggleQueryOpen = () => { setQueryOpen(!queryOpen) }
    if(theme==='dark'){
        bgclr='black';
        textclr='white';
    }
    return (
        <div className='m-3' style={{backgroundColor:bgclr,color:textclr}}>
            <div className='d-flex justify-content-between'>
                <p className='fs-3 fw-bold'>{question}</p>
                <div className='fs-3'>
                    {queryOpen ? <AiOutlineUp onClick={toggleQueryOpen} /> : <AiOutlineDown onClick={toggleQueryOpen} />}
                </div>
            </div>


            {queryOpen ? <p className='fs-5'>{ans}</p> : null}
        </div>
    )
}

export default Query
