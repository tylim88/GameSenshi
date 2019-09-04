// TODO this should turn into npm library so that backend can use the same code
// constants is a nodejs module, so the folder is named constantValues instead

import {
	YEARS,
	MONTH_NAMES,
	MONTH_ABVS_SELECT,
} from 'constantValues/CommonConstants'

import {
	API_DATA,
	API_STATUS,
	API_CODE,
	API_MESSAGE,
	API_SIGN_UP,
	API_SIGN_UP_INPUT,
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	API_SIGN_UP_USERNAME,
} from 'constantValues/ApiConstants'

import {
	ENV,
	ENV_PROJECT_ID,
	ENV_ENABLE_PLAYGROUND,
	ENV_VERIFY_EMAIL_API_URL,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_CORS_WHITELIST,
} from 'constantValues/EnvKeyConstants'

import {
	USER,
	USER_UID,
	USER_EMAIL,
	USER_GENDER,
	USER_COUNTRY,
	USER_LANGUAGES,
	USER_PHOTO_URL,
	USER_SIGNED_IN,
	USER_BIRTH_DATE,
	USER_DISPLAY_NAME,
	USER_PHONE_NUMBER,
	USER_PROVIDER_DATA,
	USER_EMAIL_IS_VERIFIED,
} from 'constantValues/UserConstants'

import {
	CARD_CVC,
	CARD_TYPE,
	CARD_CARDS,
	CARD_NUMBER,
	CARD_IS_OPEN,
	CARD_IS_DEFAULT,
	CARD_EXPIRY_YEAR,
	CARD_HOLDER_NAME,
	CARD_EXPIRY_MONTH,
	CARD_LAST_4_DIGITS,
} from 'constantValues/CardConstants'

import {
	INTERNAL_ERROR_CODE_1,
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_3,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_5,
	INTERNAL_ERROR_CODE_6,
} from 'constantValues/InternalErrorConstants'

import {
	UNEXPECTED_ERROR_CODE_1,
	UNEXPECTED_ERROR_CODE_2,
	UNEXPECTED_ERROR_CODE_3,
	UNEXPECTED_ERROR_CODE_4,
	UNEXPECTED_ERROR_CODE_5,
	UNEXPECTED_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_7,
} from 'constantValues/UnexpectedErrorConstants'

import { FIREBASE_STORAGE_USER_AVATAR } from 'constantValues/FirebaseConstants'

export {
	YEARS,
	MONTH_NAMES,
	MONTH_ABVS_SELECT,
	API_DATA,
	API_STATUS,
	API_CODE,
	API_MESSAGE,
	API_SIGN_UP,
	API_SIGN_UP_INPUT,
	API_SIGN_UP_EMAIL,
	API_SIGN_UP_PASSWORD,
	API_SIGN_UP_USERNAME,
	ENV,
	ENV_PROJECT_ID,
	ENV_ENABLE_PLAYGROUND,
	ENV_VERIFY_EMAIL_API_URL,
	ENV_APOLLO_ENGINE_API_KEY,
	ENV_CORS_WHITELIST,
	USER,
	USER_UID,
	USER_EMAIL,
	USER_GENDER,
	USER_COUNTRY,
	USER_LANGUAGES,
	USER_PHOTO_URL,
	USER_SIGNED_IN,
	USER_BIRTH_DATE,
	USER_DISPLAY_NAME,
	USER_PHONE_NUMBER,
	USER_PROVIDER_DATA,
	USER_EMAIL_IS_VERIFIED,
	CARD_CVC,
	CARD_TYPE,
	CARD_CARDS,
	CARD_NUMBER,
	CARD_IS_OPEN,
	CARD_IS_DEFAULT,
	CARD_EXPIRY_YEAR,
	CARD_HOLDER_NAME,
	CARD_EXPIRY_MONTH,
	CARD_LAST_4_DIGITS,
	INTERNAL_ERROR_CODE_1,
	INTERNAL_ERROR_CODE_2,
	INTERNAL_ERROR_CODE_3,
	INTERNAL_ERROR_CODE_4,
	INTERNAL_ERROR_CODE_5,
	INTERNAL_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_1,
	UNEXPECTED_ERROR_CODE_2,
	UNEXPECTED_ERROR_CODE_3,
	UNEXPECTED_ERROR_CODE_4,
	UNEXPECTED_ERROR_CODE_5,
	UNEXPECTED_ERROR_CODE_6,
	UNEXPECTED_ERROR_CODE_7,
	FIREBASE_STORAGE_USER_AVATAR,
}
