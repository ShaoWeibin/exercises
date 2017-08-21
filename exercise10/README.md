# react-redux 练习 #

## action 和 UI 组件事件回调关联的方法 ##
### bindActionCreators ###
把 action creators 转成拥有同名 keys 的对象，但使用 dispatch 把每个 action creator 包围起来，这样可以直接调用它们。
惟一使用 bindActionCreators 的场景是当你需要把 action creator 往下传到一个组件上，却不想让这个组件觉察到 Redux 的存在，而且不希望把 Redux store 或 dispatch 传给它。
``` javascript
// App.jsx
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

// Button.jsx
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
``` 

### mapDispatchToProps 中 dispatch(action()) ###
``` javascript
// App.jsx
const mapDispatchToProps = dispatch => ({
    click: () => dispatch(actions.click())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

// Button.jsx
render() {
        const {number, click} = this.props;
        return (
            <button
                className={'button'}
                onClick={() => click()}
            >
                {number}
            </button>
        );
    }
```

### 在组件事件回调中dispatch ###
``` javascript
// App.jsx
export default connect(
    mapStateToProps
)(App);

// Button.jsx
import {click} from '../actions';
render() {
        const {number, dispatch} = this.props;
        return (
            <button
                className={'button'}
                onClick={() => dispatch(click())}
            >
                {number}
            </button>
        );
    }
```


