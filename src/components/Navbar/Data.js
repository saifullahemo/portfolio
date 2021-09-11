import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

export const links = [
  {
    id: 1,
    url: '/',
    text: 'Home',
  },
  {
    id: 2,
    url: '/works',
    text: 'Works',
  },
  {
    id: 3,
    url: '/about',
    text: 'About me',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
]

export const social = [
  {
    id: 1,
    url: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
  {
    id: 2,
    url: 'https://github.com/saifullahemo',
    icon: <FaGithub />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/abu-rayhan-md-saifullah-a8589b134/',
    icon: <FaLinkedin />,
  }
]
