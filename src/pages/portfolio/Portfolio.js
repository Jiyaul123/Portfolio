import React, {useState} from 'react'
import './Portfolio.css'
import { Card, CardActionArea, CardContent, CardMedia, Grid, Dialog, Tab, Tabs, Typography, DialogTitle, DialogContent, DialogActions} from '@material-ui/core'    
import resumeData from '../../util/resumeData';

const Portfolio = () => {
    
    const [tabValue, setTabValue] = useState('All');
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <Grid container className = "section pb_45 pt_45">
            <Grid item className = "section_title mb_30">
                <span></span>
                <h6 className = "section_title_text" variant = 'h6'>Portfolio</h6>
            </Grid>

            {/* Tabs */}
            <Grid item xs={12}>
                <Tabs 
                value ={tabValue} 
                indicatorColor = "white" 
                className = "custom_tabs" 
                onChange = {(event, newValue)  => setTabValue(newValue)}>
                    <Tab 
                        label = "All"
                        value = "All"
                        className = {
                            tabValue === "All" ? "custom_item active" : "custom_item"
                        }
                    /> 
                        {[...new Set(resumeData.portfolio.map((item) => item.tag))].map((tag) => (
                        <Tab
                            label = {tag}
                            value = {tag}
                            className = {
                             tabValue === {tag} ? "custom_item active" : "custom_item"
                            }
                        />
                        ))}
                </Tabs>
            </Grid>

            {/* Projects */ }
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        {resumeData.portfolio.map((project) => (
                            <> 
                                {tabValue === project.tag || tabValue == "All" ? (
                                    <Grid item>
                                        {/*<Grow in timeout = {1000} /> */}
                                        <Card className = "customCard">
                                            <CardActionArea>
                                                <CardMedia className = "customCard_image" image =  {project.image} />
                                                <CardContent>
                                                    <Typography className = "customCard_title">{project.title}</Typography>
                                                    <Typography variant = "body2" className = "customCard_description">{project.description}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ) : null}
                            </>
                        ))}
                    </Grid>
                </Grid>
                <Dialog open ={projectDialog} oncClose = {() => setProjectDialog(false)}>
                    <DialogTitle onClose = {() => setProjectDialog(false)}>
                        {projectDialog.title}
                    </DialogTitle>
                    <img src = "" alt = "" className = "projectDialog_image"/>
                    <DialogContent><Typography className = "projectDialog_description">{projectDialog.description}</Typography></DialogContent>
                    <DialogActions className = "projectDialog_action">
                        {projectDialog?.links?.map((link) => (
                            <a href = {link.link} target = "_blank" className = "projectDialog_icon">
                                {link.icon}
                            </a>
                        ))}
                    </DialogActions>
                </Dialog>
        </Grid>
    )
}



export default Portfolio
