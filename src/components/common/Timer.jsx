import  { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material';
import { FinsheQuiz } from '../../services/questionSlice';
const Timer = () => {
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(0);
    const dispatch = useDispatch()
    useEffect(() => {
        const timer = setTimeout(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            } else {
                clearTimeout(timer);
                dispatch(FinsheQuiz())
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [minutes, seconds ,dispatch]);
    return (
        
            <Typography sx={{background: 'grey' , padding: '10px 30px', borderRadius: '20px' }}>
                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </Typography>
        
    );
};
export default Timer;