import React from 'react'
import {AppBar, Toolbar, Grid} from '@mui/material'
import {LinkAnchor} from './style'

const Navbar = () => {
    return(
        <AppBar>
            <Toolbar>
                <Grid container  spacing={2}>
                    <Grid sx={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                    }} item xs={6}>
                        <LinkAnchor to='/'>Brand</LinkAnchor>
                    </Grid>
                    <Grid sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        gap: '20px'
                    }} item xs={6}>
                        <LinkAnchor to='/login'>Login</LinkAnchor>
                        <LinkAnchor to='/signup'>Signup</LinkAnchor>
                    </Grid>

                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar