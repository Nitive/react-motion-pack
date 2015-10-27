import React, {PropTypes} from 'react'
import {Motion, spring} from 'react-motion'

export default class Fade extends React.Component {

	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.element,
			PropTypes.array,
		]).isRequired,
		type: PropTypes.oneOf(['in', 'out']),
		side: PropTypes.oneOf(['left', 'right', 'up', 'down', 'none']),
		offset: PropTypes.number,
	}

	static defaultProps = {
		type: 'in',
		side: 'none',
		offset: 0,
	}

	render() {
		const { type, side, offset } = this.props

		const getContent = ({opacity, translateX, translateY}) => (
			<div
				style={{
					opacity,
					transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
				}}
			>
				{this.props.children}
			</div>
		)

		let x = side === 'left' ? -offset : 0
		x = side === 'right' ? offset : x

		let y = side === 'up' ? offset : 0
		y = side === 'down' ? -offset : y

		const hideStyle = {
			opacity: spring(0),
			translateX: spring(x),
			translateY: spring(y),
		}

		const showStyle = {
			opacity: spring(1, [80, 11]),
			translateY: spring(0),
			translateX: spring(0),
		}

		return (
			<Motion
				defaultStyle={type !== 'out' ? hideStyle : showStyle}
				style={type !== 'out' ? showStyle : hideStyle}
			>
				{interpolated => getContent(interpolated)}
			</Motion>
		)
	}
}
