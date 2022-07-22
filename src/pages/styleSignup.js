import styled from '@emotion/styled';
import {Box, Button} from '@mui/material'
import {Link} from 'react-router-dom'

export const Body = styled.div`
  background: #7D2AE8;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxDiv = styled(Box)`
  background: #fff;
  width: 40%;
  min-height: 200px;
  border-radius: 4px;
  padding: 20px;

`

export const Form = styled.form`
    display: flex;
    gap: 20px;
  flex-direction: column;
 
  .MuiFormControl-root {
    width: 60%;
    margin: 5px 0;
  }
`

export const ButtonSignup = styled(Button)`
    background: #7D2AE8;
  color: #fff;
  font-size: 20px;
  &:hover{
    background: #7D2AE8;
  }
`

export const LinkAnchor = styled(Link)`
  text-decoration: none;
  color: #7d2ae8;
`