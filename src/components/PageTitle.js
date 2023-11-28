import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PNFLIEX | {titleName}</title>
      </Helmet>
    </HelmetProvider>
  );
};
