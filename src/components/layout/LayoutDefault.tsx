import Header from "@components/layout/Header";
import Footer from "@components/layout/Footer";

interface ILayoutDefaultProps {
  children: React.ReactNode;
}

const LayoutDefault = (props: ILayoutDefaultProps) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default LayoutDefault;
