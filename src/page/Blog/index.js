import React from "react";
import styles from "./style.module.scss";
import { Container } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";

import { recentBlogs, tutorials, newsLetters } from "./data";
import { ContentCards, ContentSubbCards } from "./ContentComponent";

const Blog = () => {
  return (
    <>
      <PageHeader forceFixed={true} />
      <Container>
        <div className={styles.pageSection}>
          <div className={styles.pageSubHeader}>
            <title className={styles.pageSubTitle}>RECENT BLOGS</title>
            <a
              className={styles.pageSeeMoreBtn}
              target="_blank"
              rel="noopener noreferrer"
              href="https://darwinianetwork.medium.com/"
            >
              <span>See More Blogs</span>
            </a>
          </div>
          <ContentCards data={recentBlogs.slice(0, 3)} />
          <ContentSubbCards data={recentBlogs.slice(3, 9)} />
        </div>
        <div className={styles.pageSection}>
          <div className={styles.pageSubHeader}>
            <title className={styles.pageSubTitle}>TUTORIALS</title>
            <a className={styles.pageSeeMoreBtn} target="_blank" rel="noopener noreferrer" href="https://www.baidu.com">
              <span>See More Tutorials</span>
            </a>
          </div>
          <ContentCards data={tutorials.slice(0, 3)} />
          <ContentSubbCards data={tutorials.slice(3, 9)} />
        </div>
        <div className={styles.pageSection}>
          <div className={styles.pageSubHeader}>
            <title className={styles.pageSubTitle}>RECENT NEWSLETTERS</title>
            <a className={styles.pageSeeMoreBtn} target="_blank" rel="noopener noreferrer" href="https://www.baidu.com">
              <span>See More Newsletters</span>
            </a>
          </div>
          <ContentCards data={newsLetters.slice(0, 3)} />
        </div>
      </Container>
      <PageFooter />
    </>
  );
};

export default React.memo(Blog);
