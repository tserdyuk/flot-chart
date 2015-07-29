import React from 'react'
import Chart from 'chart/Chart'
import qs from 'qs'

console.log(JSON.stringify(qs.parse(window.location.search.slice(1))))

export default class App extends React.Component {
	render() {
		const query = window.location.search.slice(1)
		const points = JSON.parse(qs.parse(query).points)
		return <Chart points={points} />
	}
}
