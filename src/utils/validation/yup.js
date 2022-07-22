import * as yup from 'yup';

export const registerValidationSchema  = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    userName: yup.string().required('User name is required'),
    email: yup.string().email('this field must be an email').required('Email is required').trim(),
    password: yup.string().min(6, 'must be more than 6 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'passwords must match').required(),

}).required()

export const LoginValidationSchema  = yup.object().shape({
    email: yup.string().email('this field must be an email').required('Email is required').trim(),
    password: yup.string().min(6, 'must be more than 6 characters').required('Password is required'),

}).required()