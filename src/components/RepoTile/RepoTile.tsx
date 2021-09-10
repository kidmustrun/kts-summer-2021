import React from "react";

import Avatar from "@components/Avatar";
import StarIcon from "@components/StarIcon";
// @ts-ignore
import moment from "moment";
import { Link } from "react-router-dom";

export type RepoTileProps = {
  item: any;
};

const RepoTile: React.FC<RepoTileProps> = ({ item }) => {
  return (
    <Link to={`repos/${item.owner.login}/${item.name}`}>
      <div className="card">
        <Avatar
          src={item.avatar_url}
          letter={item.name.charAt(0).toUpperCase()}
        />
        <div className="card__text">
          <div className="card__text_title">{item.name}</div>
          <div className="card__text_author">{item.owner.login}</div>
          <div className="card__text_info">
            <div className="stars">
              <StarIcon />
              <span className="stars__count">{item.stargazers_count}</span>
            </div>
            <div className="changes">
              {`Updated ${moment(item.updated_at).format("DD MMM yyyy")}`}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default React.memo(RepoTile);
