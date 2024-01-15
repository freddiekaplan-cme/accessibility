import { Url } from "next/dist/shared/lib/router/router"

export interface CriteriaType {
	criteriaTitle: string | undefined
	text: string | undefined
	text2?: string | undefined
	text3?: string | undefined
	text4?: string | undefined
	wcag: string | undefined
	wcagLink: Url
	en: string | undefined
	webb: string | undefined
	webbLink: Url
}

export interface PrincipleTitleType {
	title: string
	quote: string
}

export interface FormDataType {
	name: string
}
