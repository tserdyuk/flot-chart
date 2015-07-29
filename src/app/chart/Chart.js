import React from 'react'

export default class Chart extends React.Component {
	componentDidMount() {
		var self = this
		$(function() {

			var d1 = [];
			for (var i = 0; i <= 60; i += 1) {
				d1.push([i, parseInt(Math.random() * 30 - 10)])
			}

			d1.splice(10, 10)

			function plotWithOptions(t) {
				$.plot('#demo-placeholder', [{ //self.refs.chart
					data: d1,
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
		return <div id="content">
			<div className="demo-container">
				<div id="demo-placeholder" ref="chart" className="demo-placeholder" />
			</div>
		</div>
	}
}
