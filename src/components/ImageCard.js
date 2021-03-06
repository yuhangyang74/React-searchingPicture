import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
        this.state = { spans: 0 };
    }

    componentDidMount = () => {
        this.imgRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imgRef.current.clientHeight;

        const span = Math.ceil(height / 10);

        this.setState({ spans: span });
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    alt={description}
                    src={urls.regular}
                    ref={this.imgRef}
                />
            </div>
        );
    }
}

export default ImageCard;