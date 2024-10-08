import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

function Loading() {

    const {loading}= useSelector((store)=> store.products)

  
  return (
    <Backdrop
        sx={{ color: 'rgb(245, 30, 15', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  )
}

export default Loading