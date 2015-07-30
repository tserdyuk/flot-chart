import React from 'react'

export default class Chart extends React.Component {
	componentDidMount() {
		const bl = 4.8
		const { points } = this.props
		const axisFont = {
			size: 15,
			weight: 'bold',
			color: '#333',
			family: 'sans-serif'
		}
		$.plot('#chart', [{
			data: points,
			color: 'red',
			threshold: {
				below: bl,
				color: '#666'
			},
			lines: {
				show: true,
				lineWidth: 3
			},
			curvedLines: {
				apply: true,
				monotonicFit: true
			}
		}, {
			data: [
				[points[0][0], bl],
				[points[points.length - 1][0], bl]
			],
			color: 'red',
			dashes: {
				show: true,
				lineWidth: 2,
				dashLength: [20, 12]
			}
		}, {
			data: points,
			points: {
				show: true,
				radius: 4,
				lineWidth: 3
			}
		}], {
			yaxis: {
				ticks: 10,
				tickDecimals: 0,
				font: axisFont
			},
			xaxis: { font: axisFont },
			series: {
				curvedLines: { active: true }
			},
			grid: { hoverable: true },
			tooltip: {
				show: true,
				defaultTheme: false,
				content: '%x: <b>%y.1</b>'
			}
		})
	}
	render() {
		return <div className="chart">
			<div id="chart" />
		</div>
	}
}
