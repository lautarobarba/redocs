"use client";

import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

type SwaggerDisplayProps = {
  spec: Record<string, any>;
};

export const SwaggerDisplay = ({ spec }: SwaggerDisplayProps) => {
  return <SwaggerUI spec={spec} />;
};
