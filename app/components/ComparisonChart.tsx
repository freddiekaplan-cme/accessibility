import React from "react"
import { ChartType } from "../Types"

export const ComparisonChart: React.FC<ChartType> = ({
	firstValue,
	secondValue,
}) => {
	const firstChartStyle =
		firstValue > secondValue
			? "bg-green-700"
			: firstValue === secondValue
				? "bg-yellow-500"
				: "bg-red-700"
	const secondChartStyle =
		firstValue < secondValue
			? "bg-green-700"
			: firstValue === secondValue
				? "bg-yellow-500"
				: "bg-red-700"

	return (
		<div className="flex flex-row gap-4 text-center">
			<div>
				<div
					className={`w-12 h-12 ${firstChartStyle}`}
					aria-description={`Color: ${firstChartStyle.substring(
						3,
						firstChartStyle.length - 4,
					)}`}
				></div>
				<div>1</div>
			</div>
			<div>
				<div
					className={`w-12 h-12 ${secondChartStyle}`}
					aria-description={`Color: ${secondChartStyle.substring(
						3,
						secondChartStyle.length - 4,
					)}`}
				></div>
				<div>2</div>
			</div>
		</div>
	)
}

export const UpdatedComparisonChart: React.FC<ChartType> = ({
	firstValue,
	secondValue,
}) => {
	const firstChartStyle =
		firstValue > secondValue
			? "bg-green-700"
			: firstValue === secondValue
				? "bg-yellow-500"
				: "bg-red-700"
	const secondChartStyle =
		firstValue < secondValue
			? "bg-green-700"
			: firstValue === secondValue
				? "bg-yellow-500"
				: "bg-red-700"

	return (
		<div className="flex flex-row gap-4 text-center items-end">
			<div>
				<div
					className={`text-white w-12 h-12 ${firstChartStyle}`}
					style={{
						height: `${
							(firstValue + secondValue) / (secondValue * 0.02)
						}px`,
					}}
					aria-description={`Color: ${firstChartStyle.substring(
						3,
						firstChartStyle.length - 4,
					)}`}
				>
					{firstValue}
				</div>
				<div>1</div>
			</div>
			<div>
				<div
					className={`text-white w-12 h-12 ${secondChartStyle}`}
					style={{
						height: `${
							(firstValue + secondValue) / (firstValue * 0.02)
						}px`,
					}}
					aria-description={`Color: ${secondChartStyle.substring(
						3,
						secondChartStyle.length - 4,
					)}`}
				>
					{secondValue}
				</div>
				<div>2</div>
			</div>
		</div>
	)
}
