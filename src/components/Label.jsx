import React from 'react';

function Label({label, firstName, lastName, age, diagnosis}) {
    return (

        <React.Fragment>
            {
                label === 'ФИО' && (
                    <div className="patients__info--label">
                        <label>{label}</label>
                        <input type="text" value={
                            firstName && lastName ? `${firstName} ${lastName}` : ''
                        } disabled />
                    </div>
                )
            }
            {
                label === 'Диагноз' && (
                    <div className="patients__info--label">
                        <label>{label}</label>
                        <input type="text" value={diagnosis} disabled />
                    </div>
                )
            }
            {
                label === 'Возраст' && (
                    <div className="patients__info--label">
                        <label>{label}</label>
                        <input type="text" value={age} disabled />
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default Label;
