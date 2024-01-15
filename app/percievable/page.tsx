import React from "react"
import PrincipleTitle from "../components/PrincipleTitle"
import Criteria from "../components/Criteria"
import { criteria } from "../constants/Criterias"

const page = () => {
	const wcag141 = criteria.find((item) => item.wcag === "1.4.1")
	const wcag143 = criteria.find((item) => item.wcag === "1.4.3")
	const wcag1411 = criteria.find((item) => item.wcag === "1.4.11")

	if (!wcag141) {
		return <div>Error loading information about WCAG 1.4.1.</div>
	}

	if (!wcag143) {
		return <div>Error loading information about WCAG 1.4.3.</div>
	}

	if (!wcag1411) {
		return <div>Error loading information about WCAG 1.4.11.</div>
	}

	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col max-w-3xl w-[100%] p-4 sm:m-8">
				<PrincipleTitle
					title="Percievable"
					quote="Information and user interface components must be presentable to users in ways they can perceive."
				/>

				<section>Intro</section>

				<article>
					<h3 className="text-center text-xl font-bold mb-8">
						Example 1
					</h3>
					<p>Article with example 1</p>
					<Criteria
						criteriaTitle={wcag141.criteriaTitle}
						text={wcag141.text}
						wcag={wcag141.wcag}
						wcagLink={wcag141.wcagLink}
						en={wcag141.en}
						webb={wcag141.webb}
						webbLink={wcag141.webbLink}
					/>
				</article>
				<article>
					<h3 className="text-center text-xl font-bold mb-8">
						Example 2
					</h3>
					<p>Article with example 2</p>
					<Criteria
						criteriaTitle={wcag143.criteriaTitle}
						text={wcag143.text}
						text2={wcag143.text2}
						text3={wcag143.text3}
						text4={wcag143.text4}
						wcag={wcag143.wcag}
						wcagLink={wcag143.wcagLink}
						en={wcag143.en}
						webb={wcag143.webb}
						webbLink={wcag143.webbLink}
					/>
				</article>
				<article>
					<h3 className="text-center text-xl font-bold mb-8">
						Example 3
					</h3>
					<p>Article with example 3</p>
					<Criteria
						criteriaTitle={wcag1411.criteriaTitle}
						text={wcag1411.text}
						text2={wcag143.text2}
						text3={wcag143.text3}
						wcag={wcag1411.wcag}
						wcagLink={wcag1411.wcagLink}
						en={wcag1411.en}
						webb={wcag1411.webb}
						webbLink={wcag1411.webbLink}
					/>
				</article>
			</div>
		</div>
	)
}

export default page
