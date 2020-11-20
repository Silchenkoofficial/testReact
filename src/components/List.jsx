import React from 'react'

function List({data, list}) {
    return (
        <React.Fragment>
            <div className="list__main">
                <div className="list__top">
                    <div className="num list__top--section">№ ИБ</div>
                    <div className="fio list__top--section">ФИО</div>
                    {list === 'presents' && <div className="room list__top--section">Палата</div>}
                    {list === 'quitting' && <div className="cause list__top--section">Причина выбытия</div>}
                </div>
                <div className="list__ul">
                    <ul>
                        {
                            data.sort((a, b) => (a.historyNumber - b.historyNumber)).map((patient, index) => (
                                <li>
                                    <p>{patient.historyNumber}</p>
                                    <p>{patient.firstName} {patient.lastName}</p>
                                    {list === 'presents' ? patient.bedNumber : list === 'quitting' ? patient.cause : ''}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default List
