import React from 'react'
import Form from '../components/Form'
import Page1Footer from '../components/Page1Footer'
import Page1Queries from '../components/Page1Queries'

const Page1 = () => {
    return (
        <div className='mt-0'style={{backgroundColor:'#0d0d0d'}}>
            <Form/>            
            <Page1Queries/>
            <Page1Footer/>
        </div>
    )
}

export default Page1
