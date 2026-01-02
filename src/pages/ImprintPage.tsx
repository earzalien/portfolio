import React, { Suspense } from "react";
import Layout from "../layout/layout";
import ThemeSwitch from "../components/theme-switch";
import { ScrollProgress } from "../components/ScrollProgress";
import Imprint from "../components/Imprint";

const ImprintPage: React.FC = () => {
  return (
    <Layout>
      <ThemeSwitch />
      <header className="h-40">
        <ScrollProgress
          position={"left"}
          color={"orange"}
          height={6}
          smoothness={true}
        />
      </header>

      <main className="relative flex justify-center items-start pt-24 pb-16 px-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Imprint />
        </Suspense>
      </main>
    </Layout>
  );
};

export default ImprintPage;
