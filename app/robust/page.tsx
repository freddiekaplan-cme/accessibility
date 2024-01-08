import React from "react"

const page = () => {
	return (
		<div className="flex flex-col p-8">
			<h2 className="text-center text-lg font-bold">Robust</h2>
			<article>
				<h3>Name, Role, Value</h3>
				<p>Using a header element gives an automatic role=banner.</p>
				<p>
					WCAG 2.1 Success Criterion 4.1.2 | EN 9.4.1.2 |{" "}
					<span lang="sv">Webbriktlinjer Namn, roll, värde</span>
				</p>
			</article>
		</div>
	)
}

export default page
