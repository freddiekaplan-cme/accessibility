import React from "react"
import { PrincipleTitleType } from "../Types"

const PrincipleTitle: React.FC<PrincipleTitleType> = ({ title }) => {
	return <h2 className="text-center text-lg font-bold pt-8">{title}</h2>
}

export default PrincipleTitle
