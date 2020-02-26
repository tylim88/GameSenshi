import React, { useState, useCallback, useRef, useEffect } from 'react'
import Sound from 'react-sound'
import VolumeMuteIcon from '@material-ui/icons/VolumeMute'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'
import Loader from 'react-loader-spinner'
import clsx from 'clsx'
import uuidV4 from 'uuid/v4'
import { Exports } from '5_comp_0'
import { stopUndefined } from '1_utils'
import { ColStyledPlay } from './styled'
const { Button, Col, Row } = stopUndefined(Exports)

const BUTTON_SOUND_SET_UUID = 'setUuid'
const BUTTON_SOUND_STATE_UUID = 'uuid'

const { PLAYING, STOPPED } = Sound.status
const Spinner = <Loader type='Oval' height={24} width={24} color='#fff' />
const DELAY = 1000
const convertToMinutes = duration => {
	const time = Math.round(duration / 1000)
	const minutes = ('0' + Math.floor(time / 60)).slice(-2)
	const seconds = ('0' + (time - minutes * 60)).slice(-2)
	return minutes + ':' + seconds
}

const ButtonSound = props => {
	const [playStatus, setPlayStatus] = useState(STOPPED)
	const [position, setPosition] = useState(Spinner)
	const [duration, setDuration] = useState('Sound')
	const [loading, setLoading] = useState(false)
	const [Icon, setIcon] = useState(() => VolumeUpIcon)
	const ref = useRef(uuidV4())
	const delay = useRef(0)
	const icon = useRef(Icon)
	const intervalId = useRef(-1)
	const {
		url,
		color,
		[BUTTON_SOUND_STATE_UUID]: uuid,
		[BUTTON_SOUND_SET_UUID]: setUuid,
	} = props

	useEffect(() => {
		icon.current = Icon
	}, [Icon])

	const onPlaying = useCallback(
		sound => {
			setLoading(false) // * this line is needed because sometime onLoading doesn't work correctly
			if (!delay.current) {
				setTimeout(() => {
					setPosition(convertToMinutes(sound.position))
					const { current: icon_ } = icon
					if (icon_ === VolumeMuteIcon) {
						setIcon(() => VolumeDownIcon)
					} else if (icon_ === VolumeDownIcon) {
						setIcon(() => VolumeUpIcon)
					} else if (icon_ === VolumeUpIcon) {
						setIcon(() => VolumeMuteIcon)
					}
				}, delay.current)
				intervalId.current = setInterval(() => {
					setPosition(convertToMinutes(sound.position))
					const { current: icon_ } = icon
					if (icon_ === VolumeMuteIcon) {
						setIcon(() => VolumeDownIcon)
					} else if (icon_ === VolumeDownIcon) {
						setIcon(() => VolumeUpIcon)
					} else if (icon_ === VolumeUpIcon) {
						setIcon(() => VolumeMuteIcon)
					}
				}, DELAY)
			}
			delay.current = DELAY
		},
		[loading]
	)

	const onLoading = useCallback(
		sound => {
			setLoading(true)
			setDuration(convertToMinutes(sound.duration))
		},
		[loading]
	)

	const reset = useCallback(() => {
		setPlayStatus(STOPPED)
		setLoading(false)
		clearInterval(intervalId.current)
		setTimeout(() => {
			setIcon(() => VolumeUpIcon)
		}, DELAY)
		delay.current = 0
	}, [])

	const onFinishedPlaying = useCallback(() => {
		reset()
	}, [])

	useEffect(() => {
		if (ref.current !== uuid && uuid !== null) {
			reset()
		}
	}, [uuid])

	const onClick = useCallback(
		e => {
			e.preventDefault()
			e.stopPropagation()
			if (playStatus === STOPPED) {
				setUuid(ref.current)
				setPlayStatus(PLAYING)
			} else {
				reset()
			}
		},
		[playStatus]
	)

	const onLoad = useCallback(() => {
		setLoading(false)
	}, [])

	return (
		<Button
			baseClass='w-100'
			className='btn-round p-1 '
			color={color}
			type='button'
			onClick={onClick}
		>
			<Row className='align-items-center'>
				<Col xs='0' sm='4'>
					<Icon />
				</Col>
				<Col xs='0' sm='8' className={clsx('p-0')}>
					{loading ? Spinner : playStatus === STOPPED ? duration : position}
				</Col>
				<ColStyledPlay>
					{loading ? Spinner : playStatus === STOPPED ? <Icon /> : position}
				</ColStyledPlay>
			</Row>
			<Sound
				url={url || ''}
				ignoreMobileRestrictions
				playStatus={playStatus}
				onLoading={onLoading}
				onLoad={onLoad}
				onPlaying={onPlaying}
				onFinishedPlaying={onFinishedPlaying}
			/>
		</Button>
	)
}

export { ButtonSound, BUTTON_SOUND_STATE_UUID, BUTTON_SOUND_SET_UUID }
