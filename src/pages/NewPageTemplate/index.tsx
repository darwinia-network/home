import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";

const NewPageTemplate = () => {
  const { footerData } = useFooterData();

  return (
    <div>
      <div className={`container space-top`}>New Page Template</div>
      <Footer data={footerData} />
    </div>
  );
};

export default NewPageTemplate;
