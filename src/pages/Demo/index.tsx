import Footer from "../../components/Footer";
import { useFooterData } from "../../data/footer";
import { useEffect } from "react";
import Typewriter from "../../utils/Typewriter";

const Demo = () => {
  const { footerData } = useFooterData();

  useEffect(() => {
    const element = document.getElementById("demo");
    if (!element) {
      return;
    }
    const typewriter = new Typewriter(element, { typingSpeed: 100, deletingSpeed: 200, loop: true, cursor: "|" });
    typewriter
      .pauseFor(4000)
      .typeString({
        text: "Hello World",
        style: "color: yellow; text-decoration: underline;",
      })
      .deleteAll(100)
      .pauseFor(800)
      .typeString(
        {
          text: "continue typing",
          style: "color: blue;display: block;",
        },
        100
      )
      .deleteChars(4, 1000)
      .typeString({
        text: "after delete",
        style: "color: pink;",
      })
      .pauseFor(4000)
      .start();

    return () => {
      typewriter.clean();
    };
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
