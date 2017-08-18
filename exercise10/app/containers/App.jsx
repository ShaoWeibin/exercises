/**
 * @fileOverview
 * @author weibin.shao
 * @date 2017/8/17
 */

import React, {Component} from 'react';
import PropsTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Button from '../components/Button';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'main'}>
                <Button {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.click
    };
}

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);