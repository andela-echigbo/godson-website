import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import styles from '../../App.css';
import classnames from 'classnames';

export default class CustomDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillReceiveProps() {
    if (this.props.item) {
      this.handleOpen();
    }
  }

  handleOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  renderUrl(url, index) {
    return (
      <div key={index}>
        <i className={classnames('fa', 'fa-link', styles.marginRight)}></i>
        <a className={styles.underline} href={url} target="_blank">
          <small>{url}</small>
        </a>
      </div>
    );
  }

  render() {
    const actions = [
      <FlatButton
          key="0"
          keyboardFocused
          label="Close"
          onTouchTap={this.handleClose}
          primary
      />
    ];

    return (
      <Dialog
          actions={actions}
          autoScrollBodyContent
          modal={false}
          onRequestClose={this.handleClose}
          open={this.props.item.title !== '' && this.state.open}
          title={this.props.item.title}
      >
        <div className={styles.paddingTop}>
          <div>
            <div className={styles.inlineBlock} style={{maxWidth: '22%'}}>
              <img alt={this.props.item.title} className={styles.itemImage} src={this.props.item.image}/>
            </div>
            <div className={styles.inlineBlock} style={{maxWidth: '75%'}}>
              <h5>Links</h5>
              <div>
                {this.props.item.urls.map(this.renderUrl)}
              </div>
              <br/>
              <h5>Stack</h5>
              <div><small><i className={classnames('fa', 'fa-code', styles.marginRight)}></i><code>{this.props.item.stack}</code></small></div>
              <br/>
              <h5>Description</h5>
              <div className={styles.descriptionText}>{this.props.item.description}</div>
            </div>
          </div>
        </div>
      </Dialog>
    );
  }
}

CustomDialog.propTypes = {
  item: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    stack: React.PropTypes.string.isRequired,
    urls: React.PropTypes.arrayOf(React.PropTypes.string.isRequired)
  })
};
