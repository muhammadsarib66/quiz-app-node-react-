import { Button, Stack  } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { NextQues, FinsheQuiz } from "../../services/questionSlice";
import Timer from "./Timer";
// import Timer from './Timer'

const Next = () => {
  const { index, questions, status, isDisabled } = useSelector(
    (state) => state.questions
  );
  const dispatch = useDispatch();
  const Finish = index == questions.length - 1;

  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      {status === "active" && <Timer />}
      {isDisabled && (
        <Stack>
          {Finish ? (
            <Button
              sx={{
                color: "white",
                background: "grey",
                padding: "10px 30px",
                borderRadius: "20px",
              }}
              onClick={() => dispatch(FinsheQuiz())}
            >
              Finish
            </Button>
          ) : (
            <Button
              sx={{
                color: "white",
                background: "grey",
                padding: "10px 30px",
                borderRadius: "20px",
              }}
              onClick={() => dispatch(NextQues())}
            >
              Next
            </Button>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default Next;
