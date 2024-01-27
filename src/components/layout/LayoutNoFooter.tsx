import Header from "@components/layout/Header";

interface ILayoutNoFooterProps {
  children: React.ReactNode;
}

const LayoutNoFooter = (props: ILayoutNoFooterProps) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default LayoutNoFooter;
