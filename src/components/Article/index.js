import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group'
import CommentList from '../CommentList';
import './style.css'

class Article extends Component {
  static propTypes = {
      article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  // shouldComponentUpdate(nextProps, nexState){
  //   return nextProps.isOpen !== this.props.isOpen
  // }

  render() {
    const {article, isOpen, toggleOpen} = this.props
    console.log('---', 'apdate article')
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <CSSTransitionGroup
          transitionName = 'article'
          transitionAppear
          transitionEnterTimeout = {300}
          transitionLeaveTimeout = {500}
          transitionAppearTimeout = {500}
          component = 'div'
        >
        {this.getBody()}
        </CSSTransitionGroup>
      </div>
    )
  }

  getBody() {
    const {article, isOpen} = this.props
    if (!isOpen) return null
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments}/>
      </section>
    )
  }
}

export default Article