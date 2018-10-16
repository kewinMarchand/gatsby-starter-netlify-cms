import React from 'react'
import Helmet from 'react-helmet'
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../Theme';
import {CssBaseline} from '@material-ui/core';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet title="Home | Gatsby + Netlify CMS" />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </MuiThemeProvider>
  </React.Fragment>
)

export default TemplateWrapper
