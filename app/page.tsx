import Link from "next/link"
import Image from "next/image"
import pointingImg from "../public/pexels-christina-morillo-1181263.webp"
import judgeImg from "../public/pexels-sora-shimazaki-5668772.webp"
import PrincipleTitle from "./components/PrincipleTitle"

export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<div className="flex flex-col max-w-3xl w-full p-4 sm:p-8 sm:m-8">
				<PrincipleTitle title="Exploring Common Accessibility Issues&nbsp;on&nbsp;the&nbsp;Web" />

				<main>
					<p>
						Accessibility on the web is a big topic. A site with a
						good structure and semantic HTML will fulfill most of
						the necessary requirements, but not all.
					</p>
					<p>
						The Accessibity Project aims to highlight the most
						common accessibility issues in a clear way, with code
						snippets and examples.
					</p>

					<Image
						className="mt-8 mb-4"
						src={pointingImg}
						alt="Two women are looking and pointing at a computer screen with code on it."
					/>
					<div className="mb-8 text-right text-sm">
						<Link
							className="underline"
							href="https://www.pexels.com/photo/two-women-looking-at-the-code-at-laptop-1181263/"
						>
							Photo by Christina Morillo
						</Link>
					</div>

					<h3 className="font-bold text-lg mt-8">The WCAG</h3>
					<p>
						The{" "}
						<Link
							className="underline"
							href="https://www.w3.org/TR/WCAG22/"
						>
							Web Content Accessibility Guidelines
						</Link>
						, WCAG, are the guidelines or recommendations we&apos;ll
						be looking at. As of 5 October 2023, they&apos;re on
						version 2.2. This is how they describe their guidelines:
					</p>
					<blockquote className="text-lg italic mx-8">
						&quot;[...] WCAG [...] defines how to make Web content
						more accessible to people with disabilities.
						Accessibility involves a wide range of disabilities,
						including visual, auditory, physical, speech, cognitive,
						language, learning, and neurological disabilities.
						Although these guidelines cover a wide range of issues,
						they are not able to address the needs of people with
						all types, degrees, and combinations of disability.
						These guidelines also make Web content more usable by
						older individuals with changing abilities due to aging
						and often improve usability for users in general.&quot;
					</blockquote>
					<p>
						The WCAG have four overall principles that provide the
						foundations for web accessibility: perceivable,
						operable, understandable, and robust. The Accessibility
						Project&apos;s information and examples are sorted under
						each principle.
					</p>

					<Image
						className="mt-8 mb-4"
						src={judgeImg}
						alt="Asian judge working on laptop in office."
						loading="lazy"
					/>
					<div className="mb-8 text-right text-sm underline">
						<Link
							className="underline"
							href="https://www.pexels.com/photo/crop-asian-judge-working-on-laptop-in-office-5668772/"
						>
							Photo by Sora Shimazaki
						</Link>
					</div>

					<h3 className="font-bold text-lg mt-8">
						Laws and Regulations, the EU and Sweden
					</h3>
					<p>
						Since the WCAG are the global standard, they are the
						basis for law making regarding accessibility on the web.
						The EU has has it&apos;s own set of guidelines, that
						include the WCAG, called{" "}
						<Link
							className="underline"
							href="https://www.etsi.org/standards/get-standards#page=1&search=ETSI%20EN%20301%20549%20V3.2.1&title=1&etsiNumber=1&content=0&version=1&onApproval=1&published=1&withdrawn=1&historical=0&isCurrent=1&superseded=1&startDate=1988-01-15&endDate=2022-01-31&harmonized=0&keyword=&TB=&stdType=&frequency=&mandate=&collection=&sort=1"
						>
							EN 301 549
						</Link>
						.
					</p>
					<p>
						The Accessibility Project is based in Sweden, which also
						has it&apos;s own guidelines, collected on the site{" "}
						<Link
							className="underline"
							href="https://www.digg.se/webbriktlinjer"
						>
							Webbriktlinjer
						</Link>
						, which in turn are based on the ones from the EU. All
						WCAG guidelines mentioned on the Accessibility Project
						will provide links to the{" "}
						<Link
							className="underline"
							href="https://www.w3.org/TR/WCAG22/"
						>
							WCAG
						</Link>
						, references to the relevant EU EN numbers as well as a
						links to{" "}
						<Link
							className="underline"
							href="https://www.digg.se/webbriktlinjer"
						>
							Webbriktlinjer
						</Link>{" "}
						for Swedish language information.
					</p>
					<p>
						As of 2024, the Swedish laws for accessibility on the
						web are:{" "}
						<span className="italic" lang="sv">
							Lagen om digital offentlig service (DOS)
						</span>
						, also called{" "}
						<span className="italic" lang="sv">
							Lag 2018:1937 om tillgänglighet till digital
							offentlig service
						</span>{" "}
						and contains provisions stating that services and
						information provided by a public entity through a
						website or mobile application should be accessible.
					</p>
					<p>
						Only public entities are bound by law to fulfill the
						guidelines, but there is a new law planned to be in
						place in 2025 that will provide guidelines for public
						companies.
					</p>
					<h3 className="font-bold text-lg mt-8">
						About The Accessibility Project
					</h3>
					<p>
						This site is a part of a thesis for the Frontend/App
						Developer 2022 program at{" "}
						<Link
							className="underline"
							href="https://cmeducations.se/utbildningar/program/frontend-app-developer"
						>
							Changemaker Educations
						</Link>
						. It&apos;s made by{" "}
						<Link
							className="underline"
							href="https://github.com/freddiekaplan-cme"
						>
							Freddie Kaplan
						</Link>{" "}
						as an exploration regarding accessibility on the web
						from a frontend developer perspective.
					</p>
				</main>
			</div>
		</div>
	)
}
