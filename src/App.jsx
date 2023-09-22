import Category from "./Components/Category";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Components/ProductDetails";
import Products from "./Components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="component-container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<><Products /></>} />
            <Route path="/smartphones" element={<> <Category  category="smartphones" /> </>} />
            <Route path="/laptops" element={<> <Category  category="laptops" /> </>} />
            <Route path="/fragrances" element={<> <Category  category="fragrances" /> </>} />
            <Route path="/skincare" element={<> <Category  category="skincare" /> </>} />
            <Route path="/groceries" element={<> <Category  category="groceries" /> </>} />
            <Route path="/home-decoration" element={<> <Category  category="home-decoration" /> </>} />
            <Route path="/furniture" element={<> <Category  category="furniture" /> </>} />
            <Route path="/tops" element={<> <Category  category="tops" /> </>} />
            <Route path="/womens-dresses" element={<> <Category  category="womens-dresses" /> </>} />
            <Route path="/womens-shoes" element={<> <Category  category="womens-shoes" /> </>} />
            <Route path="/mens-shirts" element={<> <Category  category="mens-shirts" /> </>} />
            <Route path="/mens-watches" element={<> <Category  category="mens-watches" /> </>} />
            <Route path="/mens-shoes" element={<> <Category  category="mens-shoes" /> </>} />
            <Route path="/womens-watches" element={<> <Category  category="womens-watches" /> </>} />
            <Route path="/womens-bags" element={<> <Category  category="womens-bags" /> </>} />
            <Route path="/womens-jewellery" element={<> <Category  category="womens-jewellery" /> </>} />
            <Route path="/sunglasses" element={<> <Category  category="sunglasses" /> </>} />
            <Route path="/automotive" element={<> <Category  category="automotive" /> </>} />
            <Route path="/motorcycle" element={<> <Category  category="motorcycle" /> </>} />
            <Route path="/lighting" element={<> <Category  category="lighting" /> </>} />
            <Route path="/products/:id" element={<> <ProductDetails/> </>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
