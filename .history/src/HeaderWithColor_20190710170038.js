import * as React from 'react';

class HeaderWithColor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'red'

        }
        this.handleClick = this.handleClick.bind(this);
    }

     render () {
        return (
            <div style={{
                background: this.props.color,
                width: '95%',
                height: 50,
                textAlign: 'center',
                alignItems: 'center',
                color: 'white' 
            }}>
             This Is Colored Boxed
            </div>
        )
    }
}

export default HeaderWithColor;