import React, {useEffect, useState} from 'react';
import axios from 'axios';

import PatientsInfo from './components/PatientsInfo';
import PatientsList from './components/PatientsList';

import './styles/main.css';

function App() {

  const [presents, setPresents] = useState([]);
  const [quitting, setQuitting] = useState([]);
  const [activePatient, setActivePatient] = useState({});

  useEffect(() => {
    axios.get('presentList.json')
      .then((res) => setPresents(res.data));
    axios.get('quittingList.json')
      .then((res) => setQuitting(res.data));
  }, []);

  const onSelectedPatient = patient => {
    setActivePatient(patient);
  }

  return (
    <div className="patients">
      <PatientsInfo activePatient={activePatient} />
      <PatientsList
        onClick={onSelectedPatient}
        presents={presents}
        quitting={quitting} />
    </div>
  );
}

export default App;
