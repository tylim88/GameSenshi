import React, { useState, useEffect, useRef } from 'react'
import { stopUndefined } from 'utils'
import Loader from 'react-loader-spinner'
import { Container, Row, Col } from 'reactstrap'
import { Exports } from 'componentpMultiOrganisms'
import { ROUTE_PARAM_UID } from 'routes'
import { docSenshiProfileGet, docSenshiProfileOnSnapshot } from 'fireStored'
import {
	UNEXPECTED_ERROR_CODE_15,
	UNEXPECTED_ERROR_CODE_16,
	UNEXPECTED_ERROR_CODE_17,
} from 'constantValues'
import { storeModalSimpleError } from 'state'

const {
	CarouselLightBoxPropedProfile,
	CardGiftWithProps,
	TextIconPropedProfileGift,
	TextIconPropedProfileGallery,
	CardUserHorizontal,
	CommentWithPaginationPropedDefault,
	Section,
	WrapperStoreWrapperPropedProfile,
	Tab,
	TAB_NAME,
	TAB_CONTENT,
	TabProductPropedProfile,
	PageError404,
} = stopUndefined(Exports)

// fake data
const channels = {
	facebook: 'https://facebook.com',
	twitch: 'https://twitch.com',
	youtube: 'https://youtube.com',
}
const badges = ['female', 'verified', 'risingStar']
const games = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']

const tabs = games.map((tab, index) => {
	return {
		[TAB_NAME]: tab,
		[TAB_CONTENT]: TabProductPropedProfile[index],
	}
})

const PageProfile = props => {
	const {
		match: {
			params: { [ROUTE_PARAM_UID]: uid },
		},
	} = props
	const [loading, setLoading] = useState(true)
	const [exist, setExist] = useState(true)
	const [data, setData] = useState(null)
	const [genericError, setGenericError] = useState(false)
	const observer = useRef(() => {})

	useEffect(() => {
		return observer.current
	}, [])

	useEffect(() => {
		const attachListener = async () => {
			let doc = null
			try {
				doc = await docSenshiProfileGet(uid)
			} catch (err) {
				setLoading(false)
				setExist(false)
				setGenericError(true)
				return storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_15)
			}

			if (doc && doc.exists) {
				observer.current = docSenshiProfileOnSnapshot(
					uid,
					async docSnapshot => {
						try {
							const data = await docSnapshot.data()
							setData(data)
							setLoading(false)
							setExist(true)
						} catch (err) {
							setExist(false)
							setGenericError(true)
							storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_17)
						}
					},
					err => {
						setExist(false)
						setGenericError(true)
						storeModalSimpleError(err, UNEXPECTED_ERROR_CODE_16)
					}
				)
			} else {
				setExist(false)
				setGenericError(false)
			}
		}

		attachListener()
	}, [uid])

	return exist ? (
		<WrapperStoreWrapperPropedProfile>
			{loading ? (
				<Row
					className='w-100 align-items-center'
					style={{ height: '100vh', marginTop: '-5rem' }}
				>
					<Col align='center'>
						<Loader
							type='Ball-Triangle'
							color='#FFD700'
							height='20vh'
							width='20vh'
						/>
						<br />
						<p style={{ fontSize: '180%' }}>Loading, Please Wait ...</p>
					</Col>
				</Row>
			) : (
				<>
					<Section>
						<img
							alt='...'
							className='dots'
							src={require('assets/img/dots.png')}
						/>
						<img
							alt='...'
							className='path'
							src={require('assets/img/path4.png')}
						/>
						<Container>
							<Row>
								<Col>
									<CardUserHorizontal
										data={data}
										username='Mike Scheinder'
										avatar={require('assets/img/mike.jpg')}
										channels={channels}
										signature='Nice to meet you!'
										badges={badges}
										games={games}
										online
										uid={'123456'}
										favorite
									/>
								</Col>
							</Row>
							<Row className='pt-5'>
								<Col>
									<Tab tabs={tabs} />
								</Col>
							</Row>
							<Row>
								<Col>
									<TextIconPropedProfileGift />
								</Col>
							</Row>
							<Row>
								<Col md='6'>
									<CardGiftWithProps />
								</Col>
								<Col md='6'>
									<CommentWithPaginationPropedDefault />
								</Col>
							</Row>
						</Container>
					</Section>
					<Section>
						<Container>
							<Row>
								<Col>
									<TextIconPropedProfileGallery />
								</Col>
							</Row>
							<Row>
								<Col md='12'>
									<CarouselLightBoxPropedProfile items={data.carousel} />
								</Col>
							</Row>
						</Container>
					</Section>
				</>
			)}
		</WrapperStoreWrapperPropedProfile>
	) : (
		<PageError404 generic={genericError} />
	)
}

export { PageProfile }