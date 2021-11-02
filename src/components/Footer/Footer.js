import React from 'react'
import resumeData from '../../util/resumeData'
import './Footer.css';

import { Typography } from '@mui/material';

const Footer = () => {
    return (
        <div className = "footer">
            <div className = "footer_left">
                <Typography className = "footer_name">{resumeData.name}</Typography>
            </div>
            <div className= "footer-right">
                <Typography className = "footer_copyright">
                    Design and Developed by <a href = "/" target = "_blank">Jiyaul Mustaffa</a> 
                </Typography>
            </div>
        </div>
    )
}

export default Footer
