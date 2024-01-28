import React from "react"
import { PrincipleTitleType } from "../Types"

const PrincipleTitle: React.FC<PrincipleTitleType> = ({ title, quote }) => {
	return (
		<>
			<h2 id="pageTitle" className="text-center text-2xl font-bold mb-10">
				{title}
			</h2>
			<div className="flex justify-center">
				{quote && (
					<blockquote className="mb-8 text-lg italic sm:w-[50%] sm:text-center">
						{quote}
					</blockquote>
				)}
			</div>
		</>
	)
}

export default PrincipleTitle
