'use client'

import { useEffect, useState } from "react";

import { SpecsDropdownWidget } from "./components/specs-dropdown-widget";
import ProductGridAndFilters from "./components/product-grid-and-filters";
import { Route, Link, Switch } from "wouter";
import { useRouter } from 'wouter';


function ProductsBySpecs(){
  return(
    <ProductGridAndFilters />
  )
}

function SpecsDropdownWidgetInline(){

  const { push } = useRouter();  // Get the push method for navigation

  const callBack = (selectedSpecs) => {
    window.location.href = '/compatible-parts?fits='+selectedSpecs;  //
  };

  console.log("ENV URL from componenet:", process.env.REACT_APP_API_URL);

  return(
    <SpecsDropdownWidget 
      endpoint={`${process.env.REACT_APP_API_URL}/api/storefront/dropdown-specs`}
      callbackToSubmission={callBack}
      storeHash={process.env.REACT_APP_STORE_HASH}
    /> 
  )

}

const App = () => {

  console.log("ENV URL:", process.env.REACT_APP_API_URL);


  return (
    <div>
      <nav style={{marginBottom:'20px'}}>
        <Link href="/">Home</Link> | <Link href="/compatible-parts/">Products by Parts</Link>
      </nav>
      
      <Switch>
        <Route path="/" component={SpecsDropdownWidgetInline} />
        <Route path="/compatible-parts" component={ProductsBySpecs} />
        <Route>404 - Not Found</Route>
      </Switch>
    </div>
  );
};

// function App() {
  
//   return (

//     <div className="App">
      
//       <SpecsDropdownWidget 
//         endpoint={'http://localhost:3000/api/storefront/dropdown-specs'}
//         callbackToSubmission={() => alert(1)}
//         storeHash={'bohaxauo'}
//       />  

//     </div>
//   );
// }

export default App;