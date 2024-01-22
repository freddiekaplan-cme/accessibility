import React from "react"
import { CodeType } from "../Types"

const Code: React.FC<CodeType> = ({ text, indent, margin, color }) => {
	const updatedIndent =
		indent === 0 ? "" : "ml-" + 4 * indent + " sm:ml-" + 8 * indent

	const updatedMargin = margin ? "mb-4" : ""

	const updatedColor = color ? "text-" + color + "-400" : ""

	return (
		<div
			className={`${updatedIndent} ${updatedMargin} ${updatedColor}`}
			aria-label={
				updatedColor !== "" ? `Code is highlighted in ${color}.` : ""
			}
		>
			{text}
		</div>
	)
}

export default Code
