import React from "react"
import PrincipleTitle from "../components/PrincipleTitle"
import Criteria from "../components/Criteria"
import { criteria } from "../constants/Criterias"
import Image from "next/image"
import keyboardImage from "../../public/pexels-josh-sorenson-1714205.webp"
import {
	ComparisonChart,
	UpdatedComparisonChart,
} from "../components/ComparisonChart"

const page = () => {
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
			<div className="flex flex-col max-w-3xl w-full p-4 sm:m-8">
				<PrincipleTitle
					title="Percievable"
					quote="Information and user interface components must be presentable to users in ways they can perceive."
				/>

				<section>
					<p>
						This principle is all about users being able to see or
						otherwise be made aware of the contents of a site.
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
							<div className="mb-4 font-bold">
								Example: Adding alt text
							</div>
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
										mouse on a dark desk. A small light is
										reflected in the corner of the
										desk.&quot;&gt;
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
									alt="A computer keyboard and a mouse on a dark desk. A small light is reflected in the corner of the desk."
								/>
							</div>
							<p>
								If you think it&apos;s hard to come up with an
								alt text, imagine describing the image over the
								phone to someone.
							</p>
						</div>
					</div>
					<p>
						But if you&apos;re a developer, you most likely already
						knew about this. Let&apos;s have a look at our main
						topic which many web developers — and web designers —
						usually are more oblivous to: color and contrast.
					</p>
				</section>

				<article>
					<h3 className="text-center text-xl font-bold my-8">
						My Comparison Chart
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
							<div className="mb-4 font-bold">
								Example: Comparison Chart
							</div>
							<p>
								I&apos;ve made a component that takes two values
								and returns two elements that get background
								colors by different CSS classes. The higher
								value get&apos;s a green color and the lower
								value get&apos;s a red color.
							</p>

							<div className="bg-slate-800 text-white my-8">
								<code>
									<div>
										export const ComparisonChart: = (&#123;
										firstValue, secondValue &#125;) =&gt;
										&#123;
									</div>
									<div className="ml-4 sm:ml-8">
										const firstChartStyle =
									</div>
									<div className="ml-8 sm:ml-16">
										firstValue &gt; secondValue
									</div>
									<div className="ml-12 sm:ml-24">
										? &quot;green&quot;
									</div>
									<div className="ml-12 sm:ml-24">
										: firstValue === secondValue
									</div>
									<div className="ml-16 sm:ml-32">
										? &quot;yellow&quot;
									</div>
									<div className="ml-16 sm:ml-32 mb-4">
										: &quot;red&quot;
									</div>
									<div className="ml-4 sm:ml-8">
										const secondChartStyle =
									</div>
									<div className="ml-8 sm:ml-16">
										firstValue &lt; secondValue
									</div>
									<div className="ml-12 sm:ml-24">
										? &quot;green&quot;
									</div>
									<div className="ml-12 sm:ml-24">
										: firstValue === secondValue
									</div>
									<div className="ml-16 sm:ml-32">
										? &quot;yellow&quot;
									</div>
									<div className="ml-16 sm:ml-32 mb-4">
										: &quot;red&quot;
									</div>
									<div className="ml-4 sm:ml-8">return (</div>
									<div className="ml-8 sm:ml-16">
										&lt;div&gt;
									</div>
									<div className="ml-12 sm:ml-24">
										&lt;div&gt;
									</div>
									<div className="ml-16 sm:ml-32">
										&lt;div
										className=&#123;firstChartStyle&#125;&gt;&lt;/div&gt;
									</div>
									<div className="ml-16 sm:ml-32">
										&lt;div&gt;1&lt;/div&gt;
									</div>
									<div className="ml-12 sm:ml-24">
										&lt;/div&gt;
									</div>
									<div className="ml-12 sm:ml-24">
										&lt;div&gt;
									</div>
									<div className="ml-16 sm:ml-32">
										&lt;div
										className=&#123;secondChartStyle&#125;&gt;&lt;/div&gt;
									</div>
									<div className="ml-16 sm:ml-32">
										&lt;div&gt;2&lt;/div&gt;
									</div>
									<div className="ml-12 sm:ml-24">
										&lt;/div&gt;
									</div>
									<div className="ml-8 sm:ml-16">
										&lt;/div&gt;
									</div>
									<div className="ml-4 sm:ml-8">)</div>
									<div>&#125;</div>
								</code>
							</div>
							<p>
								With some additional styling, an input of value
								100 and 200 looks something like this:
							</p>

							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<ComparisonChart
									firstValue={100}
									secondValue={200}
								/>
							</div>

							<p>
								However, this is in violation of the WCAG in
								this example since I&apos;m only using color to
								show which value is higher than the other. I
								need to add some more information to the chart
								to make my component accessible.
							</p>
							<div className="bg-slate-800 text-white my-8">
								<code>
									<div>
										export const ComparisonChart: = (&#123;
										firstValue, secondValue &#125;) =&gt;
										&#123;
									</div>
									<div className="ml-4 sm:ml-8">
										const firstChartStyle =
									</div>
									<div className="ml-8 sm:ml-16">
										firstValue &gt; secondValue
									</div>
									<div className="ml-12 sm:ml-24">
										? &quot;green&quot;
									</div>
									<div className="ml-12 sm:ml-24">
										: firstValue === secondValue
									</div>
									<div className="ml-16 sm:ml-32">
										? &quot;yellow&quot;
									</div>
									<div className="ml-16 sm:ml-32 mb-4">
										: &quot;red&quot;
									</div>
									<div className="ml-4 sm:ml-8">
										const secondChartStyle =
									</div>
									<div className="ml-8 sm:ml-16">
										firstValue &lt; secondValue
									</div>
									<div className="ml-12 sm:ml-24">
										? &quot;green&quot;
									</div>
									<div className="ml-12 sm:ml-24">
										: firstValue === secondValue
									</div>
									<div className="ml-16 sm:ml-32">
										? &quot;yellow&quot;
									</div>
									<div className="ml-16 sm:ml-32 mb-4">
										: &quot;red&quot;
									</div>
									<div className="ml-4 sm:ml-8">return (</div>
									<div className="ml-8 sm:ml-16">
										&lt;div&gt;
									</div>
									<div className="ml-12 sm:ml-24">
										&lt;div&gt;
									</div>
									<div className="ml-16 sm:ml-32">
										&lt;div
										className=&#123;firstChartStyle&#125;
									</div>

									<div className="ml-16 sm:ml-32">
										<span
											aria-label="Highlighted code"
											className="text-green-400"
										>
											style=&#123;&#123; height: `$&#123;
											(firstValue + secondValue) /
											(secondValue * 0.02)
											&#125;px`&#125;&#125;
										</span>
									</div>
									<div className="ml-16 sm:ml-32">&gt;</div>

									<div className="ml-20 sm:ml-40">
										<span
											aria-label="Highlighted code"
											className="text-green-400"
										>
											&#123;firstValue&#125;
										</span>
									</div>

									<div className="ml-16 sm:ml-32">
										&lt;/div&gt;
									</div>

									<div className="ml-16 sm:ml-32">
										&lt;div&gt;1&lt;/div&gt;
									</div>
									<div className="ml-12 sm:ml-24">
										&lt;/div&gt;
									</div>
									<div className="ml-12 sm:ml-24">
										&lt;div&gt;
									</div>
									<div className="ml-16 sm:ml-32">
										&lt;div
										className=&#123;secondChartStyle&#125;&gt;
									</div>
									<div className="ml-16 sm:ml-32">
										<span
											aria-label="Highlighted code"
											className="text-green-400"
										>
											style=&#123;&#123; height: `$&#123;
											(firstValue + secondValue) /
											(firstValue * 0.02)
											&#125;px`&#125;&#125;
										</span>
									</div>
									<div className="ml-16 sm:ml-32">&gt;</div>

									<div className="ml-20 sm:ml-40">
										<span
											aria-label="Highlighted code"
											className="text-green-400"
										>
											&#123;secondValue&#125;
										</span>
									</div>
									<div className="ml-16 sm:ml-32">
										&lt;div&gt;2&lt;/div&gt;
									</div>
									<div className="ml-12 sm:ml-24">
										&lt;/div&gt;
									</div>
									<div className="ml-8 sm:ml-16">
										&lt;/div&gt;
									</div>
									<div className="ml-4 sm:ml-8">)</div>
									<div>&#125;</div>
								</code>
							</div>

							<p>
								By adding a little more information to the chart
								we can make it much more accessible. I put the
								values inside the colored elements and also made
								an inline style that calculates the ratio
								between the two. So now a user is no longer
								relying on just the color to find out the higher
								and lower value.
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
					<h3 className="text-center text-xl font-bold my-8">
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
