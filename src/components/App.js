'use strict';


import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory, Link } from 'react-router';

var App = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div>React Router: </div>
                <div><a href="#/list">list page</a></div>
                <div><a href="#/detail">detail page</a></div>
                <div><Link to="/list" activeStyle={{color:'red'}}>list page</Link></div>
                {/*三级嵌套*/}
                <div><Link to="/list/three" activeStyle={{color:'red'}}>list page three</Link></div>
                <div><Link to="/detail" activeStyle={{color:'red'}}>detail page</Link></div>

                {this.props.children}

            </div>
        );
    }
});

//使用Link组件

var List = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是列表页</div>
                <div>{this.props.params.paramName}</div>
            </div>
        );
    }
});

var Detail = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是详情页</div>
            </div>
        );
    }
});

var ThreeComponent = React.createClass({
    render:function(){
        return (
            <div>
                <h4>Three Component.</h4>
                {/*<Link to="/">返回首页</Link>*/}
            </div>
        );
    }
});

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <Route path='/list' component={List} >
                <Route path='/list/:paramName' component={ThreeComponent} />
            </Route>
            <Route path='/detail' component={Detail} />
        </Route>
    </Router>
), document.getElementById('app'));
