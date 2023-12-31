import { Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchQuestions } from "../services/questionSlice";
import {
  Loader,
  StartSceen,
  Progress,
  Question,
  Answers,
  Next,
  FinishScreen,
  Error,
} from "../components/index";
import { useEffect } from "react";

const QuizApp = () => {
  const { status } = useSelector((state) => state.questions);
  // console.log(status)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);
  return (
    <Stack>
      <Stack>
        {status === "loading" && <Loader />}
        {status === "ready" && <StartSceen />}
        {status === "active" && (
          <Stack alignSelf={"center"} sx={{ width: "80%" }}>
            <Progress />

            <Question />
            <Answers />
            <Next />
          </Stack>
        )}
        {status === "finished" && <FinishScreen />}

        {status === "error" && <Error />}
      </Stack>
    </Stack>
  );
};

export default QuizApp;
