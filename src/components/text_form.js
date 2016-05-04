import React, { PropTypes, Component } from 'react';

export default class TextForm extends Component {
  onClick() {
    this.props.onClick(this.refs.input.value);
  }

  render() {
    return (
      <div className='.text-form'>
        <input ref='input' type='text'/><button onClick={this.onClick.bind(this)}>Save</button>
      </div>
    );
  }
}

TextForm.propTypes = {
  onClick: PropTypes.func
};

TextForm.defaultProps = {
  onClick: () => {}
};
