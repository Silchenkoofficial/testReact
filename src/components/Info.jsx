import React from 'react'

import {Label} from './index';

function Info({data}) {
    const currentAge = (birthday) => {
        const age = (new Date().getTime() - new Date(birthday)) / (24 * 3600 * 365.25 * 1000) | 0;
        return age === 0 ? '' : age;
    }

    return (
        <React.Fragment>
            <Label label="ФИО" firstName={data.firstName} lastName={data.lastName} />
            <Label label="Возраст" age={currentAge(data.birthDate)} />
            <Label label="Диагноз" diagnosis={data.diagnosis} />
        </React.Fragment>
    )
}

export default Info
