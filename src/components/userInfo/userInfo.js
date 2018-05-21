import React, {Component} from 'react'

import './style.less'

class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='userInfo-container'>
        <p>
          <i className="icon-user"/>
          &nbsp;
          <span>{this.props.username}</span>
        </p>
        <p>
          <i className="icon-map-marker"/>
          &nbsp;
          <span>{this.props.city}</span>
        </p>
      </div>
    )
  }
}

export default UserInfo;