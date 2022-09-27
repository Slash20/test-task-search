import React from 'react'
import './PopUp.css'
import Cross from '../../img/svg/IconColor.svg'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function PopUp(props) {
  const {popUp, setPopUp} = props
  const {sortMethod, setSortMethod} = props
  function closePopUp(e) {
    console.log(e.target.classList);
    if (e.target.classList.contains('popUpContainer') || 
        e.target.classList.contains('crossBtn') || e.target.classList.contains('crossImg')) {
        setPopUp(false)
    }
  }
  return (
    <div className='popUpContainer' onClick={(e) => {
        closePopUp(e)
    }}>
        <div className='popUp'>
            <h3>Сортировка</h3>
            <button className='crossBtn'><img src={Cross} alt="" className='crossImg' /></button>
            <FormControl>
                <RadioGroup >
                    <div className='radioBtns'>
                        <FormControlLabel checked={sortMethod === 'alphabetically'} 
                        onClick={() => {setSortMethod('alphabetically')}} value="alphabetically" control={<Radio sx={{
                            color: '#6534FF',
                                '&.Mui-checked': {
                                color: '#6534FF',
                            },
                            }}/>} label="По алфавиту" />
                        <FormControlLabel checked={sortMethod === 'by-birthday'} 
                        onClick={() => {setSortMethod('by-birthday')}} value="by-birthday" control={<Radio sx={{
                                color: '#6534FF',
                                '&.Mui-checked': {
                                color: '#6534FF',
                            },
                            }}/>} label="По дню рождения" />
                    </div>
                </RadioGroup>
            </FormControl>
        </div>
    </div>
  )
}

export default PopUp