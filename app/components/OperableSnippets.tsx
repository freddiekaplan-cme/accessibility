import React from "react"
import Code from "./Code"

export const Clickable = () => {
	return (
		<>
			<div className="bg-slate-800 text-white my-8">
				<code>
					<div>.cross &#123;</div>
					<div className="ml-4 sm:ml-8">
						border: solid 1px rgb(194, 65, 12);
					</div>
					<div className="ml-4 sm:ml-8 mb-4">font-weight: bold;</div>
					<div className="ml-4 sm:ml-8">display: flex;</div>
					<div className="ml-4 sm:ml-8">align-items: center;</div>
					<div className="ml-4 sm:ml-8">justify-content: center;</div>
					<div className="ml-4 sm:ml-8">margin-left: auto;</div>
					<div className="mb-4">&#125;</div>
					<div>.cross:hover &#123;</div>
					<div className="ml-4 sm:ml-8">
						background-color: rgb(194, 65, 12);
					</div>
					<div className="ml-4 sm:ml-8">color: white;</div>
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
					<div className="ml-8 sm:ml-16">
						aria-label=&quot;Close&quot;
					</div>
					<div className="ml-4 sm:ml-8">&gt;</div>
					<div className="ml-8 sm:ml-16">X</div>
					<div className="ml-4 sm:ml-8">&lt;/div&gt;</div>
					<div className="ml-4 sm:ml-8">
						&lt;p&gt;Lorem ipsum dolor sit amet.&lt;/p&gt;
					</div>
					<div>&lt;/div&gt;</div>
				</code>
			</div>
		</>
	)
}

export const Cross = () => {
	return (
		<>
			<div className="bg-slate-800 text-white my-8">
				<code>
					<div>.cross &#123;</div>

					<div className="ml-4 sm:ml-8">
						border: solid 1px rgb(194, 65, 12);
					</div>
					<div className="ml-4 sm:ml-8 mb-4">font-weight: bold;</div>
					<div className="ml-4 sm:ml-8">display: flex;</div>
					<div className="ml-4 sm:ml-8">align-items: center;</div>
					<div className="ml-4 sm:ml-8">justify-content: center;</div>
					<div className="ml-4 sm:ml-8 mb-4">margin-left: auto;</div>
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
		</>
	)
}

export const TestFocus = () => {
	return (
		<>
			<div className="bg-slate-800 text-white my-8">
				<code>
					<Code
						text="const [showDialog, setShowDialog] = useState(false);"
						indent={0}
						margin={true}
					/>
				</code>
			</div>

			<div className="bg-slate-800 text-white my-8">
				<code>
					<Code text="<h1>Example Focus Order Site</h1>" indent={0} />
					<Code text="<nav>" indent={0} />
					<Code text='<a href="/">Home</a>' indent={1} />
					<Code text='<a href="/about">About</a>' indent={1} />
					<Code text='<a href="/contact">Contact</a>' indent={1} />
					<Code text="</nav>" indent={0} />
					<Code text="<hr></hr>" indent={0} margin={true} />
					<Code text="<main>" indent={0} />
					<Code text="<p>" indent={1} />
					<Code
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eius."
						indent={2}
					/>
					<Code text="</p>" indent={1} margin={true} />

					<Code text="<label" indent={1} />
					<Code text='id="dropdownLabel"' indent={2} />
					<Code text='htmlFor="dropdown"' indent={2} />
					<Code text=">" indent={1} />
					<Code text="Choose an option:" indent={2} />
					<Code text="</label>" indent={1} />
					<Code text='<select id="dropdown"' indent={1} />
					<Code
						text='<option value="Option 1">Option 1</option>'
						indent={2}
					/>
					<Code
						text='<option value="Option 2">Option 2</option>'
						indent={2}
					/>
					<Code
						text='<option value="Option 3">Option 3</option>'
						indent={2}
					/>
					<Code text="</select>" indent={1} />

					<Code text="<button" indent={1} />
					<Code
						text="onClick={() => setShowDialog(true)}"
						indent={2}
					/>
					<Code text=">" indent={1} />
					<Code text="Open Dialog" indent={2} />
					<Code text="</button>" indent={1} margin={true} />

					<Code text="{showDialog && (" indent={1} />
					<Code text="<div>" indent={2} />
					<Code text="<p>Example Message</p>" indent={3} />
					<Code text="<button" indent={3} />
					<Code
						text="onClick={() => setShowDialog(false)}"
						indent={4}
					/>
					<Code text=">" indent={3} />
					<Code text="Close" indent={4} />
					<Code text="</button>" indent={3} />
					<Code text="</div>" indent={2} />
					<Code text=")}" indent={1} margin={true} />

					<Code text="</main>" indent={0} margin={true} />
					<Code text="<hr></hr>" indent={0} />
					<Code text="<footer>" indent={0} />
					<Code
						text='<a href="mailto:example@mail.com">Email me!</a>'
						indent={1}
					/>
					<Code text="</footer>" indent={0} />
				</code>
			</div>
		</>
	)
}

