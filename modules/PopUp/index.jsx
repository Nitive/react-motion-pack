import React, {PropTypes} from 'react'
import {Motion, spring} from 'react-motion'
import {wrapper, styles} from './styles'


export default class PopUp extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,

		show: PropTypes.bool,

		onClickOutside: PropTypes.func,

		/** Custom class and style for element available */
		className: PropTypes.string,
		style: PropTypes.object,

		/** Use wrapper for styling background */
		wrapperClassName: PropTypes.string,
		wrapperStyle: PropTypes.object,
	}

	static defaultProps = {
		show: true,
	}


	render() {
		const {
			show,
			style,
			className,
			wrapperClassName,
			wrapperStyle,
			onClickOutside,
		} = this.props

		const enterConfig = [120, 11]
		const leaveConfig = [300, 28]

		const getContent = interpolated => (
			<div
				style={{...wrapper, ...wrapperStyle, ...{pointerEvents: show ? '' : 'none'}}}
				className={wrapperClassName}
				onClick={onClickOutside}
			>
				<div
					{...this.props}
					className={className}
					style={{...styles, ...style, ...{transform: `scale(${interpolated.scale})`}}}
				>
					{this.props.children}
				</div>
			</div>
		)

		return (
			<Motion
				defaultStyle={{scale: spring(show ? 0 : 1)}}
				style={{scale: spring(show ? 1 : 0, show ? enterConfig : leaveConfig)}}
			>
				{interpolated => getContent(interpolated)}
			</Motion>
		)
	}
}
