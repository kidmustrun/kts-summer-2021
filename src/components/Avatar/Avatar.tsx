import React from "react";

import styles from "./Avatar.module.scss";
type AvatarProps = {
  src?: string;
  letter?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, letter }) => {
  if (src) {
    return (
      <div className={styles.card__logo}>
        <div
          className={styles.card__logo_img}
          style={{ background: src }}
        ></div>
      </div>
    );
  } else
    return (
      <div className={styles.card__logo}>
        <div className={styles.card__logo_colorful}>{letter}</div>
      </div>
    );
};

export default React.memo(Avatar);
