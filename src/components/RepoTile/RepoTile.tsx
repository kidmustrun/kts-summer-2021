import React from "react";

import Avatar from "@components/Avatar";
import StarIcon from "@components/StarIcon";
// @ts-ignore
import moment from "moment";
import { Link } from "react-router-dom";

import styles from "./RepoTile.module.scss";

export type RepoTileProps = {
  item: any;
};

const RepoTile: React.FC<RepoTileProps> = ({ item }) => {
  return (
    <Link to={`repos/${item.owner.login}/${item.name}`}>
      <div className={styles.card}>
        <Avatar
          src={item.avatar_url}
          letter={item.name.charAt(0).toUpperCase()}
        />
        <div className={styles.card__text}>
          <div className={styles.card__text_title}>{item.name}</div>
          <div className={styles.card__text_author}>{item.owner.login}</div>
          <div className={styles.card__text_info}>
            <div className={styles.stars}>
              <StarIcon />
              <span className={styles.stars__count}>
                {item.stargazers_count}
              </span>
            </div>
            <div className={styles.changes}>
              {`Updated ${moment(item.updated_at).format("DD MMM yyyy")}`}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default React.memo(RepoTile);
