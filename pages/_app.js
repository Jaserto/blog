import '../styles/globals.css'
import { ThemeProvider } from 'styled-components';
//import { defaultTheme } from '../styles/default'
import  {defaultTheme}  from '../styles/default.js'
import '../styles/globals.css'
import AppLayout from '../layouts/app-layout'

import "../styles/prism-night-owl.css"


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppLayout>
          <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}

export default MyApp
