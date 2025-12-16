import classNames from "classnames";

interface PageWrapperProps {
  children: React.ReactNode;
  cssClasses?: string;
}

const PageWrapper = ({ children, cssClasses }: PageWrapperProps) => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className={classNames("px-5 tablet:px-10", cssClasses)}>
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
