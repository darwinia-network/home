import { Link } from "react-router-dom";
import OthersPageWrap from "../../components/OthersPageWrap";

const PageNotFound = () => {
  return (
    <OthersPageWrap>
      <div className="h-[80vh] lg:h-fit lg:py-[10rem] flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 bg-app-black border-b border-b-app-white/20">
        <img src="/images/not-found.png" alt="..." className="w-[60%] lg:w-[20rem]" data-aos="fade-up" />
        <div className="flex flex-col gap-small" data-aos="fade-up" data-aos-delay={100}>
          <span className="text-t14b text-app-white lg:text-t16b">Sorry, Page Not Found</span>
          <Link
            to="/"
            className="text-t14b text-app-white lg:text-t16b underline transition-colors hover:text-app-main underline-offset-2 w-fit"
          >{`Go Home >`}</Link>
        </div>
      </div>
    </OthersPageWrap>
  );
};

export default PageNotFound;
