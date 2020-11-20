import React from 'react';

import { ArrowLeft } from '../Icons';

import {Info} from '../components';

function PatientsInfo({activePatient}) {
    return (
        <div className="patients__info">
            <div className="patients__info--top">
                <p className="patients__info--title">Информация о пациенте</p>
                <ArrowLeft />
            </div>
            <div className="patients__info--main">
                <Info data={activePatient} />
            </div>
        </div>
    )
}

export default PatientsInfo;
