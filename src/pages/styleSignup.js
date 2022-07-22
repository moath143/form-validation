import styled from '@emotion/styled';
import {Box, Button} from '@mui/material'
import {Link} from 'react-router-dom'

export const Body = styled.div`
  background: #7D2AE8;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  min-height: 100vh;
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

export const Image = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  img{
    width: 100%;
    object-fit: cover;
  }
`