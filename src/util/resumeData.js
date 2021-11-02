import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';

export default {
    name: "Jiyaul Mustaffa",
    title: "Web Developer",
    birthday: "09 February 2001",
    job: "Intern", 
    email: "mustafaziyaul391@gmail.com",

    socials: {
        Facebook: {
            link: 'https://www.facebook.com',
            text: "Jiyaul mustaffa",
            icon: <FacebookIcon />
        },
        Instagram :{
            link: 'https://www.instagram.com', 
            text: 'officialjiyaul',
            icon: <InstagramIcon />
        },
        GitHub :{
            link: 'https://www.github.com/jiyaul123', 
            text: 'Jiyaul123',
            icon: <GitHubIcon />
        },
        LinkedIn :{
            link: 'https://www.linkedin.com/in/jiyaul-mustaffa-32a3711a5', 
            text: 'Jiyaul mustaffa',
            icon: <LinkedInIcon />
        }
    },
    About: "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",

    experiences:[
        {
            title: "Web Development Intern",
            date: "Oct 1 - Present",
            description: "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing."
        }
    ],
    eductions:[
        {
            title: "B.Tech, Guru Gobind Singh Education Society's Technical Campus",
            date: "Aug 2021 - Present",
            description: "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing."
        },
        {
            title: "Ideal High School & Junior College",
            date: "July 2018 - July 2020",
            description: "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing."
        },
        {
            title: "Delhi Public School",
            date: "April 2008 - July 2017",
            description: "Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing."
        }
    ],
    services: [
        {
            title: "Web development",
            description: "I have been a badass web developer for last 2 years ",
            icon: <WebOutlinedIcon />
        },
        {
            title: "Photoshop",
            description: "I have been a badass web developer for last 2 years ",
            icon: <PhotoOutlinedIcon />
        },
        {
            title: "Illustrator",
            description: "I have been a badass web developer for last 2 years ",
            icon: <CreateOutlinedIcon />
        },
    ],
    skills: [
        {
            title: "FRONT-END",
             description: ["ReactJS" , "Javascript", "Bootstrap", "Material UI"],
        },
        {
            title: "BACK-END", 
            description: ["NodeJS", "PHP"],
        },
        {
            title: "DATABASES",
            description: ["MySql", "MongoDB"]
        },
    ],
    portfolio: [
        {
            tag: "React",
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "React Project",
            description: "This is my project..",
            links: [
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
            ],
        },
        {
            tag: "PHP",
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "PHP Project",
            description: "This is my project..",
            links: [
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
            ],
        },
        {
            tag: "Java",
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "Java Project",
            description: "This is my project..",
            links: [
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
            ],
        },
        {
            tag: "HTML & CSS",
            image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            title: "HTML Project",
            description: "This is my project..",
            links: [
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
                {
                    link: "https://google.com",
                    icon: <GitHubIcon />,
                },
            ],
        },
    ],
}