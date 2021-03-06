import React from 'react'
import qs from 'qs'
import Chart from './chart/Chart'

export default class App extends React.Component {
	render() {
		const query = window.location.search.slice(1)
		const points = JSON.parse(qs.parse(query).points)
		return <Chart points={points} />
	}
}
