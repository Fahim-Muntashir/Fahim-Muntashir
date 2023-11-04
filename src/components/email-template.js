import React from "react";

function EmailTemplateProps(firstName) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
}

export const EmailTemplate = React.memo(EmailTemplateProps);
