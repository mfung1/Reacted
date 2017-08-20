import React, {Component} from 'react';
import "./sass/reactedApp/reactedApp__BlogPost/reactedApp__BlogPost.sass";
class BlogPost extends Component {
  render(props) {
    return (
        <div className="BlogPost__post">
          <a className="BlogPost__post-title">{this.props.title}</a>
          <img alt="stock image" src="http://via.placeholder.com/960x540" className="BlogPost__post-thumbnail"/>
        </div>
    );
  }
}
export default BlogPost;
