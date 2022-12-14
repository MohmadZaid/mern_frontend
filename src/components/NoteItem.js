import React from 'react'

const NoteItem = (props) => {
    return (
        <>
                <div className="card" style={{ width: "18rem" }}>
                    {/* <img src="..." className="card-img-top" alt="..."> */}
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="/" className="btn btn-primary">Read Full</a>
                    </div>
                </div>
           
        </>
    )
}

export default NoteItem