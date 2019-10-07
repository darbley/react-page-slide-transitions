import React from 'react';
import './assets/scss/styles.scss';
import { BrowserRouter as Router, Route,  Link, Switch, Redirect, withRouter, NavLink  } from "react-router-dom";
import {TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './components/Header';
import Home from './pages/Home';
import Yellow from './pages/Yellow';
import Red from './pages/Red';
import Green from './pages/Green';
import Blue from './pages/Blue';
import Purple from './pages/Purple';

const pages = [
    { path: '/', name: 'home', order: 1 },
    { path: '/yellow', name: 'yellow', order: 2 },
    { path: '/red', name: 'red', order: 3 },
    { path: '/green', name: 'green', order: 4 },
    { path: '/blue', name: 'blue', order: 5 },
    { path: '/purple', name: 'purple', order: 6 }
]

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentPage: this.setPage(this.props.location.pathname),
            curPageOrder: this.setCurrentOrder(this.props.location.pathname),
            newPageOrder: null
        }
    }
    componentDidUpdate(prevProps, prevState){
        console.log('Component did update');
       
        let newPage = this.setPage(this.props.location.pathname);
        let newPageOrder = pages.filter(function (page) {
            return page.name === newPage;
        });

        let curPage = this.state.currentPage;
        let curPageOrder = pages.filter(function (page) {
            return page.name === curPage;
        });

        if( newPage !== curPage){
            console.log('new page');
            let direction = curPageOrder[0].order < newPageOrder[0].order ? 'left' : 'right';
            // Set State
            this.setState({
                currentPage: newPage,
                pageDirection: direction,
                curPageOrder: curPageOrder[0].order,
                newPageOrder: newPageOrder[0].order,
            })
           
        }
        
    }
    setCurrentOrder = (path) => {
        let curPageOrder = pages.filter(function (page) {
            return page.path === path;
        });
        
        return curPageOrder[0].order;
    }

    setPage = (pathname) => {
        //console.log('Switch ',pathname);
        let page = null;
        switch (pathname){
            case('/'):
                page = 'home';
                break;
            case('/yellow'):
                page = 'yellow';
                break;
            case('/red'):
                page = 'red';
                break;
            case('/green'):
                page = 'green';
                break;
            case('/blue'):
                page = 'blue'
                break;
            case('/purple'):
                page = 'purple';
                break;
            default:
                page = 'home';
            
        }
       
        return page;
    }
    render() {
        const { location } = this.props;
        const currentKey = location.pathname.split("/")[1] || "/";


        return (
            <div className={`wrapper ${this.setPage(this.props.location.pathname)}`}>
                <Header />
                <div className={`wrap ${currentKey} `}>
                    <TransitionGroup  className={`transition-group ${this.state.pageDirection}`}>
                        <CSSTransition
                            key={currentKey}
                            timeout={{ enter: 800, exit: 400 }}
                            classNames={'transition-wrap'}
                            
                        >
                            
                            <section className={`route-section fade`}>
                                <Switch location={location}>
                                    <Route exact path="/" component={() => <Home />} />
                                    <Route path="/yellow" component={() => <Yellow /> } />
                                    <Route path="/red" component={() => <Red /> } />
                                    <Route path="/green" component={() => <Green /> } />
                                    <Route path="/blue" component={() => <Blue /> } />
                                    <Route path="/purple" component={() => <Purple /> } />   
                                </Switch>
                            </section>
                           
                        </CSSTransition>
                    </TransitionGroup>
                </div>
            </div>
        )
    }
}
export default withRouter(App);
