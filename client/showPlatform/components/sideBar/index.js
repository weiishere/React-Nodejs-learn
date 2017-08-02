import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.less';
import { connect } from 'react-redux';

class SideBar extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }
    constructor(props) {
        super(props);
        // 特别注意这一行语句
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e) => {
        const { router } = this.context;
        const key = e.target.getAttribute('value');
        if (key) {
            router.push({ pathname: key });
            //this.props.dispatch(setMenu(e.key));
        }
    }
    render() {
        return (
            <aside className='menuWrap'>
                <nav>
                    <a href="javascript:;" onClick={this.handleClick} value='/showPlatform/app_1'>redux-react</a>
                    <a href="#">React组件式toast</a>
                    <a href="#">接月饼游戏</a>
                    <a href="#">1010游戏</a>
                    <a href="#">原生canvas俄罗斯方块</a>
                    <a href="#">SVG饼图组件</a>
                    <a href="#">iconFont</a>
                </nav>
            </aside>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {}
}

export default connect(mapStateToProps)(SideBar);