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
		<div className="flex flex-col p-8">
			<article>
				<h3>{criteriaTitle}</h3>
				<p>{text}</p>
				<nav className="pt-8">
					<Link href={wcagLink}>
						WCAG 2.1 Success Criterion {wcag}
					</Link>{" "}
					| EN {en} |{" "}
					<Link href={webbLink}>
						<span lang="sv">Webbriktlinjer: {webb}</span>
					</Link>
				</nav>
			</article>
		</div>
	)
}

export default Criteria
