import React from 'react'
import CustomTimeline, {CustomTimelineSeparator} from '../../components/Timeline/Timeline';
import { Grid, Typography, Icon } from '@material-ui/core'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import resumeData from '../../util/resumeData';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

import './Resume.css';
import { Paper } from '@mui/material';
import { Form, Button } from 'react-bootstrap';



const Resume = () => {
    return (
        <>
        {/* About Section*/}
            <Grid container className = "section pb_45">
                <Grid item className = "section_title mb_30">
                    <span></span>
                    <h6 className = "section_title_text" variant = 'h6'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant = 'body1' className = "about_text">{resumeData.About}</Typography>
                </Grid>
            </Grid>
        {/*Education and Experience Section */}
            <Grid container className = "section">
                <Grid item className = "section_title mb_30">
                    <span></span>
                    <h6 className = "section_title_text" variant = 'h6'>Resume</h6>
                </Grid>
            </Grid>
            <Grid container className = "section">
                <Grid item xs={12}>
                    <Grid Container className = "resume_timeline">
                        {/* Experience */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title = 'Work Experience' icon = {<WorkIcon />}>
                                {resumeData.experiences.map((experience) => (
                                    <TimelineItem> 
                                        {/*  <CustomTimelineSeparator /> */}
                                        <TimelineSeparator className = "separator_padding">
                                            <TimelineDot variant = "outlined" className = "timeline_padding" />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography className = "timeline_title">{experience.title}</Typography>
                                            <Typography variant = 'caption' className = "timeline-date">{experience.date}</Typography>
                                            <Typography variant = 'body2' className = "timeline-description">{experience.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                        {/* Education */}
                        <Grid item sm={12} md={6}>
                        <CustomTimeline title = 'Education History' icon = {<SchoolIcon />}>
                                {resumeData.eductions.map((education) => (
                                    <TimelineItem> 
                                      {/*  <CustomTimelineSeparator /> */}
                                        <TimelineSeparator className = "separator_padding">
                                            <TimelineDot variant = "outlined" className = "timeline_padding" />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Typography className = "timeline_title">{education.title}</Typography>
                                            <Typography variant = 'caption' className = "timeline-date">{education.date}</Typography>
                                            <Typography variant = 'body2' className = "timeline-description">{education.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* Services*/}
            <Grid container className = "section">
            <Grid item className = "section_title mb_30">
                    <span></span>
                    <h6 className = "section_title_text" variant = 'h6'>Services</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} justify='space-around'>
                        {resumeData.services.map((service) => (
                            <Grid item xs={12} md={3}>
                                <div className = "service">
                                    <Icon className = "service_icon">{service.icon}</Icon>
                                    <Typography className = "service_title" variant = "h6">{service.title}</Typography>
                                    <Typography className = "service_description" variant = "body2">{service.description}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            {/* Skill */}
            <Grid container className = "section">
                <Grid item className = "section_title mb_30">
                    <span></span>
                    <h6 className = "section_title_text" variant = 'h6'>Skills</h6>
                </Grid>

                <Grid container className = "section graybg pb_45 ">
                    <Grid item xs={12}>
                        <Grid container justify = "space-between" spacing = {3}>
                            {resumeData.skills.map((skill) => (
                                <Grid item xs={12} sm={6} md={3}>
                                    <Paper elevation = {0} className = "skill">
                                        <Typography variant='h6' className="skill_title">{skill.title}</Typography>
                                        {skill.description.map((element) => (
                                            <Typography variant='body2' className = "skill_description">
                                                {element}
                                            </Typography>
                                        ))}
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* Contact */}
            <Grid container className = "section">
                <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className = "section_title mb_30">
                           <span></span>
                           <h6 className = "section_title_text" variant = 'h6'>Contact Me</h6>
                        </Grid>
                    </Grid>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           <Form.Label>Name</Form.Label>
                           <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           <Form.Label>Email address</Form.Label>
                           <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                           <Form.Label>Message</Form.Label>
                           <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant = "outlined-dark" style ={{backgroundColor: "#91ff00"}} size="sm">
                           Submit
                        </Button>{' '}
                    </Form>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className = "section_title mb_30">
                           <span></span>
                           <h6 className = "section_title_text" variant = 'h6'>Contact Details</h6>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Resume
