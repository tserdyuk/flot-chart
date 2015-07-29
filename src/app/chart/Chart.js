import React from 'react'

export default class Chart extends React.Component {
	componentDidMount() {
		const bl = 4.8
		const { points } = this.props
		$.plot('#chart', [{
			data: points,
			color: 'rgb(30, 180, 20)',
			threshold: {
				below: bl,
				color: 'rgb(200, 20, 30)'
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
			lines: { show: true }
		}, {
			data: points,
			points: { show: true },
		}], {
			yaxis: {
				ticks: 10,
				tickDecimals: 0
			},
			series: {
				curvedLines: { active: true }
			}
		})
	}
	render() {
		return <div className="chart">
			<div id="chart" />
		</div>
	}
}
