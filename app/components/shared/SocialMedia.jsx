import React from 'react';
import classnames from 'classnames';
import styles from '../../App.css';

export default class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const renderItem = (item, index) => {
      return (
          <a className={styles.icon} href={item.url} key={index} target="blank">
            <i className={classnames('fa', item.className, 'fa-3x')}></i>
            <br/>
            <span> {item.username}</span>
          </a>
      );
    };

    return (
      <div>
        {this.props.items.map(renderItem)}
      </div>
    );
  }
}

SocialMedia.propTypes = {
  items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        className: React.PropTypes.string.isRequired,
        username: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired
      })
    )
};