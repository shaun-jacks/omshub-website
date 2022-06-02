import * as React from 'react'
import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { NavBar } from '../src/components/NavBar'
import createEmotionCache from '../src/createEmotionCache'
import Copyright from '../src/Copyright'
import theme from '../src/theme'
import { SessionProvider } from "next-auth/react"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps:{ session, ...pageProps }} = props
	return (
		<SessionProvider session={session}>
			<CacheProvider value={emotionCache}>
				<Head>
					<meta name='viewport' content='initial-scale=1, width=device-width' />
					<title>OMSHub</title>
				</Head>
				<ThemeProvider theme={theme}>
					{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
					<CssBaseline />
					<NavBar />
					<Copyright/>
					<Component {...pageProps} />
				</ThemeProvider>
			</CacheProvider>
		</SessionProvider>

	)
}
