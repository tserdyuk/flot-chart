import React from 'react'

export default class Chart extends React.Component {
	componentDidMount() {
		var data = this.props.points
		$(function() {
			$.plot('#chart', [{
				data: data,
				color: 'rgb(30, 180, 20)',
				threshold: {
					below: 4.9,
					color: 'rgb(200, 20, 30)'
				},
				lines: { show: true },
				curvedLines: { apply: true }
			}, {
				data: data,
				points: { show: true },
			}], {
    			series: {
    				curvedLines: { active: true }
    			}
			})
		})
	}
	render() {
		return <div className="chart">
			<div id="chart" />
		</div>
	}
}
