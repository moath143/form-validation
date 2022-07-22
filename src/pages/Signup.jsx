import React, {useState} from 'react'
import {Body, BoxDiv, Form, ButtonSignup, LinkAnchor} from './styleSignup'
import { FormControl, Input, InputLabel, Typography, Alert, Snackbar     } from '@mui/material'
import {useForm, Controller} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {registerValidationSchema } from '../utils/validation'
import { useNavigate } from "react-router-dom";
import { useSnackbar } from 'notistack';

const Signup = () => {
    let navigate = useNavigate();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    const { control, handleSubmit, formState: { errors }  } = useForm({
        resolver: yupResolver(registerValidationSchema)
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
                }} variant="h3">Signup</Typography>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl  variant="standard">
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <Controller name='firstName' control={control} render={({ field }) => <Input  value={field.name || ''} id={'firstName'} type='text' {...field} />} />
                    </FormControl>
                    {errors.firstName && <Alert severity="error">{errors.firstName.message}</Alert>}
                    {/*{errors.firstName && enqueueSnackbar(errors.firstName.message, { variant: 'error' })}*/}

                    <FormControl variant="standard">
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <Controller name='lastName' control={control} render={({ field }) => <Input value={field.name || ''} id={'lastName'} type='text' {...field} />} />
                    </FormControl>
                    {errors.lastName && <Alert severity="error">{errors.lastName.message}</Alert>}
                    {/*{errors.lastName && enqueueSnackbar(errors.lastName.message, { variant: 'error' })}*/}
                    <FormControl variant="standard">
                        <InputLabel htmlFor="userName">Username</InputLabel>
                        <Controller name='userName' control={control} render={({ field }) => <Input value={field.name || ''} id={'userName'} type='text' {...field} />} />
                    </FormControl>
                    {errors.userName && <Alert severity="error">{errors.userName.message}</Alert>}
                    {/*{errors.userName && enqueueSnackbar(errors.userName.message, { variant: 'error' })}*/}
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
                    <FormControl variant="standard">
                        <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                        <Controller name='confirmPassword' control={control} render={({ field }) => <Input value={field.confirmPassword || ''} id={'confirmPassword'} type='password' {...field} />} />
                    </FormControl>
                    {errors.confirmPassword && <Alert severity="error">{errors.confirmPassword.message}</Alert>}
                    {/*{errors.confirmPassword && enqueueSnackbar(errors.confirmPassword.message, { variant: 'error' })}*/}
                    <ButtonSignup disabled={Object.keys(errors).length > 0}  sx={{width: '60%'}} type="submit">Submit</ButtonSignup>
                </Form>
                <Typography sx={{fontSize: '16px', fontWeight: '700', marginTop: '10px'}} >Already have an account? <LinkAnchor to='/login'>Login now</LinkAnchor> </Typography>
            </BoxDiv>
        </Body>
    )
}
export default  Signup