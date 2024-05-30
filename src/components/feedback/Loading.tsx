import React from "react";
import { TLoading } from "../../types";
type TLoadingProps = {
  laoding: TLoading;
  error: null | string;
  childComponent: React.ReactNode;
};
const Loading = ({ laoding, error, childComponent }: TLoadingProps) => {
  if (laoding == "pending") {
    return (
      <h1 style={{ textAlign: "center", margin: "50px" }}>
        loading plaese wait...
      </h1>
    );
  }
  if (laoding == "failed") {
    return <h1>{error}</h1>;
  }
  return <>{childComponent}</>;
};

export default Loading;
