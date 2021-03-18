import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage: 'url(https://image.freepik.com/foto-gratis/imagen-primer-plano-flores-imagen-macro-utiliza-como-imagen-fondo-foto-primer-plano-macro_34433-346.jpg)'
                }}>
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo dia</p>
                <p className="journal__entry-content">Jajaja la vida es bella perros</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>

            </div>
        </div>
    )
}
