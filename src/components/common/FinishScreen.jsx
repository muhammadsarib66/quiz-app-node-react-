import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Restart } from "../../services/questionSlice";

const FinishScreen = () => {
  const { TotalNo, points , HighScore ,totalPoints} = useSelector((state) => state.questions);
  // console.log(totalPoints)
  const dispatch = useDispatch();
  // const score = HighScore > totalPoints.tot ? HighScore : points;
  return (
    <Stack spacing={2} textAlign={'center'}>
      <Typography   fontWeight={600}>
      
        You are Scored {totalPoints } / {TotalNo} (
        {((points / TotalNo) * 100).toFixed(0)}%)
      </Typography >
      <Typography  fontWeight={600}>HighScore {HighScore}</Typography>
      <Button
        style={{
          borderRadius: "20px",
          backgroundColor: "#1098ad",
          padding: "10px 0px",
          color: "whitesmoke",
          fontWeight: 600,
        }}
        onClick={() => dispatch(Restart())}
      >
        {" "}
        Restart Quiz{" "}
      </Button>
    </Stack>
  );
};

export default FinishScreen;
