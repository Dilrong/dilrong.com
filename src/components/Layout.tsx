import React from "react";
import { Container, CssBaseline } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Container>
        {children!}
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
