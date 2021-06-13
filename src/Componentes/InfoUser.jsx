import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { MenuItem } from '@material-ui/core';
import { UsarContexto } from '../Contexto/UsarContexto';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const InfoUser = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [{user},dipatch] = UsarContexto()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
       <MenuItem onClick={handleOpen}> Datos</MenuItem>

     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title"> {user?.name} </h2>
            <h2 id="transition-modal-title"> {user?.apelldio} </h2>
            <h2 id="transition-modal-title"> {user?.email} </h2>
            <h2 id="transition-modal-title"> {user?.password} </h2>
           
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


export default InfoUser