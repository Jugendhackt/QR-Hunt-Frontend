import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'
import { MantineProvider } from '@mantine/core'

function MyApp({ Component, pageProps }: AppProps) {
  return <MantineProvider emotionOptions={{ key: 'mantine', prepend: false }}>
    <Component {...pageProps} />
  </MantineProvider>
}

export default MyApp