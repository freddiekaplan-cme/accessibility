import React from "react"
import { CriteriaType } from "../Types"
import Link from "next/link"

const Criteria: React.FC<CriteriaType> = ({
	criteriaTitle,
	text,
	text2,
	text3,
	text4,
	text5,
	wcag,
	wcagLink,
	en,
	webb,
	webbLink,
}) => {
	return (
		<>
			<div className="my-8 bg-sky-800 p-4 sm:p-8 text-white">
				<h4 className="font-bold text-lg">{criteriaTitle}</h4>
				<p>{text}</p>
				{text2 && (
					<ul className="ml-4">
						<li>{text2}</li>
						{text3 && <li>{text3}</li>}
						{text4 && <li>{text4}</li>}
						{text5 && <li>{text5}</li>}
					</ul>
				)}
				<nav className="mt-4">
					<Link className="underline" href={wcagLink}>
						WCAG 2.2 Success Criterion {wcag}
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
