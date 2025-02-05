import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductPage = () => {
  // Function to generate price range options
  const generatePriceRanges = () => {
    const ranges = [
      "₹100 - ₹1,000",
      "₹1,000 - ₹10,000",
      "₹10,000 - ₹50,000",
      "₹50,000 - ₹1,00,000",
      "₹1,00,000 - ₹5,00,000"
    ];
    return ranges;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Filters */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar p-3">
          <h5>Filters</h5>
          <div className="mb-3">
            <h6>Brand</h6>
            <select className="form-select">
              <option>Samsung</option>
              <option>Apple</option>
              <option>LG</option>
              <option>Sony</option>
            </select>
          </div>
          <div className="mb-3">
            <h6>Price Range</h6>
            <select className="form-select">
              {generatePriceRanges().map((range, index) => (
                <option key={index} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <h6>Storage Specification</h6>
            <select className="form-select">
              <option>64GB</option>
              <option>128GB</option>
              <option>256GB</option>
              <option>512GB</option>
            </select>
          </div>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 col-lg-10 px-md-4">
          {/* Newly Launched Products */}
          <div className="my-4">
            <h4>Newly Launched Products</h4>
            <div className="d-flex gap-3 overflow-auto">
              <div className="card p-2" style={{ width: "15rem" }}>New Phone</div>
              <div className="card p-2" style={{ width: "15rem" }}>Smart TV</div>
              <div className="card p-2" style={{ width: "15rem" }}>Microwave Oven</div>
            </div>
          </div>

          {/* All Category Products */}
          <div className="row">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="col-md-4 mb-4">
                <div className="card p-3">
                  <h5>Product {item}</h5>
                  <p>Price: ₹{item * 10000}</p>
                  <p className="text-danger">Discounted Price: ₹{item * 9000}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary">Buy Now</button>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductPage;
