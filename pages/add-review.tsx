import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
// import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
// import Button from '@mui/material/Button'
// import Radio from '@mui/material/Radio'
// import RadioGroup from '@mui/material/RadioGroup'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import Link from '../src/Link'
import TextareaAutosize from '@mui/base/TextareaAutosize'
import Fab from '@mui/material/Fab'

const About: NextPage = () => {
	return (
		<Container
			maxWidth='lg'
			sx={{
				height: '100%',
				mt: 4,
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'center',
					width: '100%',
					height: '100%',
				}}
			>
				<Box
					sx={{
						backgroundColor: 'blue',
						display: 'flex',
						alignSelf: 'center',
						width: '100%',
					}}
				></Box>
				<Box
					sx={{
						backgroundColor: 'red',
						display: 'flex',
						flexDirection: 'column',
						alignSelf: 'center',
						width: '100%',
					}}
				>
					<TextareaAutosize
						placeholder='(Add your review text here)'
						minRows={20}
					/>
				</Box>
			</Box>
			<Fab
				sx={{
					position: 'absolute',
					bottom: 16,
					right: 16,
				}}
			>
				Submit
			</Fab>
		</Container>
	)
}

export default About
