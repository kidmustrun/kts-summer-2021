import React from "react";

import Avatar from "@components/Avatar";
import StarIcon from "@components/StarIcon";
import { ApiResp } from "@store/GitHubStore/types";

export type RepoTileProps = {
  item: any;
};

const RepoTile: React.FC<RepoTileProps> = ({ item }) => {
  return (
    <div className="card">
      <Avatar src={item.avatar_url} />
      <div className="card__text">
        <div className="card__text_title">{item.name}</div>
        <div className="card__text_author">{item.owner.login}</div>
        <div className="card__text_info">
          <div className="stars">
            <StarIcon />
            <span className="stars__count">{item.stargazers_count}</span>
          </div>
          <div className="changes">Updated {item.updated_at}</div>
        </div>
      </div>
    </div>
  );
};
export default RepoTile;
