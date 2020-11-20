import React from 'react'

import {Label} from './index';

function Info({data}) {
    return (
        <React.Fragment>
            <Label label="ФИО" firstName={data.firstName} lastName={data.lastName} />
            <Label label="Возраст" age={data.birthDate} />
            <Label label="Диагноз" diagnosis={data.diagnosis} />
        </React.Fragment>
    )
}

export default Info
