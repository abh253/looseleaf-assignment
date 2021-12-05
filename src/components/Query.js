import React, { useState } from 'react'
import { AiOutlineDown } from 'react-icons/ai'
import { AiOutlineUp } from 'react-icons/ai'
const Query = ({ question, ans, theme }) => {

    let bgclr='white';
    let textclr='black';
    let fontcase='text-capitalize';
    const [queryOpen, setQueryOpen] = useState(false);
    const toggleQueryOpen = () => { setQueryOpen(!queryOpen) }
    if(theme==='dark'){
        bgclr='#0d0d0d';
        textclr='white';
        fontcase='text-uppercase'
    }
    if(!ans){
        ans='lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
    }
    return (
        <div className='px-3' style={{backgroundColor:bgclr,color:textclr}}>
            <div className='d-flex justify-content-between'>
                <p className={`fs-4 fw-bold mb-1 ${fontcase}`}>{question}</p>
                <div className='fs-3'>
                    {queryOpen ? <AiOutlineUp onClick={toggleQueryOpen} /> : <AiOutlineDown onClick={toggleQueryOpen} />}
                </div>
            </div>


            <p className={`fs-5 ans ${queryOpen?'ans-show':null}`}>{ans}</p>
        </div>
    )
}

export default Query
