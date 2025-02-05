import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const mobiles = [
  { id: 1, name: "iPhone 14 Pro", brand: "Apple", storage: "128GB", price: 120000, discount: 10 },
  { id: 2, name: "Samsung S23 Ultra", brand: "Samsung", storage: "256GB", price: 115000, discount: 12 },
  { id: 3, name: "OnePlus 11", brand: "OnePlus", storage: "128GB", price: 60000, discount: 15 },
  { id: 4, name: "iPhone 13", brand: "Apple", storage: "128GB", price: 75000, discount: 8 },
  { id: 5, name: "Google Pixel 7", brand: "Google", storage: "256GB", price: 68000, discount: 10 },
  { id: 6, name: "Redmi Note 12 Pro", brand: "Redmi", storage: "128GB", price: 25000, discount: 20 },
  { id: 7, name: "Samsung A54", brand: "Samsung", storage: "128GB", price: 32000, discount: 18 },
  { id: 8, name: "Vivo X90 Pro", brand: "Vivo", storage: "256GB", price: 95000, discount: 10 },
  { id: 9, name: "iPhone SE 2022", brand: "Apple", storage: "64GB", price: 48000, discount: 12 },
  { id: 10, name: "Realme GT 3", brand: "Realme", storage: "128GB", price: 42000, discount: 14 },
  { id: 11, name: "Motorola Edge 30", brand: "Motorola", storage: "256GB", price: 39000, discount: 15 },
  { id: 12, name: "Nothing Phone 2", brand: "Nothing", storage: "128GB", price: 38000, discount: 16 },
];

const priceRanges = [
  { label: "₹5000 - ₹20000", min: 5000, max: 20000 },
  { label: "₹20000 - ₹50000", min: 20000, max: 50000 },
  { label: "₹50000 - ₹150000", min: 50000, max: 150000 },
];

const storages = ["64GB", "128GB", "256GB"];
const brands = [...new Set(mobiles.map(mobile => mobile.brand))];

export default function SubCategory() {
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const filteredMobiles = mobiles.filter(mobile => {
    const priceCondition = selectedPrice
      ? mobile.price >= selectedPrice.min && mobile.price <= selectedPrice.max
      : true;
    const storageCondition = selectedStorage ? mobile.storage === selectedStorage : true;
    const brandCondition = selectedBrand ? mobile.brand === selectedBrand : true;
    return priceCondition && storageCondition && brandCondition;
  });

  return (
    <div className="container-fluid p-4">
      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-md-2 bg-light p-3 rounded">
          <h4 className="mb-3">Filters</h4>
          <div>
            <h5>Price Range</h5>
            <select className="form-select" onChange={(e) => setSelectedPrice(priceRanges[e.target.value])}>
              <option value="">Select Price Range</option>
              {priceRanges.map((range, index) => (
                <option key={index} value={index}>{range.label}</option>
              ))}
            </select>
          </div>
          <div className="mt-3">
            <h5>Storage</h5>
            <select className="form-select" onChange={(e) => setSelectedStorage(e.target.value)}>
              <option value="">Select Storage</option>
              {storages.map((storage, index) => (
                <option key={index} value={storage}>{storage}</option>
              ))}
            </select>
          </div>
          <div className="mt-3">
            <h5>Brand</h5>
            <select className="form-select" onChange={(e) => setSelectedBrand(e.target.value)}>
              <option value="">Select Brand</option>
              {brands.map((brand, index) => (
                <option key={index} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-md-10">
          <div className="row">
            {filteredMobiles.map(mobile => (
              <div key={mobile.id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{mobile.name}</h5>
                    <p className="card-text">Storage: {mobile.storage}</p>
                    <p className="text-danger text-decoration-line-through">₹{mobile.price}</p>
                    <p className="text-success">Discount: {mobile.discount}%</p>
                    <p className="text-primary fw-bold">
                      ₹{(mobile.price - (mobile.price * mobile.discount) / 100).toFixed(0)}
                    </p>
                    <div className="d-flex gap-2">
                      <button className="btn btn-primary">Add to Cart</button>
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
