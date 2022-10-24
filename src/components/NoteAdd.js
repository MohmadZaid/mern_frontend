import React, { useState } from 'react'

const NoteAdd = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const noteSaved = async (e) => {
        e.preventDefault();
        const res = await fetch("/note/addnote", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,description
            })
        });
        const data = await res.json()
        if(data.success){
            window.alert("note Save Successfully")
            setTitle("")
            setDescription("")
        }

    }



    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="title" name="title" onChange={(e) => { setTitle(e.target.value) }} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea type="text" className="form-control" id="description" name="description" onChange={(e) => { setDescription(e.target.value) }} />

                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={noteSaved} >Save</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default NoteAdd