import React from "react";
import styles from "./style.module.scss";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";

const Blog = () => {
  return (
    <div>
      <PageHeader forceFixed={true} />
      <div className={styles.main}>Blog Page</div>
      <PageFooter />
    </div>
  );
};

export default React.memo(Blog);
