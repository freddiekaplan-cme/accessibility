import React from "react"

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
