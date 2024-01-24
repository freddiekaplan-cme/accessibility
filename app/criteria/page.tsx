import React from "react"
import Image from "next/image"
import collaborativeImg from "../../public/pexels-cottonbro-studio-6804084.webp"
import Link from "next/link"
import PrincipleTitle from "../components/PrincipleTitle"
import { criteria } from "../constants/Criterias"
import Criteria from "../components/Criteria"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "WCAG Criteria | Accessibility Project",
}

const Page = () => {
	return (
		<div className="flex flex-col items-center">
			<article className="flex flex-col max-w-3xl w-full p-4 sm:p-8 sm:m-8">
				<PrincipleTitle title="WCAG Criteria" />
				<p>
					This is a collection of the criteria referenced on this
					site.
				</p>
				<p>
					The criteria in WCAG are divided into three levels of
					conformance: A, AA, and AAA. Level A is the lowest level of
					ambition, meaning the highest-priority criteria are at this
					level.
				</p>
				<p>
					Level AA forms the basis for accessibility requirements in
					EN 301 549 guidelines and, consequently, for legal
					requirements in the EU. To meet the accessibility
					requirements in the Swedish{" "}
					<span className="italic" lang="sv">
						Lagen om digital offentlig service
					</span>
					, levels A and AA must be fulfilled.
				</p>
				<p>
					Level AAA is the highest level of ambition. Consider meeting
					these criteria as well.
				</p>

				<Image
					className="mt-8 mb-4"
					src={collaborativeImg}
					alt="A group of men behind a computer screen are discussing and pointing at the screen."
				/>
				<div className="mb-8 text-right text-sm underline">
					<Link href="https://www.pexels.com/photo/team-discussing-project-at-a-computer-6804084/">
						Photo by cottonbro studio
					</Link>
				</div>

				{criteria.map((item) => (
					<Criteria
						key={item.wcag}
						criteriaTitle={item.criteriaTitle}
						text={item.text}
						text2={item.text2}
						text3={item.text3}
						text4={item.text4}
						text5={item.text5}
						wcag={item.wcag}
						wcagLink={item.wcagLink}
						en={item.en}
						webb={item.webb}
						webbLink={item.webbLink}
						level={item.level}
						principle={item.principle}
					/>
				))}
			</article>
		</div>
	)
}

export default Page
