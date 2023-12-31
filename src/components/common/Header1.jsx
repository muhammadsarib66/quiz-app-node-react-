import React from "react";
import ReactLogo from "../../assets/ReactLogo.json";
import { motion } from "framer-motion";
import { Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";

const Header1 = () => {
  return (
    <motion.div
      // className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 4,
          stiffness: 80,
          restDelta: 0.001,
        },
      }}
    >
      <Stack mt={2} direction={"row"} alignItems={"center"}>
        <Stack width={100}>
          <Lottie animationData={ReactLogo} />
        </Stack>

        <Typography  fontSize={'3rem'}  color={"skyblue"} 
         fontFamily={"monospace"} >
          {" "}
          React to Quiz App{" "}
        </Typography>
      </Stack>
    </motion.div>
  );
};

export default Header1;
