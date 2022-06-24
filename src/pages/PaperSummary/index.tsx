import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import PaperDetails from "../../components/PaperDetails";
import { useParams, useNavigate } from "react-router-dom";
import { usePapersData } from "../../data/papers";
import { useEffect, useState } from "react";
import { Paper } from "../../data/types";

const PaperSummary = () => {
  const location = useParams();
  const { footerData } = useFooterData();
  const { getPaperById } = usePapersData();
  const navigate = useNavigate();
  const [paper, setPaper] = useState<Paper>();

  const redirectToNotFound = () => {
    navigate({
      pathname: "/not-found",
    });
  };

  useEffect(() => {
    if (!location.paperId) {
      redirectToNotFound();
    }
    const paperId = Number(location.paperId);
    const paper = getPaperById(paperId);
    if (!paper) {
      redirectToNotFound();
    }
    setPaper(paper);
  }, [location.paperId]);

  return (
    <div className={`bg-center bg-cover bg-no-repeat`}>
      <div data-aos={"fade-up"} data-aos-duration={700} className={`container max-w-[920px] space-top-2`}>
        <PaperDetails data={paper} />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default PaperSummary;
