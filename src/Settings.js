import ReactSlider from 'react-slider';
import './slider.css'
import { useContext } from 'react';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';


function Settings(){

    const settingsInfo = useContext(SettingsContext);

    return(
        <div style={{textAlign:'left'}}>
            
        <label> Work : {settingsInfo.workTime}:00</label>
        <ReactSlider 
        className='slider'
        thumbClassName='thumb'
        trackClassName='track'
        value={settingsInfo.workTime}
        onChange={newValue => settingsInfo.setWorkTime(newValue)}
        min={1}
        max={120}
        />
        <label> Break : {settingsInfo.breakTime}:00</label>
        <ReactSlider 
        className='slider'
        thumbClassName='thumb'
        trackClassName='track'
        value={settingsInfo.breakTime}
        onChange={newValue => settingsInfo.setBreakTime(newValue)}
        min={1}
        max={120}
        /> 


            <div style={{textAlign:'center', marginTop:'20px'}}>
                <BackButton onClick={() => settingsInfo.setshowSettings(false)} />
            </div>
        </div>
    );
}

export default Settings;