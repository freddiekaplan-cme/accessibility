import React from "react"

export const Chart = () => {
	return (
		<div className="bg-slate-800 text-white my-8">
			<code>
				<div>
					export const ComparisonChart: = (&#123; firstValue,
					secondValue &#125;) =&gt; &#123;
				</div>
				<div className="ml-4 sm:ml-8">const firstChartStyle =</div>
				<div className="ml-8 sm:ml-16">firstValue &gt; secondValue</div>
				<div className="ml-12 sm:ml-24">? &quot;green&quot;</div>
				<div className="ml-12 sm:ml-24">
					: firstValue === secondValue
				</div>
				<div className="ml-16 sm:ml-32">? &quot;yellow&quot;</div>
				<div className="ml-16 sm:ml-32 mb-4">: &quot;red&quot;</div>
				<div className="ml-4 sm:ml-8">const secondChartStyle =</div>
				<div className="ml-8 sm:ml-16">firstValue &lt; secondValue</div>
				<div className="ml-12 sm:ml-24">? &quot;green&quot;</div>
				<div className="ml-12 sm:ml-24">
					: firstValue === secondValue
				</div>
				<div className="ml-16 sm:ml-32">? &quot;yellow&quot;</div>
				<div className="ml-16 sm:ml-32 mb-4">: &quot;red&quot;</div>
				<div className="ml-4 sm:ml-8">return (</div>
				<div className="ml-8 sm:ml-16">&lt;div&gt;</div>
				<div className="ml-12 sm:ml-24">&lt;div&gt;</div>
				<div className="ml-16 sm:ml-32">
					&lt;div
					className=&#123;firstChartStyle&#125;&gt;&lt;/div&gt;
				</div>
				<div className="ml-16 sm:ml-32">&lt;div&gt;1&lt;/div&gt;</div>
				<div className="ml-12 sm:ml-24">&lt;/div&gt;</div>
				<div className="ml-12 sm:ml-24">&lt;div&gt;</div>
				<div className="ml-16 sm:ml-32">
					&lt;div
					className=&#123;secondChartStyle&#125;&gt;&lt;/div&gt;
				</div>
				<div className="ml-16 sm:ml-32">&lt;div&gt;2&lt;/div&gt;</div>
				<div className="ml-12 sm:ml-24">&lt;/div&gt;</div>
				<div className="ml-8 sm:ml-16">&lt;/div&gt;</div>
				<div className="ml-4 sm:ml-8">)</div>
				<div>&#125;</div>
			</code>
		</div>
	)
}

export const ChartAddedElements = () => {
	return (
		<div className="bg-slate-800 text-white my-8">
			<code>
				<div>
					export const ComparisonChart: = (&#123; firstValue,
					secondValue &#125;) =&gt; &#123;
				</div>
				<div className="ml-4 sm:ml-8">const firstChartStyle =</div>
				<div className="ml-8 sm:ml-16">firstValue &gt; secondValue</div>
				<div className="ml-12 sm:ml-24">? &quot;green&quot;</div>
				<div className="ml-12 sm:ml-24">
					: firstValue === secondValue
				</div>
				<div className="ml-16 sm:ml-32">? &quot;yellow&quot;</div>
				<div className="ml-16 sm:ml-32 mb-4">: &quot;red&quot;</div>
				<div className="ml-4 sm:ml-8">const secondChartStyle =</div>
				<div className="ml-8 sm:ml-16">firstValue &lt; secondValue</div>
				<div className="ml-12 sm:ml-24">? &quot;green&quot;</div>
				<div className="ml-12 sm:ml-24">
					: firstValue === secondValue
				</div>
				<div className="ml-16 sm:ml-32">? &quot;yellow&quot;</div>
				<div className="ml-16 sm:ml-32 mb-4">: &quot;red&quot;</div>
				<div className="ml-4 sm:ml-8">return (</div>
				<div className="ml-8 sm:ml-16">&lt;div&gt;</div>
				<div className="ml-12 sm:ml-24">&lt;div&gt;</div>
				<div className="ml-16 sm:ml-32">
					&lt;div className=&#123;firstChartStyle&#125;
				</div>
				<div className="ml-16 sm:ml-32">
					<span
						aria-label="Highlighted code"
						className="text-green-400"
					>
						style=&#123;&#123; height: `$&#123; (firstValue +
						secondValue) / (secondValue * 0.02)
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

				<div className="ml-16 sm:ml-32">&lt;/div&gt;</div>

				<div className="ml-16 sm:ml-32">&lt;div&gt;1&lt;/div&gt;</div>
				<div className="ml-12 sm:ml-24">&lt;/div&gt;</div>
				<div className="ml-12 sm:ml-24">&lt;div&gt;</div>
				<div className="ml-16 sm:ml-32">
					&lt;div className=&#123;secondChartStyle&#125;&gt;
				</div>
				<div className="ml-16 sm:ml-32">
					<span
						aria-label="Highlighted code"
						className="text-green-400"
					>
						style=&#123;&#123; height: `$&#123; (firstValue +
						secondValue) / (firstValue * 0.02) &#125;px`&#125;&#125;
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
				<div className="ml-16 sm:ml-32">&lt;div&gt;2&lt;/div&gt;</div>
				<div className="ml-12 sm:ml-24">&lt;/div&gt;</div>
				<div className="ml-8 sm:ml-16">&lt;/div&gt;</div>
				<div className="ml-4 sm:ml-8">)</div>
				<div>&#125;</div>
			</code>
		</div>
	)
}
