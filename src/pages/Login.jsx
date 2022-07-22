import React from 'react'
import {BoxDiv, ButtonSignup, Form, LinkAnchor, Body} from "./styleSignup";
import {Alert, FormControl, Input, InputLabel, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginValidationSchema} from "../utils/validation";
const Login = () => {
    let navigate = useNavigate();



    const { control, handleSubmit, formState: { errors }  } = useForm({
        resolver: yupResolver(LoginValidationSchema)
    });


    const onSubmit = (data) => {
        console.log(data)
        console.log('success')
        navigate('/')
    }
    return(
        <Body>
            <BoxDiv>
                <Typography sx={{
                    margin: '20px 0',
                }} variant="h3">Login</Typography>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl variant="standard">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Controller name='email' control={control} render={({ field }) => <Input value={field.email || ''} id={'email'} type='email' {...field} />} />
                    </FormControl>
                    {errors.email && <Alert severity="error">{errors.email.message}</Alert>}
                    {/*{errors.email && enqueueSnackbar(errors.email.message, { variant: 'error' })}*/}
                    <FormControl variant="standard">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Controller name='password' control={control} render={({ field }) => <Input value={field.password || ''} id={'password'} type='password' {...field} />} />
                    </FormControl>
                    {errors.password && <Alert severity="error">{errors.password.message}</Alert>}
                    {/*{errors.password && enqueueSnackbar(errors.password.message, { variant: 'error' })}*/}
                    <ButtonSignup  sx={{width: '60%'}} type="submit">Submit</ButtonSignup>
                </Form>
                <Typography sx={{fontSize: '16px', fontWeight: '700', marginTop: '10px'}} >Don't have an account? <LinkAnchor to='/signup'>Signup</LinkAnchor> </Typography>
            </BoxDiv>
        </Body>
    )
}
export default Login