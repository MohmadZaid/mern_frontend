import React, { useEffect, useState } from 'react'
import NoteAdd from './NoteAdd'
import NoteItem from './NoteItem'

const Notes = () => {
    const [noteData, setNote] = useState([])   // [] - more then 4 hours to realised map work on array show default put array [] sign not {} . 
    console.log(noteData);
    const getnoteUser = () => {
        fetch('/note/shownote', {
            method: "GET",
            headers: {
                "content-Type": "application/json"
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data);
            setNote(data)
        })
    }

    useEffect(() => {
        console.log("useEffectttt");
        getnoteUser()

    }, [noteData]) 

    return (
        <>
            <NoteAdd />
            <div className="container mt-4 " >
                <div className="ms-auto" style={{ width: "200px" }}>
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Notes</button>
                </div>

                <div className='d-flex flex-wrap align-items-start mt-3 gap-3'>
                    {noteData.map((note) => {
                        return (
                            <NoteItem title={note.title} description={note.description} key={note._id} />
                        );
                    })}
                </div>



            </div>
        </>
    )
}

export default Notes