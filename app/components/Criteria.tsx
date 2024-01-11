import React from "react"
import { CriteriaType } from "../Types"
import Link from "next/link"

const Criteria: React.FC<CriteriaType> = ({
	criteriaTitle,
	text,
	wcag,
	wcagLink,
	en,
	webb,
	webbLink,
}) => {
	return (
		<>
			<div className="my-8 bg-sky-800 p-4 sm:p-8 text-white">
				<h3 className="font-bold text-lg">{criteriaTitle}</h3>
				<p>{text}</p>
				<nav className="mt-4">
					<Link className="underline" href={wcagLink}>
						WCAG 2.1 Success Criterion {wcag}
					</Link>{" "}
					| EN {en} |{" "}
					<Link href={webbLink}>
						<span className="underline" lang="sv">
							Webbriktlinjer: {webb}
						</span>
					</Link>
				</nav>
			</div>
		</>
	)
}

export default Criteria
