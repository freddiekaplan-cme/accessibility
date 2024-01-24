import { Url } from "next/dist/shared/lib/router/router"

export interface CriteriaType {
	criteriaTitle: string
	text: string
	text2?: string | undefined
	text3?: string | undefined
	text4?: string | undefined
	text5?: string | undefined
	wcag: string
	wcagLink: Url
	en: string
	webb: string
	webbLink: Url
	level?: string
	principle?: string
}

export interface PrincipleTitleType {
	title: string
	quote?: string
}

export interface CodeType {
	text: string
	indent: number
	margin?: boolean
	color?: string
}

export interface FormDataType {
	name: string
}

export interface LabelledFormDataType {
	givenName: string
	familyName: string
}

export interface AgeFormDataType {
	age: number | null
}

export interface ChartType {
	firstValue: number
	secondValue: number
}
