import React, {useState} from 'react';
import cln from 'classnames';
import {List} from './index';

function PatientsList({presents, quitting}) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="patients__list list">
            <div className="tabs">
                <div className={cln('tab', {
                    active: activeTab === 0 ? 'active' : ''
                })}
                onClick={() => setActiveTab(0)} >
                    Присутствуют
                    <span className="patients__count">({presents.length})</span>
                </div>
                <div className={cln('tab', {
                    active: activeTab === 1 ? 'active' : ''
                })}
                onClick={() => setActiveTab(1)} >
                    Выбывшие
                    <span className="patients__count">({quitting.length})</span>
                </div>
            </div>
            <List data={
                activeTab === 0 ? 
                    presents : activeTab === 1 ? 
                        quitting : {}
            }
            list={
                activeTab === 0 ? 'presents' : activeTab === 1 ? 'quitting' : ''
            } />
        </div>
    )
}

export default PatientsList;
