import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

// Font awesome configuration
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// Importing all the icons we need
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faFlask,
  faMicroscope,
  faTemperatureLow,
  faCog,
  faPhoneVolume,
  faEnvelope,
  faSearchLocation,
  faArrowsAltH,
  faBars,
  faCheck,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons'
library.add(
  fab,
  faFlask,
  faMicroscope,
  faTemperatureLow,
  faCog,
  faPhoneVolume,
  faEnvelope,
  faSearchLocation,
  faArrowsAltH,
  faBars,
  faCheck,
  faGithub,
  faSpinner,
  faLinkedin
)

import Layout from '../components/layout/layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
