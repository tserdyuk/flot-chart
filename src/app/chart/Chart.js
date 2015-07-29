import React from 'react'

export default class Chart extends React.Component {
	componentDidMount() {
		var self = this
		$(function() {
			function plotWithOptions(t) {
				$.plot('#chart', [{
					data: self.props.points,
					color: 'rgb(30, 180, 20)',
					threshold: {
						below: t,
						color: 'rgb(200, 20, 30)'
					},
					lines: {
						steps: true
					}
				}])
			}

			plotWithOptions(0)
		})
	}
	render() {
		return <div className="chart">
			<div id="chart" />
		</div>
	}
}
