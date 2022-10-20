import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import axios from "axios";
import { Alert, Box, Button, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import "./styles.css";

interface FormProps {
  name: String;
}

const TypeAndCondition = zod.object({
  type: zod.string(),
  condition: zod.string(),
});

const newValidation = zod.object({
  name: zod.string().min(1, "Campo obrigatorio"),
});

export function Form() {
  const [cycles, setCycles] = useState<FormProps>({} as FormProps);
  const { register, handleSubmit, watch, reset, setValue, setFocus } =
    useForm<FormProps>({
      resolver: zodResolver(newValidation),
    });

  function handleCreateNewCycle(data: FormProps) {
    console.log(JSON.stringify(data));
    setCycles(data);
    axios
      .post("api", cycles)
      .then((res) => {
        <Alert severity="success">Success</Alert>;
        reset();
        console.log(res.status);
      })
      .catch((err) => {
        if (err.response.status == 400) {
          <Alert severity="error">Error</Alert>;
        }
        console.log(err.response);
      });
  }

  //   const formData = watch("deviceCount");

  return (
    <form onSubmit={handleSubmit(handleCreateNewCycle)}>
      {/* <TextField
        id="outlined-basic"
        label="Nome"
        variant="outlined"
        color="secondary"
        {...register("name", { required: true })}
      /> */}
      <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid2 xs={6}>
          <TextField
            id="outlined-basic"
            label="Input 1"
            variant="filled"
            color="primary"
            {...register("name", { required: true })}
          />
        </Grid2>
        <Grid2 xs={6}>
          <TextField
            id="outlined-basic"
            label="Input 2"
            variant="filled"
            color="primary"
            {...register("name", { required: true })}
          />
        </Grid2>
        <Grid2 xs={6}>
          <TextField
            id="outlined-basic"
            label="Input 3"
            variant="filled"
            color="primary"
            {...register("name", { required: true })}
          />
        </Grid2>
        <Grid2 xs={6}>
          <TextField
            id="outlined-basic"
            label="Input 4"
            variant="filled"
            color="primary"
            {...register("name", { required: true })}
          />
        </Grid2>
        <Grid2 xs={6}>
          <TextField
            id="outlined-basic"
            label="Input 5"
            variant="filled"
            color="primary"
            {...register("name", { required: true })}
          />
        </Grid2>
        <Grid2 xs={6}>
          <TextField
            id="outlined-basic"
            label="Input 6"
            variant="filled"
            color="primary"
            {...register("name", { required: true })}
          />
        </Grid2>
      </Grid2>

      <Box>
        <Button type="submit">Enviar</Button>
      </Box>
    </form>
  );
}
