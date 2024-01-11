"use client"
import React, { ChangeEvent, useState } from "react"
import PrincipleTitle from "../components/PrincipleTitle"
import Criteria from "../components/Criteria"
import { criteria } from "../constants/Criterias"
import { FormDataType } from "../Types"
import Link from "next/link"
import Image from "next/image"
import img from "../../public/pexels-thisisengineering-3861958.webp"

const Page = () => {
	const wcag412 = criteria.find((item) => item.wcag === "4.1.2")
	const [formData, setFormData] = useState<FormDataType>({ name: "" })
	const [secondFormData, setSecondFormData] = useState<FormDataType>({
		name: "",
	})
	const [formMessage, setFormMessage] = useState<string>("")
	const [secondFormMessage, setSecondFormMessage] = useState<string>("")

	if (!wcag412) {
		return <div>Error loading information about WCAG 4.1.2.</div>
	}

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(
			(prevState) =>
				({
					...prevState,
					[name]: value,
				}) as FormDataType,
		)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setFormMessage("Name sent!")
	}

	const secondHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setSecondFormData(
			(prevState) =>
				({
					...prevState,
					[name]: value,
				}) as FormDataType,
		)
	}

	const secondHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setSecondFormMessage("Name sent!")
	}

	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col p-8 max-w-3xl">
				<PrincipleTitle title="Robust" />
				<section>
					{" "}
					<div className="pb-8 text-lg italic">
						Content must be robust enough that it can be interpreted
						by a wide variety of user agents, including assistive
						technologies.
					</div>
					<p>
						For a developer this means that a site needs to be built
						with assistive technologies, like screen readers, in
						mind. For the most part, using semantic HTML gives you
						this automatically.
					</p>
					<div className="my-8 bg-slate-700 text-white">
						<div className="p-8">
							<div className="mb-4 font-bold">
								Example: Semantic HTML
							</div>
							<p>
								Using{" "}
								<code className="bg-slate-800 text-white">
									&lt;header&gt;
								</code>{" "}
								for your header or{" "}
								<code className="bg-slate-800 text-white">
									&lt;nav&gt;
								</code>{" "}
								as your element containing your links instead of
								a generic{" "}
								<code className="bg-slate-800 text-white">
									&lt;div&gt;
								</code>{" "}
								helps assistive technologies like screen readers
								to navigate the site and are considered best
								practices.
							</p>
						</div>
					</div>
				</section>

				<Image
					className="mt-8 mb-4"
					src={img}
					alt="A woman working at a decorated office desk with three screens. The screens have  code on them."
				/>
				<Link
					href="https://www.pexels.com/photo/woman-coding-on-computer-3861958"
					className="mb-8 text-right text-sm underline"
				>
					Photo by ThisIsEngineering
				</Link>

				<article>
					<p>
						So we&apos;ve established that you should use semantic
						html whenever possible. But what happens if you code
						something that for any reason looks a bit different?
						Let&apos;s take a look at at this specific criterion:
					</p>
					<Criteria
						criteriaTitle={wcag412.criteriaTitle}
						text={wcag412.text}
						wcag={wcag412.wcag}
						wcagLink={wcag412.wcagLink}
						en={wcag412.en}
						webb={wcag412.webb}
						webbLink={wcag412.webbLink}
					/>
					<p>
						In practice this means that if you create your own piece
						of code, you need to make sure important accessibility
						parts like aria roles and labels are present.
					</p>
					<div className="my-8 bg-slate-700 text-white">
						<div className="p-8">
							<div className="mb-4 font-bold">
								Example: My Cool Form
							</div>
							<p>
								I want to add a small form on my site where a
								user can send in their name for a competition.
								Usually a form in React is structured something
								like this:
							</p>
							<div className="bg-slate-800 text-white my-8">
								<code>
									<div>&lt;div&gt;Name Form&lt;/div&gt;</div>
									<div>
										&lt;form
										onSubmit=&#123;handleSubmit&#125;
									</div>
									<div className="ml-8">&lt;div&gt;</div>
									<div className="ml-16">
										&lt;label
										htmlFor=&quot;name&quot;&gt;Name:&lt;/label&gt;
									</div>
									<div className="ml-16">&lt;input</div>
									<div className="ml-24">
										type=&quot;text&quot;
									</div>
									<div className="ml-24">
										id=&quot;name&quot;
										name=&quot;name&quot;
									</div>
									<div className="ml-24">
										value=&#123;formData.name&#125;
									</div>
									<div className="ml-24">
										onChange=&#123;handleChange&#125;
									</div>
									<div className="ml-24">required</div>
									<div className="ml-16">/&gt;</div>
									<div className="ml-8">&lt;/div&gt;</div>
									<div className="ml-8">&lt;div&gt;</div>
									<div className="ml-16">
										&lt;button
										type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
									</div>
									<div className="ml-8">&lt;/div&gt;</div>
									<div>&lt;/form&gt;</div>
								</code>
							</div>
							<p>Which looks something like this:</p>
							<div className="bg-white text-black flex justify-center p-8 my-8">
								<form onSubmit={handleSubmit}>
									<div>
										<div className="font-bold mb-4">
											Name Form
										</div>
										<label className="mr-4" htmlFor="name">
											Name:
										</label>
										<input
											className="p-2 border-black border-solid border-2"
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div>
										<button
											className="text-white p-2 my-8 rounded bg-green-700"
											type="submit"
										>
											Submit
										</button>
									</div>

									{formMessage}
								</form>
							</div>
							<p>
								However, for this small form I want something
								tighter and just use a placeholder instead of
								the label:
							</p>
							<div className="bg-slate-800 text-white my-8">
								<code>
									<div>
										<div>
											&lt;div&gt;Name Form&lt;/div&gt;
										</div>
										&lt;form
										onSubmit=&#123;handleSubmit&#125;
									</div>
									<div className="ml-8">&lt;div&gt;</div>

									<div className="ml-16">&lt;input</div>
									<div className="ml-24">
										type=&quot;text&quot;
									</div>
									<div
										aria-label="Highlighted code"
										className="ml-24 text-green-400"
									>
										placeholder=&quot;Name&quot;
									</div>
									<div className="ml-24">
										id=&quot;name&quot;
										name=&quot;name&quot;
									</div>
									<div className="ml-24">
										value=&#123;formData.name&#125;
									</div>
									<div className="ml-24">
										onChange=&#123;handleChange&#125;
									</div>
									<div className="ml-24">required</div>
									<div className="ml-16">/&gt;</div>
									<div className="ml-8">&lt;/div&gt;</div>
									<div className="ml-8">&lt;div&gt;</div>
									<div className="ml-16">
										&lt;button
										type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
									</div>
									<div className="ml-8">&lt;/div&gt;</div>
									<div>&lt;/form&gt;</div>
								</code>
							</div>
							<p>
								This is my reworked form, note that there is no
								label next to the input.
							</p>

							<div className="bg-white text-black flex justify-center p-8 my-8">
								<form onSubmit={secondHandleSubmit}>
									<div id="nameform" className="font-bold">
										Name Form
									</div>
									<div className="flex items-center gap-4">
										<div>
											<input
												className="p-2 border-black border-solid border-2"
												type="text"
												placeholder="Name"
												id="name"
												name="name"
												value={secondFormData.name}
												onChange={secondHandleChange}
												aria-labelledby="nameform"
												required
											/>
										</div>
										<div>
											<button
												className="text-white p-2 my-8 mr-2 rounded bg-green-700"
												type="submit"
											>
												Submit
											</button>
										</div>
									</div>
									{secondFormMessage}
								</form>
							</div>

							<p>
								At this point everything looks ok and I get no
								errors in my editor. However, since the label
								for the input is missing, a visitor using a
								screen reader, for example, will have trouble
								interacting with the form — and my site will be
								in violation of the WCAG 4.1.2 rule as stated
								above. Uh-oh!
							</p>
							<p>
								So what&apos;s my solution? Since the{" "}
								<code className="bg-slate-800 text-white">
									&lt;label&gt;
								</code>{" "}
								is missing I don&apos;t get the accessibility
								automatically. After going over to{" "}
								<Link
									className="underline"
									href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Text_labels_and_names#form_elements_should_have_a_visible_text_label"
								>
									MDN
								</Link>{" "}
								and reading about the issue, I see that a form
								MUST have a visible label of some sort.{" "}
							</p>
							<p>Hm! Ok, I might have an idea.</p>

							<div className="bg-slate-800 text-white my-8">
								<code>
									<div>
										<div>
											&lt;div{" "}
											<span
												aria-label="Highlighted code"
												className="text-green-400"
											>
												id=&quot;nameform&quot;
											</span>
											&gt;Name Form&lt;/div&gt;
										</div>
										&lt;form
										onSubmit=&#123;handleSubmit&#125;
									</div>
									<div className="ml-8">&lt;div&gt;</div>

									<div className="ml-16">&lt;input</div>
									<div className="ml-24">
										type=&quot;text&quot;
									</div>
									<div className="ml-24">
										placeholder=&quot;Name&quot;
									</div>
									<div className="ml-24">
										id=&quot;name&quot;
										name=&quot;name&quot;
									</div>
									<div className="ml-24">
										value=&#123;formData.name&#125;
									</div>
									<div className="ml-24">
										onChange=&#123;handleChange&#125;
									</div>
									<div
										aria-label="Highlighted code"
										className="ml-24 text-green-400"
									>
										aria-labelledby=&quot;nameform&quot;
									</div>
									<div className="ml-24">required</div>
									<div className="ml-16">/&gt;</div>
									<div className="ml-8">&lt;/div&gt;</div>
									<div className="ml-8">&lt;div&gt;</div>
									<div className="ml-16">
										&lt;button
										type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
									</div>
									<div className="ml-8">&lt;/div&gt;</div>
									<div>&lt;/form&gt;</div>
								</code>
							</div>

							<p>
								Since I already have a descriptive little title
								at the top, I can use it as a label by adding{" "}
								<code className="bg-slate-800 text-white">
									aria-labelledby
								</code>{" "}
								and a corresponding{" "}
								<code className="bg-slate-800 text-white">
									id
								</code>{" "}
								in the element that will now act as a label for
								this part of the form.
							</p>
							<p>
								Please note that you should use a{" "}
								<code className="bg-slate-800 text-white">
									&lt;label&gt;
								</code>{" "}
								for each{" "}
								<code className="bg-slate-800 text-white">
									&lt;input&gt;
								</code>{" "}
								element and that another solution would&apos;ve
								been to simply rework the{" "}
								<code className="bg-slate-800 text-white">
									&lt;label&gt;
								</code>{" "}
								from our first form and style it to look more
								like the title.
							</p>
							<p>
								Now all accessibility checks are happy and I can
								keep working on my site.
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	)
}

export default Page
