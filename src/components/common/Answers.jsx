import { Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { disABLED } from "../../services/questionSlice";


const Answers = () => {
  const { questions, index, isDisabled } = useSelector(
    (state) => state.questions
    );
  const dispatch = useDispatch();
  const { options, correctOption, points } = questions.at(index);

  function HandleClick(event) {
    let add = 0;
    if (correctOption == event) {
      add = points;
    }
    dispatch(disABLED(add));
  }

  
  return (
    <Stack>
      {options.map((item, index) => {
        return (
          <Stack key={index} my={2}>
            <Button
              sx={{
                borderRadius: "30px",
                backgroundColor: `${
                  isDisabled && correctOption == index
                    ? "#1098ad"
                    : isDisabled && correctOption != index
                    ? "#ffa94d"
                    : "#495057"
                } `,
                padding: "10px 15px",
                fontWeight: 600,
              }}
              style={{ color: `${isDisabled ? "whitesmoke" : "white"}` }}
              disabled={isDisabled}
              onClick={() => HandleClick(index)}
            >
              {item}
            </Button>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Answers;
