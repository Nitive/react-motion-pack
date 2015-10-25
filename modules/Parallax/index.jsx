import React, {PropTypes} from 'react'

export default class Parallax extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		scope: PropTypes.number,
		speed: PropTypes.number,
		offset: PropTypes.number,
	}

	static defaultProps = {
		speed: 1,
		scope: 100,
		offset: 0,
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
		const {scope, offset, speed} = this.props
		const position = (window.pageYOffset * speed) - offset
		return -Math.min(scope - offset, position)
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
