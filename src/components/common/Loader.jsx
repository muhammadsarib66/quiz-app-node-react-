import { Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import Loading from '../../assets/loader.json'

export default function Loader() {
    return (
      <Stack width={100}  >
          <Lottie animationData={Loading} />
          <Typography> Loading...</Typography>
        </Stack>
    );
  }