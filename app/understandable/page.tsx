import React from "react"
import { criteria } from "../constants/Criterias"
import PrincipleTitle from "../components/PrincipleTitle"
import Criteria from "../components/Criteria"

const Page = () => {
	const wcag332 = criteria.find((item) => item.wcag === "3.3.2")
	const wcag333 = criteria.find((item) => item.wcag === "3.3.3")

	if (!wcag332) {
		return <div>Error loading information about WCAG 3.3.2.</div>
	}

	if (!wcag333) {
		return <div>Error loading information about WCAG 3.3.3.</div>
	}

	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col max-w-3xl w-full p-4 sm:p-8 sm:m-8">
				<PrincipleTitle
					title="Understandable"
					quote="Information and the operation of the user interface must be understandable."
				/>

				<section>Section text</section>

				<article>
					<h3 className="text-center text-xl font-bold my-8">
						Rubrik
					</h3>
					<p>text</p>
					<Criteria
						criteriaTitle={wcag332.criteriaTitle}
						text={wcag332.text}
						wcag={wcag332.wcag}
						wcagLink={wcag332.wcagLink}
						en={wcag332.en}
						webb={wcag332.webb}
						webbLink={wcag332.webbLink}
					/>
				</article>
				<article>
					<h3 className="text-center text-xl font-bold my-8">
						Rubrik
					</h3>
					<p>text</p>
					<Criteria
						criteriaTitle={wcag333.criteriaTitle}
						text={wcag333.text}
						wcag={wcag333.wcag}
						wcagLink={wcag333.wcagLink}
						en={wcag333.en}
						webb={wcag333.webb}
						webbLink={wcag333.webbLink}
					/>
				</article>
			</div>
		</div>
	)
}

export default Page
