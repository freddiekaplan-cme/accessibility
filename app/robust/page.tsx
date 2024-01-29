import React from "react"
import PrincipleTitle from "../components/PrincipleTitle"
import Criteria from "../components/Criteria"
import { criteria } from "../constants/Criterias"
import Link from "next/link"
import Image from "next/image"
import img from "../../public/pexels-thisisengineering-3861958.webp"
import RegularForm from "../components/RegularForm"
import PlaceholderForm from "../components/PlaceholderForm"
import { Metadata } from "next"
import {
	FormLabelledBy,
	FormWithPlaceholder,
	MyForm,
	SiteDivs,
	SiteSemantic,
} from "../components/RobustSnippets"
import DivSite from "../components/DivSite"

export const metadata: Metadata = {
	title: "Robust | Accessibility Project",
}

const Page = () => {
	const wcag412 = criteria.find((item) => item.wcag === "4.1.2")

	if (!wcag412) {
		return <div>Error loading information about WCAG 4.1.2.</div>
	}

	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col max-w-3xl w-full p-4 sm:p-8 sm:m-8">
				<PrincipleTitle
					title="Robust"
					quote="Content must be robust enough that it can be interpreted
						by a wide variety of user agents, including assistive technologies."
				/>
				<section>
					<p>
						For a developer this means that a site needs to be built
						with assistive technologies, like screen readers, in
						mind. For the most part, using semantic HTML gives you
						this automatically.
					</p>
					<h3 className="text-center text-xl font-bold my-8">
						Semantic HTML
					</h3>
					<p>
						Semantic elements describes their meaning to the browser
						as well as the developer. Let&apos;s take a look at an
						example, using a simple dummy site:
					</p>
					<div className="my-8 bg-slate-700 text-white">
						<div className="p-4 sm:p-8">
							<h4 className="mb-4 font-bold">
								Example: Divs or Semantic Elements?
							</h4>
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

							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<DivSite />
							</div>
							<p>
								As long as the elements get the same styling,
								the result on screen will be the same.
								Here&apos;s a version made with non-semantic
								elements:
							</p>

							<SiteDivs />

							<p>
								Compare it to this version using semantic HTML
								elements:
							</p>

							<SiteSemantic />

							<p>
								The semantic version is easier to read and
								understand, and much better from an
								accessibility standpoint.
							</p>
						</div>
					</div>
				</section>

				<Image
					className="mt-8 mb-4"
					src={img}
					alt="A woman working at an office desk with three screens with code."
				/>
				<div className="mb-8 text-right text-sm">
					<Link
						className="underline"
						href="https://www.pexels.com/photo/woman-coding-on-computer-3861958"
					>
						Photo by ThisIsEngineering
					</Link>
				</div>

				<article>
					<h3 className="text-center text-xl font-bold mb-8">
						Creating My Own Form
					</h3>
					<p>
						So we&apos;ve established that you should use semantic
						HTML whenever possible. But what happens if you code
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
						<div className="p-4 sm:p-8">
							<h4 className="mb-4 font-bold">
								Example: My Cool Form
							</h4>
							<p>
								I want to add a small form on my site where a
								user can send in their name for a competition.
								Usually a form in React is structured something
								like this:
							</p>

							<MyForm />

							<p>Which looks something like this:</p>
							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<RegularForm />
							</div>
							<p>
								However, for this small form I want something
								tighter and just use a placeholder instead of
								the label:
							</p>

							<FormWithPlaceholder />

							<p>
								This is my reworked form, note that there is no
								label next to the input.
							</p>

							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<PlaceholderForm />
							</div>

							<p>
								At this point everything looks ok and I get no
								errors in my editor. However, since the label
								for the input is missing, a visitor using
								assistive technology will have trouble
								interacting with the form — and my site will be
								in violation of the WCAG 4.1.2 rule as stated
								above. Uh-oh!
							</p>
							<p>
								So what&apos;s the solution? Since the{" "}
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
							<p>
								I have a descriptive text at the top of my form,
								that could act as my visible label by adding{" "}
								<code className="bg-slate-800 text-white">
									aria-labelledby
								</code>{" "}
								to the{" "}
								<code className="bg-slate-800 text-white">
									&lt;input&gt;
								</code>{" "}
								element and a corresponding{" "}
								<code className="bg-slate-800 text-white">
									id
								</code>{" "}
								to the text.{" "}
							</p>

							<FormLabelledBy />

							<p>
								This works and fulfills the WCAG criterion, but
								is &quot;Name Form&quot; as clear and
								understandable as our original label of
								&quot;Name&quot;? No, probably not since the
								latter is the standard formulation. That&apos;s
								why it&apos;s ususally a good idea to stick to
								the establish method of{" "}
								<code className="bg-slate-800 text-white">
									&lt;input&gt;
								</code>{" "}
								and{" "}
								<code className="bg-slate-800 text-white">
									&lt;label&gt;
								</code>{" "}
								where possible.
							</p>
							<p>A few final notes:</p>
							<p>
								Textboxes like an{" "}
								<code className="bg-slate-800 text-white">
									&lt;input&gt;
								</code>{" "}
								can&apos;t use{" "}
								<code className="bg-slate-800 text-white">
									aria-label
								</code>{" "}
								on it&apos;s own beacause it&apos;s supposed to
								have a separate, visible{" "}
								<code className="bg-slate-800 text-white">
									&lt;label&gt;
								</code>{" "}
								element.
							</p>

							<p>
								You should use a{" "}
								<code className="bg-slate-800 text-white">
									&lt;label&gt;
								</code>{" "}
								for each{" "}
								<code className="bg-slate-800 text-white">
									&lt;input&gt;
								</code>{" "}
								element. Another solution would&apos;ve been to
								rework the{" "}
								<code className="bg-slate-800 text-white">
									&lt;label&gt;
								</code>{" "}
								from our first form and style it to look more
								like the title.
							</p>
							<p>
								By using{" "}
								<code className="bg-slate-800 text-white">
									aria-labelledby
								</code>
								, several elements could reference the same{" "}
								<code className="bg-slate-800 text-white">
									id
								</code>
								.
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	)
}

export default Page
