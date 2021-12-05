import React from 'react'

const Form = () => {
    const inputAreas = [
        'First Name', 'Last Name', 'Institute Name', 'Email Address', 'Phone Number']
    return (
        <section className='m-3 mx-4 mt-0 pt-5 m-md-5' style={{color:'white'}}>
            <h1 className='fs-2 text-center'>Contact us to get Started.</h1>
            <form action="#" onSubmit={(e) => { e.preventDefault() }}>
                <div className="row flex-column align-content-center">
                    {
                        inputAreas.map((single, index) => {
                            return <input key={index} type="text" name={single} placeholder={single} className='my-2 border border-2 fw-bold p-2 border-white bg-dark col-md-6 rounded' />
                        })
                    }
                    <button className="btn btn-primary col-4 col-md-3 m-auto mt-3" type='button'>Contact us</button>

                </div>
            </form>
        </section>
    )
}

export default Form
