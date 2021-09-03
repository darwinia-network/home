import React from "react";
import style from "./style.module.scss";

const CardItem = ({ icon, title, content, link, target }) => (
  <a className={style.cardItem} rel="noopener noreferrer" target={target} href={link}>
    <img alt="..." src={icon} />
    <div className="d-flex flex-column ml-1">
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  </a>
);

const DropdownCard = ({ data }) => {
  return data && data.length ? (
    <div className={style.card}>
      {data.map((item, index) => (
        <CardItem
          key={index}
          icon={item.icon}
          title={item.title}
          content={item.content}
          link={item.link}
          target={item.target}
        />
      ))}
    </div>
  ) : null;
};

export default React.memo(DropdownCard);
