import { Box, Button, ButtonGroup, Modal, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Form } from "../../components/form";
import "./styles.css";

const ProdTime = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#333333",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <h1>ProdTime</h1>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>Relatorio</Button>
        <Button onClick={handleOpen}>Cadastrar</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Form />
          </Box>
        </Modal>
      </ButtonGroup>
    </>
  );
};

export default ProdTime;
