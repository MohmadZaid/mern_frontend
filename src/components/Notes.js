import React, { useEffect, useState } from 'react'
import NoteAdd from './NoteAdd'
import NoteItem from './NoteItem'

const Notes = () => {
    const [noteData, setNote] = useState([])
    console.log(noteData);
    const getnoteUser =  () => {
        fetch('/note/shownote', {
            method: "GET",
            headers: {
                "content-Type": "application/json"
            }
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
            setNote(data)
        })
    }

    useEffect(() => {
        console.log("useEffectttt");
        getnoteUser()
       
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <NoteAdd />
            <div className="container mt-4 " >
                <div className="ms-auto" style={{ width: "200px" }}>
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Notes</button>
                </div>

                {noteData.map((note) => {
                    return (
                        <NoteItem title={note.title} description={note.description}  />
                    );
                })}


            </div>
        </>
    )
}

export default Notes