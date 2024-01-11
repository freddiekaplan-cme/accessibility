import React from "react"
import { PrincipleTitleType } from "../Types"

const PrincipleTitle: React.FC<PrincipleTitleType> = ({ title }) => {
	return <h2 className="text-center text-2xl font-bold pb-10">{title}</h2>
}

export default PrincipleTitle
