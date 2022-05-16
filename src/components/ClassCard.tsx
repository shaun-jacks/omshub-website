import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Tooltip from '@mui/material/Tooltip'
import Rating from '@mui/material/Rating'
import { CardActionArea } from '@mui/material'
import { grey } from '@mui/material/colors'
import Typography from '@mui/material/Typography'

interface ClassCardProps {
	title: string
	acronym?: string
	classId: string
	blurb: string
	image?: string
	isFoundational?: boolean
	reviewCount: number
	reviewValue: number
	difficulty: number
}

const ClassCard = ({ ...props }: ClassCardProps) => {
	return (
		<Card sx={{ minWidth: 300, boxShadow: `0 5px 15px 0 ${grey[300]}` }}>
			<CardActionArea>
				<CardMedia
					component='img'
					height='140'
					image={props.image}
					alt='class background'
				/>
				<CardContent>
					<Typography variant='subtitle2' color='text.secondary' gutterBottom>
						{props.acronym}
					</Typography>
					<Typography variant='h5' color='text.primary' gutterBottom>
						{props.title}
					</Typography>
					<Typography noWrap variant='body2' color='text.secondary'>
						{props.blurb}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'center',
							mt: 5,
						}}
					>
						<Typography sx={{ mr: 1 }} variant='body2' color='text.secondary'>
							{props.reviewCount} reviews
						</Typography>
						<Rating defaultValue={props.reviewValue} precision={0.5} readOnly />
					</Box>
					<Box
						sx={{
							display: 'flex',
							alignItems: 'flex-start',
							mt: 5,
						}}
					>
						<Chip label={props.classId} variant='outlined' />
						{(() => {
							if (props.difficulty >= 4.0) {
								return (
									<Chip
										label='Hard'
										sx={{ ml: 0.5 }}
										variant='outlined'
										color='error'
									></Chip>
								)
							} else if (props.difficulty >= 3.0) {
								return (
									<Chip
										label='Medium'
										sx={{ ml: 0.5 }}
										variant='outlined'
										color='warning'
									></Chip>
								)
							} else {
								return (
									<Chip
										label='Easy'
										sx={{ ml: 0.5 }}
										variant='outlined'
										color='success'
									></Chip>
								)
							}
						})()}
						{props.isFoundational ? (
							<Tooltip title='This course satisfies the foundational requirement (first 2 courses with B or better).'>
								<Chip
									sx={{ ml: 0.5 }}
									label='Foundational'
									variant='outlined'
									color='primary'
								/>
							</Tooltip>
						) : null}
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}

export default ClassCard
