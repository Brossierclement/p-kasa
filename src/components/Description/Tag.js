import React from "react";
import "../Description/Tag.css";

function Tag({ tags }) {
  return (
    <div id="tags">
      <div id="tag">{tags}</div>
    </div>
  );
}

export default Tag;
