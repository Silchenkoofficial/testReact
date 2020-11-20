import React, {useState} from 'react';
import cln from 'classnames';

import { ArrowLeft } from '../Icons';

import {Info} from '../components';

function PatientsInfo({activePatient}) {
    const [showInfo, setShowInfo] = useState(true);

    return (
        <div className={cln('patients__info', {
            closed: !showInfo && 'closed'
        })}>
            {
                showInfo ? (
                    <>
                        <div className="patients__info--top">
                            <p className="patients__info--title">Информация о пациенте</p>
                            <ArrowLeft close={() => setShowInfo(!showInfo)} />
                        </div>
                        <div className="patients__info--main">
                            <Info data={activePatient} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="patients__info--top">
                            <ArrowLeft close={() => setShowInfo(!showInfo)} />
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default PatientsInfo;
