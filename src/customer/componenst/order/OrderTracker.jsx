import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'
import { color } from '../product/FilterData'

const steps=[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out ForDelivered",
    "Delivered"
]

function OrderTracker({activeStep}) {

  return (
    <div className='w-full'>
        <Stepper activeStep={activeStep} alternativeLabel> 
            {steps.map((label) => (
                <Step key={label}>
                    <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    </div>
  )
}

export default OrderTracker