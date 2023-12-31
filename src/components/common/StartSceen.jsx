import { Button, Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Start } from "../../services/questionSlice";

const StartSceen = () => {
  const { questions } = useSelector((state) => state.questions);
  const NoQues = questions.length;
  const dispatch = useDispatch();
  return (
    <Stack spacing={4} textAlign={"center"} alignItems={"center"}>
      <Typography variant="h4"> Welcome to The React Quiz </Typography>
      <Typography fontWeight={600}>
        {" "}
        {NoQues} number of questions will be Displayed{" "}
      </Typography>

      <Button
        style={{
          width: "60%",
          borderRadius: "20px",
          backgroundColor: "#1098ad",
          padding: "10px 0px",
          color: "whitesmoke",
          fontWeight: 600,
        }}
        onClick={() => dispatch(Start())}
        variant="contained"
        color="primary"
      >
        {" "}
        Start Quiz{" "}
      </Button>
    </Stack>
  );
};

export default StartSceen;
