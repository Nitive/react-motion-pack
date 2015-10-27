import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'

export default class Bounce extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
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
		const { type, side, offset, children } = this.props

		const config = {
			opacity: [80, 11],
			translate: [350, 12],
			scale: [300, 8],
		}

		const getContent = ({ opacity, translateX, translateY, scaleX, scaleY }) => {
			const style = {
				opacity,
				transform: `scale(${scaleX}, ${scaleY})translate3d(${translateX}px, ${translateY}px, 0)`,
			}
			return React.cloneElement(children, { style })
		}

		let x = side === 'left' ? -offset : 0
		x = side === 'right' ? offset : x

		let y = side === 'up' ? offset : 0
		y = side === 'down' ? -offset : y


		const hideStyle = {
			opacity: spring(0, config.opacity),
			translateX: spring(x, config.translate),
			translateY: spring(y, config.translate),
			scaleX: spring(0.8, config.scale),
			scaleY: spring(0.8, config.scale),
		}

		const showStyle = {
			opacity: spring(1, config.opacity),
			translateX: spring(0, config.translate),
			translateY: spring(0, config.translate),
			scaleX: spring(1, config.scale),
			scaleY: spring(1, config.scale),
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
