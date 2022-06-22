import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import { useEffect } from "react";
import Typewriter from "../../utils/typewriter";

const Demo = () => {
  const { footerData } = useFooterData();

  useEffect(() => {
    const element = document.getElementById("demo");
    if (!element) {
      return;
    }
    const typewriter = new Typewriter(element, { typingSpeed: 0, deletingSpeed: 0, loop: true });
    console.log(typewriter);
  }, []);

  return (
    <div>
      <div className={`container space-top`}>
        <div>Demo Page</div>
        <div id="demo" />
      </div>
      <Footer data={footerData} />
    </div>
  );
};

export default Demo;
