import React from "react"
import PrincipleTitle from "../components/PrincipleTitle"
import Criteria from "../components/Criteria"
import { criteria } from "../constants/Criterias"
import Image from "next/image"
import keyboardImage from "../../public/pexels-josh-sorenson-1714205.webp"
import boxImage from "../../public/box.webp"
import {
	ComparisonChart,
	UpdatedComparisonChart,
} from "../components/ComparisonChart"
import { Chart, ChartAddedElements } from "../components/PercievableSnippets"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "Percievable | Accessibility Project",
}

const Page = () => {
	const wcag111 = criteria.find((item) => item.wcag === "1.1.1")
	const wcag141 = criteria.find((item) => item.wcag === "1.4.1")
	const wcag143 = criteria.find((item) => item.wcag === "1.4.3")
	const wcag1411 = criteria.find((item) => item.wcag === "1.4.11")

	if (!wcag111) {
		return <div>Error loading information about WCAG 1.1.1.</div>
	}

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
			<div className="flex flex-col max-w-3xl w-full p-4 sm:p-8 sm:m-8">
				<PrincipleTitle
					title="Percievable"
					quote="Information and user interface components must be presentable to users in ways they can perceive."
				/>

				<section>
					<p>
						This principle is all about users being able to see or
						otherwise be made aware of the contents of a site.
					</p>
					<h3 className="text-center text-xl font-bold my-8">
						Alternative Text
					</h3>
					<p>
						Here&apos;s a simple example that most developers are
						aware of:
					</p>
					<Criteria
						criteriaTitle={wcag111.criteriaTitle}
						text={wcag111.text}
						wcag={wcag111.wcag}
						wcagLink={wcag111.wcagLink}
						en={wcag111.en}
						webb={wcag111.webb}
						webbLink={wcag111.webbLink}
					/>
					<p>
						There are several different exceptions to this WCAG
						criterion, check out the links for more information
						about them, but for this example we will look at the
						most common example of non-text content — images. You
						always need to provide an alternative text description
						for those who can&apos;t see a non-decorative image.
					</p>

					<div className="my-8 bg-slate-700 text-white">
						<div className="p-4 sm:p-8">
							<h4 className="mb-4 font-bold">
								Example: Adding Alt Text
							</h4>
							<p>
								I wan&apos;t to add an image to my React site:
							</p>
							<div className="bg-slate-800 text-white my-8">
								<code>
									<div className="mb-4">
										import keyboardImage from
										&quot;../../public/pexels-josh-sorenson-1714205.webp&quot;
									</div>
									<div>
										&lt;img src=&#123;keyboardImage&#125;
										alt=&quot;A computer keyboard and a
										mouse on a dark desk.&quot;&gt;
									</div>
								</code>
							</div>
							<p>
								This gives me an image with an alternative text
								which is shown if you use a screen reader for
								example.
							</p>
							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<Image
									src={keyboardImage}
									alt="A computer keyboard and a mouse on a dark desk."
								/>
							</div>
							<div className="mb-8 text-right text-sm">
								<Link
									className="underline"
									href="https://www.pexels.com/photo/apple-magic-keyboard-with-numeric-pad-on-table-near-wireless-mouse-1714205/"
								>
									Photo by Josh Sorenson
								</Link>
							</div>
							<p>
								If you think it&apos;s hard to come up with an
								alt text, imagine describing the image over the
								phone to someone.
							</p>
							<p>
								Remember, the texts should be succint and to the
								point. A general rule of thumb is to keep them
								under 100 characters.
							</p>
						</div>
					</div>
					<p>
						If you&apos;re a developer, you most likely already knew
						about this. Let&apos;s have a look at our main topic
						which many web developers — and web designers — usually
						are more oblivous to: color and contrast.
					</p>
				</section>

				<article>
					<h3 className="text-center text-xl font-bold my-8">
						Color Alone is Not Enough
					</h3>
					<p>
						Color is often used to convey information but keep in
						mind that user&apos;s might not be able to differentiate
						between colors in a meaningful way.
					</p>
					<Criteria
						criteriaTitle={wcag141.criteriaTitle}
						text={wcag141.text}
						wcag={wcag141.wcag}
						wcagLink={wcag141.wcagLink}
						en={wcag141.en}
						webb={wcag141.webb}
						webbLink={wcag141.webbLink}
					/>

					<div className="my-8 bg-slate-700 text-white">
						<div className="p-4 sm:p-8">
							<h4 className="mb-4 font-bold">
								Example: Comparison Chart
							</h4>
							<p>
								I&apos;ve made a component that takes two values
								and returns a chart consisting of two elements
								that get their background colors by different
								CSS classes. The higher value get&apos;s a green
								color and the lower value get&apos;s a red
								color.
							</p>

							<Chart />

							<p>
								With some additional styling, an input of values
								100 and 200 looks something like this:
							</p>

							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<ComparisonChart
									firstValue={100}
									secondValue={200}
								/>
							</div>

							<p>
								However, if I look at the WCAG criterion above,
								you can&apos;t rely solely on color to convey
								information. I need to add more visible elements
								to the chart.
							</p>

							<ChartAddedElements />

							<p>
								By showing more information in my chart I can
								make it much more accessible. Since I already
								have access to the values of each staple, I can
								put them inside the colored elements. I also
								made an inline style that calculates the ratio
								between the two, based on the range of the
								values I&apos;m expecting.
							</p>
							<p>
								Now a user is no longer relying on just the
								color to find out the higher and lower value.
								Here demonstrated by inputting the values of 200
								and 150:
							</p>
							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<UpdatedComparisonChart
									firstValue={200}
									secondValue={150}
								/>
							</div>
						</div>
					</div>
				</article>
				<article>
					<h3 className="text-center text-xl font-bold my-8">
						Contrasting Text Color
					</h3>
					<p>
						Contrasting colors is one of the most common
						accessibility blunders online. I suspect it&apos;s
						because it&apos;s easy to overlook and hard to get
						exact, as described by this WCAG criterion:
					</p>
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
					<p>
						Apart from a few exceptions, text visible on screen
						needs to have a certain amount of contrast to the
						background color. There are different levels of success:
						AA and AAA.
					</p>
					<p>
						AA is the minimum requirement and has the threshold
						value of 4.5:1 that is mentioned in the criterion. This
						is roughly what is needed to compensate for the loss of
						vision of an 80-year-old.
					</p>
					<p>
						To meet the higher requirement of AAA, a minimum
						contrast of 7:1 is needed. This is based on the loss of
						contrast sensitivity among users with low vision but
						that do not use assistive technology.
					</p>
					<p>
						As a comparison, black text on a white background has a
						contrast of 21:1.
					</p>
					<div className="my-8 bg-slate-700 text-white">
						<div className="p-4 sm:p-8">
							<h4 className="mb-4 font-bold">
								Example: Dark Mode
							</h4>
							<p>
								I&apos;m using dark mode on my site. In light
								mode the text is black and the background is
								white, in dark mode they are switched.
							</p>
							<p>
								However, on some parts of the site I have a box
								with another color:
							</p>
							<div className="bg-slate-800 text-white my-8">
								<code>
									<div>.box &#123;</div>

									<div className="ml-4 sm:ml-8">
										background-color: rgb(71, 85, 105);
									</div>
									<div className="ml-4 sm:ml-8">
										border: 2px solid black;
									</div>
									<div className="ml-4 sm:ml-8">
										padding: 1rem;
									</div>

									<div>&#125;</div>
								</code>
							</div>
							<div className="bg-slate-800 text-white my-8">
								<code>
									<div>
										&lt;div className=&quot;box&quot;&gt;
									</div>
									<div className="ml-4 sm:ml-8">
										Lorem ipsum dolor sit amet, consectetur
										adipis.
									</div>
									<div>&lt;/div &gt;</div>
								</code>
							</div>
							<div className="bg-black flex justify-center p-4 sm:p-8 my-8">
								<div className=" border-black border-2 p-4 bg-slate-600 text-white">
									Lorem ipsum dolor sit amet, consectetur
									adipis.
								</div>
							</div>
							<p>
								All good, I&apos;m happy with my site when
								viewing in dark mode and get an AAA rating for
								my text when checking. But I&apos;ve forgotten
								about light mode, and that all the text on the
								site change to a black color while using it.
							</p>
							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<Image
									className="border-black border-2 max-w-full sm:max-w-sm"
									src={boxImage}
									alt="A dark gray box with black example text, it's hard to read."
								/>
							</div>
							<p>
								The solution is simple, just add white text
								styling to the box class to be sure the text
								will remain white regardless of mode. Sometimes
								the hard part is to identify the issue at all.
							</p>
							<div className="bg-slate-800 text-white my-8">
								<code>
									<div>.box &#123;</div>
									<div className="ml-4 sm:ml-8">
										background-color: rgb(71, 85, 105);
									</div>
									<div className="ml-4 sm:ml-8">
										border: 2px solid black;
									</div>
									<div className="ml-4 sm:ml-8">
										<span
											aria-label="Highlighted code"
											className="text-green-400"
										>
											color: white;
										</span>
									</div>
									<div className="ml-4 sm:ml-8">
										padding: 1rem;
									</div>

									<div>&#125;</div>
								</code>
							</div>
						</div>
					</div>
					<p>A couple of notes:</p>
					<p>
						Some web browsers, such as Google Chrome or Mozilla
						Firefox, provide an Accessibility tab within their Web
						Inspector tools. This tab allows you to check color
						contrast easily. There are also plenty of other
						resources available online,{" "}
						<Link
							className="underline"
							href="https://coolors.co/contrast-checker/112a46-acc8e5"
						>
							like this tool from Coolors.
						</Link>
					</p>
					<p>
						Contrasting colors are not limited to text, here&apos;s
						a criterion for graphic elements and images:
					</p>
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

export default Page
