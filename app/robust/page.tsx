import React from "react"
import PrincipleTitle from "../components/PrincipleTitle"
import Criteria from "../components/Criteria"
import { criteria } from "../constants/Criterias"

const page = () => {
	const wcag412 = criteria.find((item) => item.wcag === "4.1.2")

	if (!wcag412) {
		return <div>Error loading information about WCAG 4.1.2.</div>
	}

	return (
		<>
			<PrincipleTitle title="Robust" />
			<Criteria
				criteriaTitle={wcag412.criteriaTitle}
				text={wcag412.text}
				wcag={wcag412.wcag}
				wcagLink={wcag412.wcagLink}
				en={wcag412.en}
				webb={wcag412.webb}
				webbLink={wcag412.webbLink}
			/>
		</>
	)
}

export default page
