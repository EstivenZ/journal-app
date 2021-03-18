import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar/>

            <div className="notes__content">
                
                <input
                    type="text"
                    placeholder="Algo hermoso"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea 
                    placeholder="Que pasa hoy"
                    className="notes_textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                        alt="Mi paisaje"
                    />
                </div>

            </div>
            
        </div>
    )
}
