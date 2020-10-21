import React from 'react'

export default function Editor(props) {

    return (

        <div className="editor">
            <h3>Input</h3>
            <textarea placeholder="Note...." cols="60" rows="15" onChange={props.handleChange}>
            </textarea>
        </div>
    )
}