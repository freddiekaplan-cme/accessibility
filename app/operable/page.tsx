import React from "react"
import { criteria } from "../constants/Criterias"
import PrincipleTitle from "../components/PrincipleTitle"
import Criteria from "../components/Criteria"
import InfoBox from "../components/InfoBox"

const Page = () => {
	const wcag211 = criteria.find((item) => item.wcag === "2.1.1")
	const wcag243 = criteria.find((item) => item.wcag === "2.4.3")
	const wcag255 = criteria.find((item) => item.wcag === "2.5.5")
	const wcag258 = criteria.find((item) => item.wcag === "2.5.8")

	if (!wcag211) {
		return <div>Error loading information about WCAG 2.1.1.</div>
	}

	if (!wcag243) {
		return <div>Error loading information about WCAG 2.4.3.</div>
	}

	if (!wcag255) {
		return <div>Error loading information about WCAG 2.5.8.</div>
	}

	if (!wcag258) {
		return <div>Error loading information about WCAG 2.5.8.</div>
	}

	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col max-w-3xl w-full p-4 sm:m-8">
				<PrincipleTitle
					title="Operable"
					quote="User interface components and navigation must be operable."
				/>

				<section>
					<p>
						Everybody should be able to use a site, regardless of
						their individual accessibiliy needs. This might mean not
						having access to a computer mouse, or having enough time
						to read and use content.
					</p>
					<p>
						There are also criteria for having a large enough area
						to be clicked on. It comes in a minimum requirement
						(WCAG 2.2: 2.5.8) and an enhanced, preferrable option
						(WCAG 2.2: 2.5.5).
					</p>
					<Criteria
						criteriaTitle={wcag258.criteriaTitle}
						text={wcag258.text}
						text2={wcag258.text2}
						text3={wcag258.text3}
						text4={wcag258.text4}
						text5={wcag258.text5}
						wcag={wcag258.wcag}
						wcagLink={wcag258.wcagLink}
						en={wcag258.en}
						webb={wcag258.webb}
						webbLink={wcag258.webbLink}
					/>
					<Criteria
						criteriaTitle={wcag255.criteriaTitle}
						text={wcag255.text}
						text2={wcag255.text2}
						text3={wcag255.text3}
						text4={wcag255.text4}
						text5={wcag255.text5}
						wcag={wcag255.wcag}
						wcagLink={wcag255.wcagLink}
						en={wcag255.en}
						webb={wcag255.webb}
						webbLink={wcag255.webbLink}
					/>
					<div className="my-8 bg-slate-700 text-white">
						<div className="p-4 sm:p-8">
							<div className="mb-4 font-bold">
								Example: Clickable area
							</div>
							<p>
								I have an info box component on my React site
								that can be closed by clicking the cross in the
								corner.
							</p>
							<div className="bg-slate-800 text-white my-8">
								<code>
									<div>.cross &#123;</div>
									<div className="ml-4 sm:ml-8">
										border: solid 1px rgb(194, 65, 12);
									</div>
									<div className="ml-4 sm:ml-8 mb-4">
										font-weight: bold;
									</div>
									<div className="ml-4 sm:ml-8">
										display: flex;
									</div>
									<div className="ml-4 sm:ml-8">
										align-items: center;
									</div>
									<div className="ml-4 sm:ml-8">
										justify-content: center;
									</div>
									<div className="ml-4 sm:ml-8">
										margin-left: auto;
									</div>
									<div className="mb-4">&#125;</div>
									<div>.cross:hover &#123;</div>
									<div className="ml-4 sm:ml-8">
										background-color: rgb(194, 65, 12);
									</div>
									<div className="ml-4 sm:ml-8">
										color: white;
									</div>
									<div>&#125;</div>
								</code>
							</div>

							<div className="bg-slate-800 text-white my-8">
								<code>
									<div>&lt;div&gt;</div>
									<div className="ml-4 sm:ml-8">&lt;div</div>

									<div className="ml-8 sm:ml-16">
										className=&quot;cross&quot;
									</div>
									<div className="ml-8 sm:ml-16">
										onClick=&#123;handleClick&#125;
									</div>
									<div className="ml-4 sm:ml-8">&gt;</div>
									<div className="ml-8 sm:ml-16">X</div>
									<div className="ml-4 sm:ml-8">
										&lt;/div&gt;
									</div>
									<div className="ml-4 sm:ml-8">
										&lt;p&gt;Lorem ipsum dolor sit
										amet.&lt;/p&gt;
									</div>
									<div>&lt;/div&gt;</div>
								</code>
							</div>
							<p>
								Here&apos;s my component. I&apos;ve added
								buttons to change the clickable area. Compare
								the different sizes, which one seems the easiest
								to click?
							</p>
							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<InfoBox />
							</div>
							<p>
								I want my site to be as accessible as possible,
								so I think the enhanced size is appropriate.
								Let&apos;s add some CSS:
							</p>
							<div className="bg-slate-800 text-white my-8">
								<code>
									<div>.cross &#123;</div>

									<div className="ml-4 sm:ml-8">
										border: solid 1px rgb(194, 65, 12);
									</div>
									<div className="ml-4 sm:ml-8 mb-4">
										font-weight: bold;
									</div>
									<div className="ml-4 sm:ml-8">
										display: flex;
									</div>
									<div className="ml-4 sm:ml-8">
										align-items: center;
									</div>
									<div className="ml-4 sm:ml-8">
										justify-content: center;
									</div>
									<div className="ml-4 sm:ml-8 mb-4">
										margin-left: auto;
									</div>
									<div
										className="ml-4 sm:ml-8 text-green-400"
										aria-label="Highlighted code"
									>
										height: 44px;
									</div>
									<div
										className="ml-4 sm:ml-8 text-green-400"
										aria-label="Highlighted code"
									>
										width: 44px;
									</div>
									<div className="mb-4">&#125;</div>
								</code>
							</div>
							<p>
								Note that while the minimum requirement is a
								height and width of 24 px, I think most would
								agree that the larger size of at least 44 px is
								more usable as well as being more accessible.
							</p>
						</div>
					</div>
				</section>

				<article>
					<h3 className="text-center text-xl font-bold my-8">
						Rubrik
					</h3>
					<p>text</p>
					<Criteria
						criteriaTitle={wcag211.criteriaTitle}
						text={wcag211.text}
						wcag={wcag211.wcag}
						wcagLink={wcag211.wcagLink}
						en={wcag211.en}
						webb={wcag211.webb}
						webbLink={wcag211.webbLink}
					/>
				</article>
				<article>
					<h3 className="text-center text-xl font-bold my-8">
						Rubrik
					</h3>
					<p>text</p>
					<Criteria
						criteriaTitle={wcag243.criteriaTitle}
						text={wcag243.text}
						wcag={wcag243.wcag}
						wcagLink={wcag243.wcagLink}
						en={wcag243.en}
						webb={wcag243.webb}
						webbLink={wcag243.webbLink}
					/>
				</article>
			</div>
		</div>
	)
}

export default Page
