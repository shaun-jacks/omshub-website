import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '../src/Link'
import ProTip from '../src/ProTip'
import Copyright from '../src/Copyright'

const About: NextPage = () => {
	return (
		<Container maxWidth='lg'>
			<Box
				sx={{
					my: 4,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant='h4' component='h1' gutterBottom>
					You are looking at about.tsx
				</Typography>
				<Box maxWidth='sm'>
					<Button variant='contained' component={Link} noLinkStyle href='/'>
						Go to the home page
					</Button>
				</Box>
				<ProTip />
				<Copyright />
			</Box>
		</Container>
	)
}

export default About
