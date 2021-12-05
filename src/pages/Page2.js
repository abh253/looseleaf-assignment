import React from 'react'
import Query from '../components/Query'
const Page2 = () => {
    const queries = [
        'Why Looseleaf?', 'Features', 'Pricing', 'Blogs', 'Contact No'
    ]
    return (
        <section className='mx-3'>
            <article className='d-flex justify-content-between align-items-center border-bottom border-4 pb-2 my-3'>
                <p className='fs-5 mb-0 fw-bold'>looseleaf</p>
                <button type='button' className='btn btn-primary text-uppercase fs-8 '>Launch Looseleaf</button>
            </article>
            <article className='row flex-column align-items-center'>
                {
                    queries.map((single, index) => {
                        return <div className='border-bottom border-2 pt-2 col-md-7'><Query question={single} key={index} /></div>;
                    })
                }
            </article>
            <article className='d-flex flex-column mt-5 align-items-center'>
                <button type='button' className='text-uppercase btn btn-white rounded border border-4 border-primary text-primary my-2 fs-3 fw-bold col-10 col-md-6'>Talk to sales</button>
                <button type='button' className='text-uppercase btn btn-primary rounded my-1 fs-3 fw-bold my-2 col-10 col-md-6'>Launch Looseleaf</button>
            </article>
        </section>
    )
}

export default Page2
