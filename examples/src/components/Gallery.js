import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import Lightbox from 'react-images-texts-videos';

class Gallery extends Component {
	constructor (props) {
		super(props);

		let itemType;

		if (this.props.images) {
            itemType = 'images'
		} else if (this.props.texts) {
            itemType = 'texts'
		} else {
            itemType = 'videos'
		}

		this.state = {
			lightboxIsOpen: false,
			currentItem: 0,
            itemType: itemType,
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoItem = this.gotoItem.bind(this);
		this.handleClickItem = this.handleClickItem.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}
	openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentItem: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox () {
		this.setState({
			currentItem: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentItem: this.state.currentItem - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentItem: this.state.currentItem + 1,
		});
	}
	gotoItem (index) {
		this.setState({
			currentItem: index,
		});
	}
	handleClickItem () {
		if (this.state.currentItem === this.props[this.state.itemType].length - 1) return;

		this.gotoNext();
	}
	renderGallery () {
		if (this.state.itemType == 'images') {
            const { images } = this.props;

            if (!images) return;

            const gallery = images.filter(i => i.useForDemo).map((obj, i) => {
                return (
					<a
						href={obj.src}
						className={css(classes.thumbnail, classes[obj.orientation])}
						key={i}
						onClick={(e) => this.openLightbox(i, e)}
					>
						<img src={obj.thumbnail} className={css(classes.source)} />
					</a>
                );
            });

            return (
				<div className={css(classes.gallery)}>
                    {gallery}
				</div>
            );
		} else if (this.state.itemType == 'texts') {
            const { texts } = this.props;

            if (!texts) return;

            const gallery = texts.map((text, i) => {
                return (
					<p
						className={css(classes.text_thumbail)}
						key={i}
						onClick={(e) => this.openLightbox(i, e)}
					>
                        {text}
					</p>
                );
            });

            return (
				<div className={css(classes.gallery)}>
                    {gallery}
				</div>
            );
		}
	}
	render () {
		return (
			<div className="section">
				{this.props.heading && <h2>{this.props.heading}</h2>}
				{this.props.subheading && <p>{this.props.subheading}</p>}
				{this.renderGallery()}
				<Lightbox
					currentItem={this.state.currentItem}
					items={{type:this.state.itemType,items:this.props[this.state.itemType]}}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickItem}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoItem}
					onClose={this.closeLightbox}
					showThumbnails={this.props.showThumbnails}
					theme={this.props.theme}
				/>
			</div>
		);
	}
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
	heading: PropTypes.string,
	images: PropTypes.array,
	texts: PropTypes.array,
	showThumbnails: PropTypes.bool,
	subheading: PropTypes.string,
};

const gutter = {
	small: 2,
	large: 4,
};
const classes = StyleSheet.create({
	gallery: {
		marginRight: -gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			marginRight: -gutter.large,
		},
	},

	// anchor
	thumbnail: {
		boxSizing: 'border-box',
		display: 'block',
		float: 'left',
		lineHeight: 0,
		paddingRight: gutter.small,
		paddingBottom: gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			paddingRight: gutter.large,
			paddingBottom: gutter.large,
		},
	},

	// anchor
    text_thumbail: {
        cursor: 'pointer',
		height: '200px',
		'text-align': 'justify',
		'font-size': '16px',
		width: '46%',
		padding: '10px',
		margin: '10px',
		boxSizing: 'border-box',
		display: 'block',
		float: 'left',
		overflow: 'scroll',
		border: 'solid 1px #E6E6E8',
        'border-radius': '4px',
        color: 'darkgray',

		'@media (min-width: 500px)': {
		},
	},

	// orientation
	landscape: {
		width: '30%',
	},
	square: {
		paddingBottom: 0,
		width: '40%',

		'@media (min-width: 500px)': {
			paddingBottom: 0,
		},
	},

	// actual <img />
	source: {
		border: 0,
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
		width: 'auto',
	},
});

export default Gallery;
