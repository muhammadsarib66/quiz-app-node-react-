import { Stack } from "@mui/material";
import QuizApp from "./pages/QuizApp";
import { Header1 } from "./components/index";
const App = () => {
  return (
    <Stack height={"100%"} alignItems={"center"}>
      <Header1 />

      <QuizApp />
    </Stack>
  );
};

export default App;
