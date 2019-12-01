import React from "react";
import propTypes from "prop-types";

const Like = ({ liked, onLike, post }) => {
  let heartname = "fa fa-heart";
  if (!liked) heartname += "-o";
  return (
    <div>
      <i
        className={heartname}
        onClick={() => onLike(post)}
        style={{ color: "red" }}
      />
    </div>
  );
};
Like.propTypes = {
  liked: propTypes.bool.isRequired,
  onLike: propTypes.func.isRequired,
  post: propTypes.object.isRequired
};
Like.defaultProps = {
  liked: false
};
export default Like;
