// add Comment component here
import react, {Component} from 'react';

export default class Comment extends Component {
    render() {
      return (
        <div className="comment">
          {this.props.commentText}
        </div>
      )
    }
  }
  