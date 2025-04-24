import React from "react";
import ReactDOM from "react-dom/client";
import { SpecsDropdownWidget } from "../components/specs-dropdown-widget";

// Replace this function name if needed
function renderHomePageYmmWidget() {
  const container = document.getElementById("home_page_ymm_widget");
  if (!container) return;

  // Callback function
  const callBackForHomePageWidget = (selectedSpecs) => {
    window.location.href = `/search.php?search_query="${selectedSpecs}"`;  // Redirects to the search page with the selected specs
  };

  const root = ReactDOM.createRoot(container);
  root.render(
    <SpecsDropdownWidget
      endpoint={`${process.env.REACT_APP_API_URL}/api/storefront/dropdown-specs`}
      callbackToSubmission={callBackForHomePageWidget}
      storeHash={process.env.REACT_APP_STORE_HASH}
    />
  );
}



// Check if the div exists and run the widget rendering logic immediately
const container = document.getElementById("home_page_ymm_widget");
if (container) {
  renderHomePageYmmWidget();
} else {
  console.log("The widget div (#home_page_ymm_widget) does not exist.");
}

window.renderHomePageYmmWidget = renderHomePageYmmWidget;