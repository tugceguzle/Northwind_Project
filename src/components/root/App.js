import React from "react";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Container} from  "reactstrap";
import {Route, Routes} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <div>
      <Navi/>
      <br></br>
      <Container>
      <Routes>
                <Route path="/" exact
                  element={<Dashboard></Dashboard>}/>
                <Route exact path="/product" 
                element={<Dashboard></Dashboard>} />
                <Route exact path="/cart" element={<CartDetail></CartDetail>}/>
                <Route path="/saveproduct/:productId" element={<AddOrUpdateProduct></AddOrUpdateProduct>}/>
                <Route path="/saveproduct" element={<AddOrUpdateProduct></AddOrUpdateProduct>}/>
                <Route exact element={<NotFound></NotFound>}/>
        </Routes>
    </Container>
    </div>
  );
}

export default App;
