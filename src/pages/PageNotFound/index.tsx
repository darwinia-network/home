import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={`bg-center bg-cover bg-no-repeat`}>
      <div data-aos={"fade-up"} data-aos-duration={700} className={`container space-top`}>
        <div className={"flex flex-col lg:flex-row justify-center items-center pt-[10rem] lg:pt-[15.625rem]"}>
          <img
            className={"order-2 lg:order-1 w-[58.9%] max-w-[400px] lg:max-w-none lg:w-[18.25%]"}
            src="/images/not-found.png"
            alt="image"
            width={438}
            height={478}
          />
          <div
            className={
              "order-1 lg:order-2 mb-[2.25rem] lg:mb-0 text-center lg:text-left pl-[8%] lg:pl-0 capitalize lg:ml-[3.75rem]"
            }
          >
            <div className={"title mb-[1.25rem] text-white lg:text lg:text-white"}>Sorry, Page Not Found</div>
            <NavLink className={"btn"} to={"/"}>
              <>
                <span>Go Home</span>
                <span className={"ml-[10px]"}>{">"}</span>
              </>
            </NavLink>
          </div>
        </div>
      </div>
      {/* <Footer data={footerData} /> */}
    </div>
  );
};

export default PageNotFound;
