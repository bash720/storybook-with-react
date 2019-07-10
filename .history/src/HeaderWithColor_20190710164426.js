import * as React from 'react';

class HeaderWithColor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'red'

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //code here
        console.log("open ")
        this.state({showmessage: true});
      }


    render () {
        return (
            <div style={{
                background: this.state.color,
                width: 450,
                height: 450,
            }}>
             This Is Colored Boxed
            </div>
        )
    }
}

export default HeaderWithColor;