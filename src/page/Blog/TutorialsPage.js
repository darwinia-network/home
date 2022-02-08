import React from "react";
import styles from "./style.module.scss";
import { Container } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { tutorialsBridge, tutorialsBuilders, tutorialsTools } from "./data";
import { ContentCards } from "./ContentComponent";

const TutorialsPage = () => {
  return (
    <>
      <PageHeader forceFixed={true} />
      <Container>
        <div className={styles.pageSection}>
          <div className={styles.pageSubHeader}>
            <title className={styles.pageSubTitle}>BRIDGE</title>
          </div>
          <ContentCards data={tutorialsBridge} />
        </div>
        <div className={styles.pageSection}>
          <div className={styles.pageSubHeader}>
            <title className={styles.pageSubTitle}>BUILD</title>
          </div>
          <ContentCards data={tutorialsBuilders} />
        </div>
        <div className={styles.pageSection}>
          <div className={styles.pageSubHeader}>
            <title className={styles.pageSubTitle}>TOOLS</title>
          </div>
          <ContentCards data={tutorialsTools} />
        </div>
      </Container>
      <PageFooter />
    </>
  );
};

export default React.memo(TutorialsPage);
