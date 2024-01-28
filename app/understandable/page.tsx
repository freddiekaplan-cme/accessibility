import React from "react"
import { criteria } from "../constants/Criterias"
import PrincipleTitle from "../components/PrincipleTitle"
import Criteria from "../components/Criteria"
import { Metadata } from "next"
import LabelledForm from "../components/LabelledForm"
import LabelledFormRequired from "../components/LabelledFormRequired"
import Link from "next/link"
import LabelledFormSimple from "../components/LabelledFormSimple"
import Code from "../components/Code"
import LabelledFormErrorSuggestion from "../components/LabelledFormErrorSuggestion"

export const metadata: Metadata = {
	title: "Understandable | Accessibility Project",
}

const Page = () => {
	const wcag332 = criteria.find((item) => item.wcag === "3.3.2")
	const wcag333 = criteria.find((item) => item.wcag === "3.3.3")
	const wcag412 = criteria.find((item) => item.wcag === "4.1.2")

	if (!wcag332) {
		return <div>Error loading information about WCAG 3.3.2.</div>
	}

	if (!wcag333) {
		return <div>Error loading information about WCAG 3.3.3.</div>
	}

	if (!wcag412) {
		return <div>Error loading information about WCAG 4.1.2.</div>
	}

	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col max-w-3xl w-full p-4 sm:p-8 sm:m-8">
				<PrincipleTitle
					title="Understandable"
					quote="Information and the operation of the user interface must be understandable."
				/>

				<section>
					<p>
						It might seem straightforward but making something
						understandable for a user might be tricky and requires
						...
					</p>
				</section>

				<article>
					<h3 className="text-center text-xl font-bold my-8">
						Form Labels
					</h3>
					<p>
						Let&apos;s look at a regular form and the guideline for
						having understandable labels:
					</p>
					<Criteria
						criteriaTitle={wcag332.criteriaTitle}
						text={wcag332.text}
						wcag={wcag332.wcag}
						wcagLink={wcag332.wcagLink}
						en={wcag332.en}
						webb={wcag332.webb}
						webbLink={wcag332.webbLink}
					/>
					<div className="my-8 bg-slate-700 text-white">
						<div className="p-4 sm:p-8">
							<h4 className="mb-4 font-bold">
								Example: Labelled Form
							</h4>
							<p>
								This form have two inputs for given and family
								name, both are required. The user can clearly
								see which input is for given name and for family
								name.
							</p>
							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<LabelledForm />
							</div>
							<p>
								The browser might have a built in message if a
								user doesn&apos;t fill in a required field, but
								you the criteria states that a user should be
								able to understand before submitting the
								information.
							</p>
							<p>
								Here the form uses the * symbol next to each
								input to tell the user that these are required.
								Although this is a common practice, you should
								consider adding this information in text,
								especially for forms with a mix of required and
								not required inputs.
							</p>
							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<LabelledFormRequired />
							</div>
						</div>
					</div>
					The WCAG list more criteria that concern labels, for example
					&quot;Name, Role, Value&quot; that states that form elements
					like inputs must have labels or other equivalent elements:
					<Criteria
						criteriaTitle={wcag412.criteriaTitle}
						text={wcag412.text}
						wcag={wcag412.wcag}
						wcagLink={wcag412.wcagLink}
						en={wcag412.en}
						webb={wcag412.webb}
						webbLink={wcag412.webbLink}
						principle={wcag412.principle}
					/>
					<p>
						For more information about this criteria, see the{" "}
						<Link href="/robust" className="underline">
							Robust principle page.
						</Link>
					</p>
				</article>
				<article>
					<h3 className="text-center text-xl font-bold my-8">
						Error Suggestions
					</h3>
					<p>
						Another part of giving the user enough information to
						understand a site is providing helpful suggestions if,
						for example, an user input is formatted in the wrong way
						or missing.
					</p>

					<Criteria
						criteriaTitle={wcag333.criteriaTitle}
						text={wcag333.text}
						wcag={wcag333.wcag}
						wcagLink={wcag333.wcagLink}
						en={wcag333.en}
						webb={wcag333.webb}
						webbLink={wcag333.webbLink}
					/>

					<p>
						Let&apos;s take a look at a simple form and how we can
						add an error message to it.
					</p>

					<div className="my-8 bg-slate-700 text-white">
						<div className="p-4 sm:p-8">
							<h4 className="mb-4 font-bold">
								Example: Adding an Error Message
							</h4>
							<p>
								I have a form where the user sends in their
								name. Here&apos;s a simplified version of the
								React code without styling:
							</p>
							<div className="bg-slate-800 text-white mb-4">
								<code>
									<Code
										text='const [formMessage, setFormMessage] = useState("")'
										indent={0}
										margin={true}
									/>
									<Code
										text="const handleSubmit = () => {"
										indent={0}
									/>
									<Code
										text='setFormMessage("Name sent!")'
										indent={1}
									/>
									<Code text="}" indent={0} />
								</code>
							</div>
							<div className="bg-slate-800 text-white">
								<code>
									<Code
										text="<div>Name Form</div>"
										indent={0}
									/>
									<Code
										text="<div>Required *</div>"
										indent={0}
									/>
									<Code
										text="<form onSubmit={handleSubmit}"
										indent={0}
									/>
									<Code text="<div>" indent={1} />

									<Code
										text='<label htmlFor="name">Name: *</label>'
										indent={2}
									/>
									<Code text="<input" indent={2} />
									<Code text='type="text"' indent={3} />
									<Code
										text='id="name" name="name"'
										indent={3}
									/>
									<Code
										text="value={formData.name}"
										indent={3}
									/>
									<Code
										text="onChange={handleChange}"
										indent={3}
									/>
									<Code text="required" indent={3} />
									<Code text="/>" indent={2} />
									<Code text="</div>" indent={1} />
									<Code text="<div>" indent={1} />
									<Code
										text='<button type="submit">Submit</button>'
										indent={2}
									/>
									<Code text="</div>" indent={1} />
									<Code text="</form>" indent={0} />
									<Code text="{formMessage}" indent={0} />
								</code>
							</div>
							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<LabelledFormSimple />
							</div>
							<p>
								The version above tells the user tha the name is
								required in text, but not much more. The browser
								will tell the user the field needs to be filled
								in case it&apos;s empty.
							</p>
							<p>
								In this updated version I specify that it&apos;s
								the full name that is asked for, and inside the{" "}
								<code>handleSubmit</code> function I&apos;ve
								included an if statement to check for the
								presence of a space character in the input. This
								serves as a validation check for ensuring two
								names are entered.
							</p>

							<div className="bg-slate-800 text-white mb-4">
								<code>
									<Code
										text='const [formMessage, setFormMessage] = useState("")'
										indent={0}
										margin={true}
									/>
									<Code
										text="const handleSubmit = () => {"
										indent={0}
									/>
									<Code
										text="const { name } = formData"
										indent={1}
										color="green"
										margin={true}
									/>

									<Code
										text='if (name.includes(" ")) {'
										indent={1}
										color="green"
									/>
									<Code
										text='setFormMessage("Name sent!")'
										indent={2}
										color="green"
									/>
									<Code
										text="} else {"
										indent={1}
										color="green"
									/>
									<Code
										text='setFormMessage("Please enter your full name in the format: First Last")'
										indent={2}
										color="green"
									/>
									<Code text="}" indent={1} color="green" />
									<Code text="}" indent={0} />
								</code>
							</div>

							<div className="bg-slate-800 text-white">
								<code>
									<Code
										text="<div>Name Form</div>"
										indent={0}
									/>
									<Code
										text="<div>Required *</div>"
										indent={0}
									/>
									<Code
										text="<form onSubmit={handleSubmit}"
										indent={0}
									/>
									<Code text="<div>" indent={1} />

									<Code
										text='<label htmlFor="name">Full Name: *</label>'
										indent={2}
										color="green"
									/>
									<Code text="<input" indent={2} />
									<Code text='type="text"' indent={3} />
									<Code
										text='id="name" name="name"'
										indent={3}
									/>
									<Code
										text="value={formData.name}"
										indent={3}
									/>
									<Code
										text="onChange={handleChange}"
										indent={3}
									/>
									<Code text="required" indent={3} />
									<Code text="/>" indent={2} />
									<Code text="</div>" indent={1} />
									<Code text="<div>" indent={1} />
									<Code
										text='<button type="submit">Submit</button>'
										indent={2}
									/>
									<Code text="</div>" indent={1} />
									<Code text="</form>" indent={0} />
									<Code text="{formMessage}" indent={0} />
								</code>
							</div>

							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<LabelledFormErrorSuggestion />
							</div>
							<p>
								A couple of notes: Since this simple validation
								only checks for a space character, you can also
								add a <code>trim()</code> to remove any trailing
								spaces. Also remember that you can add more if
								statements with error suggestion for other
								errors, to give the user better and more
								specific information about how they should fill
								in the form.
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	)
}

export default Page
