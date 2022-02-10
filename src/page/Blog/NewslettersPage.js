import React from "react";
import styles from "./style.module.scss";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import { PageHeader } from "../../components/PageHeader";
import { PageFooter } from "../../components/PageFooter";
import { ContentCards } from "./ContentComponent";
import { dataNewsletters } from "./data";

const NewslettersPage = () => (
  <>
    <PageHeader forceFixed={true} />
    <Container>
      <div className={styles.pageSection}>
        <Fade bottom fraction={0.1} duration={1300} distance={"50px"}>
          <div className={styles.pageSubHeader}>
            <title className={styles.pageSubTitle}>NEWSLETTERS</title>
          </div>
        </Fade>
        <Fade bottom fraction={0.1} duration={1500} distance={"50px"}>
          <ContentCards data={dataNewsletters} />
        </Fade>
      </div>
    </Container>
    <PageFooter />
  </>
);

export default React.memo(NewslettersPage);
