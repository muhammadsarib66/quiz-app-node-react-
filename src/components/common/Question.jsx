import { Stack, Typography } from '@mui/material'
import { useSelector } from 'react-redux'


const Question = () => {
    const {questions , index} = useSelector(state => state.questions)
    const {question} = questions.at(index)
    console.log(question)
  return (
  

    <Stack  mb={2}>
      <Typography fontFamily={'monospace'} fontSize={20} fontWeight={600} >{question} </Typography>
      </Stack>
  )
}

export default Question