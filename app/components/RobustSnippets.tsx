import React from "react"
import Code from "./Code"

export const SiteDivs = () => {
	return (
		<>
			<div className="bg-slate-800 text-white my-8">
				<code>
					<Code text="<div>" indent={0} />
					<Code text="<div>" indent={1} />
					<Code text="<div>Example Site</div>" indent={2} />
					<Code text="<div>" indent={2} />
					<Code text='<a href="/">Home</a>' indent={3} />
					<Code text='<a href="/about">About</a>' indent={3} />
					<Code text='<a href="/contact">Contact</a>' indent={3} />
					<Code text="</div>" indent={2} />
					<Code text="</div>" indent={1} margin={true} />
					<Code text="<div>" indent={1} />
					<Code text="<div>" indent={2} />
					<Code
						text="<div>Lorem ipsum dolor sit amet</div>"
						indent={3}
					/>
					<Code
						text="<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eius.</div>"
						indent={3}
					/>
					<Code text="</div>" indent={2} />
					<Code text="<div>" indent={2} />
					<Code text="<div>Lorem, ipsum dolor</div>" indent={3} />
					<Code
						text="<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil excepturi maxime distinctio! Quis, ducimus sed.</div>"
						indent={3}
					/>
					<Code text="</div>" indent={2} />
					<Code text="</div>" indent={1} margin={true} />

					<Code text="<div>" indent={1} />
					<Code text="© My Site" indent={2} />
					<Code text="</div>" indent={1} />

					<Code text="</div>" indent={0} />
				</code>
			</div>
		</>
	)
}

export const SiteSemantic = () => {
	return (
		<>
			<div className="bg-slate-800 text-white my-8">
				<code>
					<Code text="<div>" indent={0} />
					<Code text="<header>" indent={1} />

					<Code text="<h1>Example Site</h1>" indent={2} />
					<Code text="<nav>" indent={2} />
					<Code text='<a href="/">Home</a>' indent={3} />
					<Code text='<a href="/about">About</a>' indent={3} />
					<Code text='<a href="/contact">Contact</a>' indent={3} />
					<Code text="</nav>" indent={2} />

					<Code text="</header>" indent={1} margin={true} />

					<Code text="<main>" indent={1} />
					<Code text="<article>" indent={2} />
					<Code
						text="<h2>Lorem ipsum dolor sit amet</h2>"
						indent={3}
					/>
					<Code
						text="<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, eius.</p>"
						indent={3}
					/>
					<Code text="</article>" indent={2} />
					<Code text="<article>" indent={2} />
					<Code text="<h2>Lorem, ipsum dolor</h2>" indent={3} />
					<Code
						text="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil excepturi maxime distinctio! Quis, ducimus sed.</p>"
						indent={3}
					/>
					<Code text="</article>" indent={2} />
					<Code text="</main>" indent={1} margin={true} />

					<Code text="<footer>" indent={1} />
					<Code text="© My Site" indent={2} />
					<Code text="</footer>" indent={1} />

					<Code text="</div>" indent={0} />
				</code>
			</div>
		</>
	)
}

export const MyForm = () => {
	return (
		<>
			<div className="bg-slate-800 text-white my-8">
				<code>
					<div>&lt;div&gt;Name Form&lt;/div&gt;</div>
					<div>&lt;form onSubmit=&#123;handleSubmit&#125;</div>
					<div className="ml-4 sm:ml-8">&lt;div&gt;</div>
					<div className="ml-8 sm:ml-16">
						&lt;label
						htmlFor=&quot;name&quot;&gt;Name:&lt;/label&gt;
					</div>
					<div className="ml-8 sm:ml-16">&lt;input</div>
					<div className="ml-12 sm:ml-24">type=&quot;text&quot;</div>
					<div className="ml-12 sm:ml-24">
						id=&quot;name&quot; name=&quot;name&quot;
					</div>
					<div className="ml-12 sm:ml-24">
						value=&#123;formData.name&#125;
					</div>
					<div className="ml-12 sm:ml-24">
						onChange=&#123;handleChange&#125;
					</div>
					<div className="ml-12 sm:ml-24">required</div>
					<div className="ml-8 sm:ml-16">/&gt;</div>
					<div className="ml-4 sm:ml-8">&lt;/div&gt;</div>
					<div className="ml-4 sm:ml-8">&lt;div&gt;</div>
					<div className="ml-8 sm:ml-16">
						&lt;button
						type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
					</div>
					<div className="ml-4 sm:ml-8">&lt;/div&gt;</div>
					<div>&lt;/form&gt;</div>
				</code>
			</div>
		</>
	)
}

export const FormWithPlaceholder = () => {
	return (
		<>
			<div className="bg-slate-800 text-white my-8">
				<code>
					<div>
						<div>&lt;div&gt;Name Form&lt;/div&gt;</div>
						&lt;form onSubmit=&#123;handleSubmit&#125;
					</div>
					<div className="ml-4 sm:ml-8">&lt;div&gt;</div>

					<div className="ml-8 sm:ml-16">&lt;input</div>
					<div className="ml-12 sm:ml-24">type=&quot;text&quot;</div>
					<div
						aria-label="Highlighted code"
						className="ml-12 sm:ml-24 text-green-400"
					>
						placeholder=&quot;Name&quot;
					</div>
					<div className="ml-12 sm:ml-24">
						id=&quot;name&quot; name=&quot;name&quot;
					</div>
					<div className="ml-12 sm:ml-24">
						value=&#123;formData.name&#125;
					</div>
					<div className="ml-12 sm:ml-24">
						onChange=&#123;handleChange&#125;
					</div>
					<div className="ml-12 sm:ml-24">required</div>
					<div className="ml-8 sm:ml-16">/&gt;</div>
					<div className="ml-4 sm:ml-8">&lt;/div&gt;</div>
					<div className="ml-4 sm:ml-8">&lt;div&gt;</div>
					<div className="ml-8 sm:ml-16">
						&lt;button
						type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
					</div>
					<div className="ml-4 sm:ml-8">&lt;/div&gt;</div>
					<div>&lt;/form&gt;</div>
				</code>
			</div>
		</>
	)
}

export const FormLabelledBy = () => {
	return (
		<>
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
						&lt;form onSubmit=&#123;handleSubmit&#125;
					</div>
					<div className="ml-4 sm:ml-8">&lt;div&gt;</div>

					<div className="ml-8 sm:ml-16">&lt;input</div>
					<div className="ml-12 sm:ml-24">type=&quot;text&quot;</div>
					<div className="ml-12 sm:ml-24">
						placeholder=&quot;Name&quot;
					</div>
					<div className="ml-12 sm:ml-24">
						id=&quot;name&quot; name=&quot;name&quot;
					</div>
					<div className="ml-12 sm:ml-24">
						value=&#123;formData.name&#125;
					</div>
					<div className="ml-12 sm:ml-24">
						onChange=&#123;handleChange&#125;
					</div>
					<div
						aria-label="Highlighted code"
						className="ml-12 sm:ml-24 text-green-400"
					>
						aria-labelledby=&quot;nameform&quot;
					</div>
					<div className="ml-12 sm:ml-24">required</div>
					<div className="ml-8 sm:ml-16">/&gt;</div>
					<div className="ml-4 sm:ml-8">&lt;/div&gt;</div>
					<div className="ml-4 sm:ml-8">&lt;div&gt;</div>
					<div className="ml-8 sm:ml-16">
						&lt;button
						type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
					</div>
					<div className="ml-4 sm:ml-8">&lt;/div&gt;</div>
					<div>&lt;/form&gt;</div>
				</code>
			</div>
		</>
	)
}
