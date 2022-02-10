import React from "react";
import styles from "./style.module.scss";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { Link } from "react-router-dom";
import { dataBlogs, dataTutorials, dataNewsletters } from "./data";
import { ContentCards, ContentSubbCards } from "./ContentComponent";

const Blog = () => (
  <>
    <PageHeader forceFixed={true} />
    <Container>
      <div className={styles.pageSection}>
        <Fade bottom fraction={0.1} duration={1300} distance={"50px"}>
          <div className={styles.pageSubHeader}>
            <title className={styles.pageSubTitle}>RECENT BLOGS</title>
            <a
              className={styles.pageSeeMoreBtn}
              target="_blank"
              rel="noopener noreferrer"
              href="https://darwinianetwork.medium.com/"
            >
              <span>See More</span>
            </a>
          </div>
        </Fade>
        <Fade bottom fraction={0.1} duration={1500} distance={"50px"}>
          <ContentCards data={dataBlogs.slice(0, 3)} />
        </Fade>
        <Fade bottom fraction={0.1} duration={1700} distance={"50px"}>
          <ContentSubbCards data={dataBlogs.slice(3, 9)} />
        </Fade>
      </div>
      <div className={styles.pageSection}>
        <Fade bottom fraction={0.1} duration={1500} distance={"50px"}>
          <div className={styles.pageSubHeader}>
            <title className={styles.pageSubTitle}>TUTORIALS</title>
            <Link className={styles.pageSeeMoreBtn} to="/blog/tutorials">
              <span>See More</span>
            </Link>
          </div>
        </Fade>
        <Fade bottom fraction={0.1} duration={1500} distance={"50px"}>
          <ContentCards data={dataTutorials.slice(0, 3)} />
        </Fade>
        <Fade bottom fraction={0.1} duration={1500} distance={"50px"}>
          <ContentSubbCards data={dataTutorials.slice(3, 9)} />
        </Fade>
      </div>
      <div className={styles.pageSection}>
        <Fade bottom fraction={0.1} duration={1500} distance={"50px"}>
          <div className={styles.pageSubHeader}>
            <title className={styles.pageSubTitle}>RECENT NEWSLETTERS</title>
            <Link className={styles.pageSeeMoreBtn} to="/blog/newsletters">
              <span>See More</span>
            </Link>
          </div>
        </Fade>
        <Fade bottom fraction={0.1} duration={1500} distance={"50px"}>
          <ContentCards data={dataNewsletters.slice(0, 3)} />
        </Fade>
      </div>
    </Container>
    <PageFooter />
  </>
);

export default React.memo(Blog);
