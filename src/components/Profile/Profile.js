import React from 'react'
import CustomTimeline, {CustomTimelineSeparator} from '../Timeline/Timeline';
import {Typography} from '@material-ui/core';
import resumeData from '../../util/resumeData'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import TimelineItem from '@mui/lab/Timeline';
import TimelineContent from '@mui/lab/TimelineContent';
import GetAppIcon from '@material-ui/icons/GetApp';
import './Profile.css'
import CustomButton from '../Button/Button';

export const CustomTimelineItem = ({title, link, text}) => (
     <TimelineItem>
          <CustomTimelineSeparator />
          <TimelineContent>
               {link ? (
                    <Typography>
                         <span>{title}: </span> {" "}
                         <a href = {link}> 
                              {text}
                         </a>
                    </Typography>
                    ) : (
                         <Typography>
                         <span>{title}:</span> {text}
                         </Typography>
                    )
               }
          </TimelineContent>
     </TimelineItem>
);

const Profile = () => {
    return (
       <div className= "profile container_shadow">
           <div className = "profile_name">
                <Typography className = "name">{resumeData.name}</Typography>
                <Typography className = "title">{resumeData.title}</Typography>
           </div>
           <figure className = "profile_image">
                <img src={require('../../assets/Image/displayImage.jpg')}  alt = "mainImage"/>
           </figure>
           <div className = "profile_information">
                <CustomTimeline icon = {<PersonOutlineIcon />}> 
                    <CustomTimelineItem title = {<b>Name</b>} text = {resumeData.name}/>
                    <CustomTimelineItem title = {<b>Birthday</b>} text = {resumeData.birthday}/>
                    <CustomTimelineItem title = {<b>Email</b>} text = {resumeData.email}/>
                         {/*
                    {Object.keys(resumeData.socials).map((key) => (
                         <CustomTimelineItem title = {key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
                    ))}  */}
                </CustomTimeline>
                <br/>
                <CustomButton text={'Download Cv'}  icon= {<GetAppIcon />}/>
           </div>
       </div>
    )
}

export default Profile
