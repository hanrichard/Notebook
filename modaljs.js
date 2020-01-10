import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import ModalHeader from './components/ModalHeader/ModalHeader';
import ModalFooter from './components/ModalFooter/ModalFooter';
import componentStyle from './Modal.style';
import styled from 'styled-components';
import classnames from 'classnames';

export const ModalContext = createContext(false);

const ReactModalAdapter = ({ className, ...props }) => (
	<ReactModal
		portalClassName={`${className}__portal`}
		className={`${className}__reactModal`}
		overlayClassName={`${className}__overlay`}
		bodyOpenClassName={`${className}__bodyOpen`}
		htmlOpenClassName={`${className}__htmlOpen`}
		{...props}
	/>
);

export const Modal = styled(
	({
		aria,
		footerButtons,
		children,
		className,
		closeTimeoutMS,
		colorTheme,
		contentLabel,
		forwardedRef,
		isOpen,
		onAfterOpen,
		onRequestClose,
		parentSelector,
		role,
		shouldCloseOnOverlayClick,
		shouldFocusAfterRender,
		title,
		variant,
		headerIcon,
		zIndex,
		align,
		...restProps
	}) => {
		const modalHeaderProps = {
			headerIcon,
			onRequestClose,
			colorTheme,
		};

		const modalFooterProps = {
			footerButtons,
			onRequestClose,
			colorTheme,
		};

		return (
			<ModalContext.Provider value={true}>
				<ReactModalAdapter
					className={className}
					aria={aria}
					closeTimeoutMS={closeTimeoutMS}
					colorTheme={colorTheme}
					contentLabel={contentLabel || title}
					isOpen={isOpen}
					onAfterOpen={onAfterOpen}
					onRequestClose={onRequestClose}
					parentSelector={parentSelector}
					ref={forwardedRef}
					role={role}
					shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
					shouldFocusAfterRender={shouldFocusAfterRender}
				>
					<div {...restProps} className={classnames('modal__body', className)}>
						<ModalHeader {...modalHeaderProps}>{title}</ModalHeader>
						<div
							className={classnames(
								'modalContentContainer',
								align
									? `modalContentContainer--${align}`
									: `modalContentContainer--center`
							)}
						>
							{children}
						</div>
						<ModalFooter {...modalFooterProps} />
					</div>
				</ReactModalAdapter>
			</ModalContext.Provider>
		);
	}
)`
	${componentStyle};
`;

Modal.propTypes = {
	/**
	 * Content is center aligned, unless otherwise stated
	 */
	align: PropTypes.oneOf(['left', 'right']),
	/**
	 * Additional aria attributes (optional).
	 */
	aria: PropTypes.object,
	/**
	 * Arbitrary content for the modal.
	 */
	children: PropTypes.node.isRequired,

	/**
	 * Array of button events and content, for either one or two buttons
	 */
	footerButtons: PropTypes.array,

	/** Number indicating the milliseconds to wait before closing the modal. */
	closeTimeoutMS: PropTypes.number,

	/** The theme for the modal. */
	colorTheme: PropTypes.oneOf([
		'mlcOrange',
		'mlcAqua',
		'mlcRubine',
		'mlcWhite',
		'brandColor',
	]),
	/** String indicating how the content container should be announced to screenreaders */
	contentLabel: PropTypes.string,
	/**
	 * Sets the state of the modal. Should be controlled by your application state.
	 */
	isOpen: PropTypes.bool,
	/** Function that will be run after the modal has opened. */
	onAfterOpen: PropTypes.func,
	/**
	 * Function that will be run when the modal is requested to be closed
	 * (either by clicking on overlay or pressing ESC)
	 *
	 * *Note*: It is not called if isOpen is changed by other means.
	 */
	onRequestClose: PropTypes.func.isRequired,
	/**
	 * Function that will be called to get the parent element that the modal will be attached to.
	 */
	parentSelector: PropTypes.func,
	/**
	 * String indicating the role of the modal, allowing the 'dialog' role to be applied if desired.
	 */
	role: PropTypes.string,
	/**
	 * Boolean indicating if the modal should be focused after render
	 */
	shouldFocusAfterRender: PropTypes.bool,
	/** Boolean indicating if the overlay should close the modal */
	shouldCloseOnOverlayClick: PropTypes.bool,
	/**
	 * Content of the modal header
	 */
	title: PropTypes.string.isRequired,
	/**
	 * Set the CSS `z-index` of the portal element. If possible, as per docs above,
	 * render your application in a Container component rather than use this
	 * prop. If you find yourself in a z-index war with a badly behaved
	 * application or component then use with discretion
	 */
	zIndex: PropTypes.number,
	/**
	 * Icon that will be displayed in header
	 */
	headerIcon: PropTypes.object,
};

Modal.defaultProps = {
	isOpen: false,
	role: 'dialog',
	zIndex: 1,
	colorTheme: 'brandColor',
};

Modal.setAppElement = ReactModal.setAppElement;

/**
 * @component
 */
export default Modal;
