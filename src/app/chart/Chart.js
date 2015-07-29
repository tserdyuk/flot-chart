import React from 'react'

export default class Chart extends React.Component {
	componentDidMount() {
		const bl = 4.8
		const { points } = this.props
		$.plot('#chart', [{
			data: points,
			color: 'red',
			threshold: {
				below: bl,
				color: '#666'
			},
			lines: { show: true },
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
				lineWidth: 1.5
			}
		}, {
			data: points,
			points: { show: true }
		}], {
			yaxis: {
				ticks: 10,
				tickDecimals: 0
			},
			series: {
				curvedLines: { active: true }
			},
			grid: { hoverable: true },
			tooltip: {
				show: true,
				content: '%x: %y.1'
			}
		})
	}
	render() {
		return <div className="chart">
			<div id="chart" />
		</div>
	}
}
