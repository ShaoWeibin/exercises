/**
 * @fileOverview
 * @author weibin.shao
 * @date 2017/8/17
 */

import React, {Component} from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {number, actions} = this.props;
        return (
            <button
                className={'button'}
                onClick={() => actions.click()}
            >
                {number}
            </button>
        );
    }
}
