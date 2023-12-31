import { Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'


const Progress = () => {
    const {questions ,points , index , TotalNo} = useSelector(state => state.questions )

    return (<>
    <progress  style={{width: "100%", height: 20 }} max={questions.length} value={index +1 }  />
    <Stack mb={4} direction={'row'} justifyContent={'space-between'}>

    <Typography> <strong>{index+1}</strong> / {questions.length}  </Typography>
     <Typography> <strong>{points} </strong> /{TotalNo}</Typography>   
    </Stack>
    </>
  )
}

export default Progress