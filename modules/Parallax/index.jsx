import React from 'react'

export default class Parallax extends React.Component {

	static propTypes = {
		children: React.PropTypes.node.isRequired,
		min: React.PropTypes.number,
		max: React.PropTypes.number,
		speed: React.PropTypes.number,
	}

	static defaultProps = {
		speed: 1,
		min: 0,
		max: 100,
	}


	componentWillMount() {
		this.setState({
			position: this.getPosition(),
		})
	}


	componentDidMount() {
		window.addEventListener('scroll', this.scrollHandler)
	}


	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollHandler)
	}

	getPosition = () => {
		const position = window.pageYOffset * this.props.speed
		return -Math.min(this.props.max, Math.max(this.props.min, position))
	}

	scrollHandler = () => {
		this.setState({
			position: this.getPosition(),
		})
	}


	render() {
		const style = {
			transform: `translateY(${this.state.position}px)`,
		}

		return React.cloneElement(this.props.children, {style})
	}
}
