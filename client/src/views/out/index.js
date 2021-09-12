import React from 'react'

const Home = React.lazy(() => import('./home'))
<<<<<<< HEAD
=======
const About = React.lazy(() => import('./about'))
const Contact = React.lazy(() => import('./contact'))
const Support = React.lazy(() => import('./support'))
const Interviews = React.lazy(() => import('./interviews'))
const History = React.lazy(() => import('./history'))
const Team = React.lazy(() => import('./team'))
>>>>>>> b1844f4 (create three interviews)
const Login = React.lazy(() => import('./login'))
const RegisterEntry = React.lazy(() => import('./registerEntry'))
const Register = React.lazy(() => import('./register'))
const RegisterFB = React.lazy(() => import('./registerFB'))
const Forget = React.lazy(() => import('./forget'))
const ResetPassword = React.lazy(() => import('./resetPassword'))

export { Home, Login, RegisterEntry, Register, RegisterFB, Forget, ResetPassword }
