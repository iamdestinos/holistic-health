import React, { useState, useContext } from 'react';
import PieChart from './PieChart.component.jsx';
import Summary from './Summary.component.jsx';
import MeditationChart from './MeditationChart.component.jsx';
import ExcerciseChart from './ExcerciseChart.component.jsx';
import { UserContext } from '../../context/user.context';

const ProfileVisual = () => {
    const { currentUser } = useContext(UserContext);
    const [graphView, setGraphView] = useState('entries');

    const selectHandler = (e) => {
        setGraphView(e.target.value);
    }

    return (
        <div id="ProfileVisual">
            <div id="ProfileButtons" style={{display: 'flex', justifyContent: 'center'}}>
                <select value={graphView} onChange={selectHandler}>
                    <option value='entries'>Entries</option>
                    <option value='meditation'>Meditation</option>
                    <option value='excercise'>Exercise</option>
                </select>
            </div>
            {graphView === 'entries' ? <PieChart></PieChart> : graphView === 'meditation' ? <MeditationChart></MeditationChart> : graphView === 'excercise' ? <ExcerciseChart></ExcerciseChart> : <div style={{display: 'flex', justifyContent: 'center', color: 'crimson'}}><b><u>You Shouldn't Be Seeing This</u></b></div>}
            <Summary></Summary>
        </div>
    );
}

export default ProfileVisual;