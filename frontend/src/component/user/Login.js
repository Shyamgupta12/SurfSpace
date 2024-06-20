import {Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, TextField , DialogActions} from "@mui/material"
import React, { useRef, useState } from 'react'
import { useValue } from '../../Context/ContexProvider'
import { Close } from "@mui/icons-material";
import PasswordField from "./PasswordField";
import {Button} from "@mui/material"

const Login = () => {

    const {state:{openLogin},dispatch} = useValue();
    const  [title,setTitle] = useState('Login');
    const [isRegister,setIsRegister] = useState(false);

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();



    const handleClose=()=>{
        dispatch({type:'CLOSE_LOGIN'})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <Dialog
    open={openLogin}
    onClose={handleClose}>
        <DialogTitle>
          {title}
            <IconButton sx={{position:'absolute',top:8,right:8 ,color:(theme)=>theme.palette.grey[500]}}onClick={handleClose}>
                <Close/>
            </IconButton>
        </DialogTitle>
        <form onSubmit={handleSubmit}>
                <DialogContent divider>
                    <DialogContentText >
                        Please fill your information in the fields below:
                    </DialogContentText>
                    {isRegister && <TextField autoFocus margin="normal" variant="standard" id="name" label="Name" 
                    type="text" fullWidth inputRef={nameRef} inputProps={{minLength:2}} required  />}
                    <TextField autoFocus={!isRegister} margin="normal" variant="standard" id="email" label="Email" 
                    type="email" fullWidth inputRef={nameRef} inputProps={{minLength:2}} required  />


                  <PasswordField {...{ passwordRef }} />
                 {isRegister && (
                 <PasswordField
                    passwordRef={confirmPasswordRef}
                        id="confirmPassword"
                        label="Confirm Password"/>)}
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'left', p: '5px 24px' }}>
                    {isRegister
                        ? 'Do you have an account? Sign in now '
                        : "Don't you have an account? Create one now "}
                    <Button onClick={() => setIsRegister(!isRegister)}>
                        {isRegister ? 'Login' : 'Register'}
                    </Button>
                </DialogActions>

        </form>
    </Dialog>

    
  )
}

export default Login