import React from "react";
import styles from "./style.module.scss";

// data: { picture, tags, title, abstract, time, link }[]
export const ContentCards = ({ data }) => (
  <div className={styles.contentCards}>
    {data.map((value, index) => (
      <div className={styles.contentCard} key={index}>
        <a target="_blank" rel="noopener noreferrer" href={value.link} className={styles.contentCardLink}>
          <img alt="..." src={value.picture} />
        </a>
        <div className={styles.contentCardTags}>
          {value.tags.map((value, index) => (
            <span className={styles.contentCardTag} key={index}>
              {index > 0 ? `, ${value}` : value}
            </span>
          ))}
        </div>
        <h3 className={styles.contentCardTitle}>{value.title}</h3>
        <p className={styles.contentCardAbstract}>{value.abstract}</p>
        <p className={styles.contentCardTime}>{value.time}</p>
      </div>
    ))}
  </div>
);

// data: { picture, tags, title, abstract, time, link }[]
export const ContentSubbCards = ({ data }) => (
  <div className={styles.contentSubCards}>
    {data.map((value, index) => (
      <div className={styles.contentSubCard} key={index}>
        <a target="_blank" rel="noopener noreferrer" href={value.link} className={styles.contentSubCardLink}>
          <img alt="..." src={value.picture} />
        </a>
        <div className={styles.contentSubCardContent}>
          <div className={styles.contentSubCardContentTags}>
            {value.tags.map((value, index) => (
              <span className={styles.contentSubCardContentTag} key={index}>
                {index > 0 ? `, ${value}` : value}
              </span>
            ))}
          </div>
          <h3 className={styles.contentSubCardContentTitle}>{value.title}</h3>
        </div>
      </div>
    ))}
  </div>
);
