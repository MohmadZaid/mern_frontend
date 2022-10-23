import React, { useEffect, useState } from 'react'
import NoteAdd from './NoteAdd'
import NoteItem from './NoteItem'

const Notes = () => {
    const [noteData, setNote] = useState({})
    console.log(noteData);



    useEffect(() => {
        const noteFetch = async () => {
            const res = await fetch("/note/shownote", {
                method: "GET",
                headers: {
                    "content-Type": "application/json"
                }
            });

            const json = await res.json();
            setNote(json)
        }

        console.log("useEffecttttttttt");
        noteFetch()
    }, [])

    return (
        <>
            <NoteAdd />
            <div className="container mt-4 " >
                <div className="ms-auto" style={{ width: "200px" }}>
                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Notes</button>
                </div>
                {noteData.map((note) => {
                    return <NoteItem title={note.title} description={note.description} key={note._id} />
                })}


            </div>
        </>
    )
}

export default Notes