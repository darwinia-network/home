import React from "react";
import styles from "./style.module.scss";
import { Container } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { ContentCards } from "./ContentComponent";
import { newsLetters } from "./data";

const NewslettersPage = () => {
  return (
    <>
      <PageHeader forceFixed={true} />
      <Container>
        <div className={styles.pageSection}>
          <div className={styles.pageSubHeader}>
            <title className={styles.pageSubTitle}>NEWSLETTERS</title>
          </div>
          <ContentCards data={newsLetters} />
        </div>
      </Container>
      <PageFooter />
    </>
  );
};

export default React.memo(NewslettersPage);
