import React from "react"
import Image from "next/image"
import { criteria } from "../constants/Criterias"
import PrincipleTitle from "../components/PrincipleTitle"
import Criteria from "../components/Criteria"
import InfoBox from "../components/InfoBox"
import FocusOrder from "../components/FocusOrder"
import FocusOrderAltered from "../components/FocusOrderAltered"
import Code from "../components/Code"
import Link from "next/link"
import phoneImg from "../../public/pexels-andrea-piacquadio-3791666.webp"
import frustratingImg from "../../public/pexels-andrea-piacquadio-3807738.webp"
import { Metadata } from "next"
import {
	Clickable,
	Cross,
	FocusMethod,
	TestFocus,
	UnpredictableFocus,
} from "../components/OperableSnippets"

export const metadata: Metadata = {
	title: "Operable | Accessibility Project",
}

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
			<div className="flex flex-col max-w-3xl w-full p-4 sm:p-8 sm:m-8">
				<PrincipleTitle
					title="Operable"
					quote="User interface components and navigation must be operable."
				/>

				<section>
					<p>
						Everybody should be able to use a site, regardless of
						their individual accessibiliy needs. This might mean not
						having access to a computer mouse, or having enough time
						to read and use the content.
					</p>
					<h3 className="text-center text-xl font-bold my-8">
						Clickable Area
					</h3>
					<p>
						Users also need enough space on screen when clicking on
						things. There are two WCAG criteria for this, a minimum
						requirement and an enhanced option:
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

					<Image
						className="flex"
						src={phoneImg}
						alt="A younger woman is showing a mobile phone to an older woman."
					/>
					<div className="mb-8 text-right text-sm">
						<Link
							className="underline"
							href="https://www.pexels.com/photo/daughter-explaining-elderly-mother-how-using-smartphone-3791666/"
						>
							Photo by Andrea Piacquadio
						</Link>
					</div>

					<div className="my-8 bg-slate-700 text-white">
						<div className="p-4 sm:p-8">
							<h4 className="mb-4 font-bold">
								Example: Clickable Area
							</h4>
							<p>
								I have an info box component on my React site
								that can be closed by clicking the cross in the
								corner.
							</p>

							<Clickable />

							<p>
								Here&apos;s my component. I&apos;ve added
								buttons to change the clickable area. Compare
								the different sizes, which one seems the easiest
								to click?
							</p>
							<p>
								Also, note the added <code>aria-label</code>{" "}
								that adds information to the symbol.
							</p>
							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<InfoBox />
							</div>
							<p>
								I want my site to be as accessible as possible,
								so I think the enhanced size is appropriate.
								Let&apos;s add some CSS:
							</p>

							<Cross />

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
						Using a Keyboard and Focus Order
					</h3>
					<p>
						There is a WCAG criterion stating that users should be
						able to navigate and interact with a site using only a
						keyboard.
					</p>
					<Criteria
						criteriaTitle={wcag211.criteriaTitle}
						text={wcag211.text}
						wcag={wcag211.wcag}
						wcagLink={wcag211.wcagLink}
						en={wcag211.en}
						webb={wcag211.webb}
						webbLink={wcag211.webbLink}
					/>
					<p>
						To interact with links, buttons, and other elements
						using only a keyboard, users can navigate through a site
						by tabbing, following what&apos;s known as the focus
						order. This may not be apparent to those who interact
						with a site using a mouse or touch, and it is one of the
						most common sources of accessibility issues.
					</p>
					<Criteria
						criteriaTitle={wcag243.criteriaTitle}
						text={wcag243.text}
						wcag={wcag243.wcag}
						wcagLink={wcag243.wcagLink}
						en={wcag243.en}
						webb={wcag243.webb}
						webbLink={wcag243.webbLink}
					/>
					<div className="my-8 bg-slate-700 text-white">
						<div className="p-4 sm:p-8">
							<h4 className="mb-4 font-bold">
								Example: Test the Focus Order on My Site
							</h4>
							<p>
								Here&apos;s an example site you can use to test
								the focus order by tabbing through all elements
								that can be interacted with (usually this means
								elements that can be clicked on with the mouse
								pointer or by using the enter key).
							</p>
							<p>
								The following code is a bit stripped down but
								demonstrates the basic structure of the site,
								which is what we are interested in here. The
								only relevant CSS is that the dialog box has{" "}
								<code>position: absolute</code> and some styling
								to put it roughly in the middle of the site.
							</p>

							<TestFocus />

							<p>
								You can bring the focus to the Home link with
								the button at the top. Move focus by using tab
								on your keyboard, the element will get an orange
								background.
							</p>
							<p>
								Clicking the &quot;Open Dialog&quot; button will
								open a dialog box.
							</p>
							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<FocusOrder />
							</div>
						</div>
					</div>
					<p>
						Focus will shift to the next element in the focus order,
						further down in the code. However, sometimes you might
						have a popup or module that you want to give focus after
						a certain action.
					</p>
					<p>
						Take the dialog box from the example above: In order to
						ensure that the focus shifts to the &quot;Close&quot;
						button after the &quot;Open Dialog&quot; button, it
						needs to be the next interactable element in the code.
					</p>
					<p>
						However, since the box is styled with{" "}
						<code>position: absolute</code> it could be put
						somewhere else. Here&apos;s an example where the box is
						positioned at the top within the{" "}
						<code>&lt;main&gt;</code> element instead:
					</p>

					<div className="my-8 bg-slate-700 text-white">
						<div className="p-4 sm:p-8">
							<h4 className="mb-4 font-bold">
								Example: Unpredictable Focus Order
							</h4>

							<UnpredictableFocus />

							<p>
								A user with a mouse or touch screen would not
								notice any difference, but a user that is
								tabbing through the focus order will notice that
								the next element to get focus after the
								&quot;Open Dialog&quot; button would not be the
								&quot;Close&quot; button. Instead, it would be
								the &quot;Email me!&quot; link in the{" "}
								<code>&lt;footer&gt;</code>, forcing the user to
								tab all around the site until focus finds the
								&quot;Close&quot; button.
							</p>
						</div>
					</div>

					<Image
						className="flex"
						src={frustratingImg}
						alt="A woman is visibly frustrated in front of her computer."
					/>
					<div className="mb-8 text-right text-sm">
						<Link
							className="underline"
							href="https://www.pexels.com/photo/woman-in-white-shirt-showing-frustration-3807738/"
						>
							Photo by Andrea Piacquadio
						</Link>
					</div>
					<h3 className="text-center text-xl font-bold my-8">
						Changing the Focus Order
					</h3>
					<p>
						Finally, let&apos;s take a look at how you can change
						the focus order if necessary.
					</p>
					<div className="my-8 bg-slate-700 text-white">
						<div className="p-4 sm:p-8">
							<h4 className="mb-4 font-bold">
								Example: Changing the Focus Order
							</h4>

							<p>
								There are a couple of methods to alter the focus
								order. The <code>tabindex</code> attribute can
								be used to decide the exact sequential order of
								the focus as 1, 2, 3 and so on. It can also make
								any element focusable, even if a user can&apos;t
								interact with it.
							</p>
							<div className="bg-slate-800 text-white my-8">
								<code>
									<Code text="<nav>" indent={0} />
									<Code
										text='<a href="/" tabIndex={1}>Home</a>'
										indent={1}
									/>
									<Code
										text='<a href="/about" tabIndex={2}>About</a>'
										indent={1}
									/>
									<Code
										text='<a href="/contact" tabIndex={3}>Contact</a>'
										indent={1}
									/>
									<Code text="</nav>" indent={0} />
									<Code
										text="<p tabIndex={4}>This element is not clickable but will recieve focus.</p>"
										indent={0}
									/>
								</code>
							</div>
							<p>
								Note that in React, the attribute uses camel
								case, <code>tabIndex</code>.
							</p>
							<p>
								As a default, elements without a specified tab
								index have an index of 0 and will shift to the
								next clickable element in the code structure as
								we&apos;ve looked at above. Using a negative tab
								index will remove elements from the focus order
								and render them impossible to reach with focus.
							</p>
							<p>
								<Link
									className="underline"
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex"
								>
									MDN
								</Link>{" "}
								recommends avoiding using a{" "}
								<code>tabindex</code> with a value above 0, and
								if used it must follow the relationships in the
								content.
							</p>

							<p>
								You can also use the <code>ref</code> tag and
								the <code>focus()</code> method to move the
								focus directly to another element. Here&apos;s
								an example where I keep the dialog box above the
								button that opens it in the code.
							</p>
							<p>
								I add a <code>ref</code> tag to the
								&quot;Close&quot; button, allowing me to target
								it. To shift the focus I add a{" "}
								<code>focus()</code> method within a{" "}
								<code>useEffect</code> that listens to the{" "}
								<code>showDialog</code> state.
							</p>
							<p>
								This way the dialog box will open and focus will
								shift to the &quot;Close&quot; button:
							</p>

							<FocusMethod />

							<div className="bg-white text-black flex justify-center p-4 sm:p-8 my-8">
								<FocusOrderAltered />
							</div>
							<p>A few notes:</p>
							<p>
								The next element in the focus order after the
								&quot;Close&quot; button is the dropdown{" "}
								<code>&lt;select&gt;</code>, which probably will
								be confusing for a user. This is not desirable
								since the focus order should be predictable and
								easy to understand.
							</p>
							<p>
								While using the <code>ref</code> tag and the{" "}
								<code>focus()</code> method can come in handy,
								it&apos;s a good idea to use them sparingly. Aim
								to set up your site so that the focus order is
								straightforward and easy to follow.
							</p>
							<p>
								I&apos;m using a non-semantic{" "}
								<code>&lt;div&gt;</code> for the dialog box, but
								you should use the <code>&lt;dialog&gt;</code>{" "}
								element which comes with some built in
								functionalty and even moves focus to the dialog
								automatically when opened. Read more over at{" "}
								<Link
									className="underline"
									href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"
								>
									MDN
								</Link>{" "}
								and consult{" "}
								<Link
									className="underline"
									href="https://caniuse.com/?search=dialog"
								>
									CanIUse
								</Link>{" "}
								to find out which browser versions support the
								element.
							</p>
						</div>
					</div>
				</article>
			</div>
		</div>
	)
}

export default Page
