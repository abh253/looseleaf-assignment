import React from 'react'
import Query from './Query'
const Page1Queries = () => {
    const queries = ['Why looseleaf?', 'Pricing', 'Resources', 'Our Offices'];

    return (
        <div style={{backgroundColor:'#0d0d0d'}}>
            {
                queries.map((single, index) => {
                    return <Query question={single} key={index} theme='dark' />
                })
            }
        </div>
    )
}

export default Page1Queries
