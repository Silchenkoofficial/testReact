import React, {useState} from 'react';
import cln from 'classnames';

function List({data, list, onClick}) {
    const [activeItem, setActiveItem] = useState(null);

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
                                <li className={cln('list__item', {
                                    active: activeItem === index && 'active'
                                })} onClick={() => {
                                    setActiveItem(index);
                                    onClick(patient);
                                }}>
                                    <p className="list__item--section">{patient.historyNumber}</p>
                                    <p className="list__item--section">{patient.firstName} {patient.lastName}</p>
                                    <p className="list__item--section">{list === 'presents' ? patient.bedNumber : list === 'quitting' ? patient.cause : ''}</p>
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