export const UnpredictableFocus = () => {
	return (
		<>
			<div className="bg-slate-800 text-white my-8">
				<code>
					<Code text="<main>" indent={0} />
					<Code text="{showDialog && (" indent={1} color="green" />
					<Code text="<div>" indent={2} color="green" />
					<Code
						text="<p>Example Message</p>"
						indent={3}
						color="green"
					/>
					<Code text="<button" indent={3} color="green" />
					<Code
						text="onClick={() => setShowDialog(false)}"
						indent={4}
						color="green"
					/>
					<Code text=">" indent={3} color="green" />
					<Code text="Close" indent={4} color="green" />
					<Code text="</button>" indent={3} color="green" />
					<Code text="</div>" indent={2} color="green" />
					<Code text=")}" indent={1} margin={true} color="green" />
					<Code text="<p>" indent={1} />
					<Code
						text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eius."
						indent={2}
					/>
					<Code text="</p>" indent={1} />

					<Code text="<label" indent={1} />
					<Code text='id="dropdownLabel"' indent={2} />
					<Code text='htmlFor="dropdown"' indent={2} />
					<Code text=">" indent={1} />
					<Code text="Choose an option:" indent={2} />
					<Code text="</label>" indent={1} />
					<Code text='<select id="dropdown"' indent={1} />
					<Code
						text='<option value="Option 1">Option 1</option>'
						indent={2}
					/>
					<Code
						text='<option value="Option 2">Option 2</option>'
						indent={2}
					/>
					<Code
						text='<option value="Option 3">Option 3</option>'
						indent={2}
					/>
					<Code text="</select>" indent={1} />

					<Code text="<button" indent={1} />
					<Code
						text="onClick={() => setShowDialog(true)}"
						indent={2}
					/>
					<Code text=">" indent={1} />
					<Code text="Open Dialog" indent={2} />
					<Code text="</button>" indent={1} />

					<Code text="</main>" indent={0} margin={true} />
					<Code text="<hr></hr>" indent={0} />
					<Code text="<footer>" indent={0} />
					<Code
						text='<a href="mailto:example@mail.com">Email me!</a>'
						indent={1}
					/>
					<Code text="</footer>" indent={0} />
				</code>
			</div>
		</>
	)
}

export const FocusMethod = () => {
	return (
		<>
			<div className="bg-slate-800 text-white my-8">
				<code>
					<Code
						text="const [showDialog, setShowDialog] = useState(false)"
						indent={0}
					/>
					<Code
						text="const closeBtnRef = useRef(null)"
						indent={0}
						color="green"
						margin={true}
					/>

					<Code text="useEffect(() => {" indent={0} color="green" />
					<Code
						text="if (showDialog && closeBtnRef.current) {"
						indent={1}
						color="green"
					/>
					<Code
						text="closeBtnRef.current.focus()"
						indent={2}
						color="green"
					/>
					<Code text="}" indent={1} color="green" />
					<Code text="}, [showDialog])" indent={0} color="green" />
				</code>
			</div>

			<div className="bg-slate-800 text-white my-8">
				<code>
					<Code text="<main>" indent={0} />

					<Code text="{showDialog && (" indent={1} />
					<Code text="<div>" indent={2} />
					<Code text="<p>Example Message</p>" indent={3} />
					<Code text="<button" indent={3} />
					<Code text="ref={closeBtnRef}" indent={4} color="green" />
					<Code
						text="onClick={() => setShowDialog(false)}"
						indent={4}
					/>
					<Code text=">" indent={3} />
					<Code text="Close" indent={4} />
					<Code text="</button>" indent={3} />
					<Code text="</div>" indent={2} />
					<Code text=")}" indent={1} margin={true} />
				</code>
			</div>
		</>
	)
}
