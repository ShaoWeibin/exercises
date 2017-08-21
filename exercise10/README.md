# react-redux 练习 #

## action 和 UI 组件事件回调关联的方法 ##
### bindActionCreators ###
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

### bindActionCreators ###
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

### bindActionCreators ###
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


