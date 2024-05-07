// import "./productslists.css";
// import Product2 from "./Product2";
// import { useEffect, useState } from "react";
// function ProductsLists2() {
//   const api_url = "https://fakestoreapi.com/products";
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);

//   const getproducts = () => {
//     fetch(`${api_url}`)
//       .then((res) => res.json())
//       .then((json) => setProducts(json));
//   };
//   const getcategories = () => {
//     fetch(`${api_url}/categories`)
//       .then((res) => res.json())
//       .then((json) => setCategories(json));
//   };
//   const getproductsInCategories = (catName) => {
//     console.log(catName);
//     fetch(`${api_url}/category/${catName}`)
//       .then((res) => res.json())
//       .then((json) => setProducts(json));
//   };
//   useEffect(() => {
//     getproducts();
//     getcategories();
//   }, []);

//   return (
//     <>
//       <h2 className="text-center p-3"> Our Products</h2>
//       <div className="container">
//         <button className="btn btn-info"
//           onClick={() => {
//             getproducts();
//           }}
//         >
//           All
//         </button>
//         {categories.map((cat) => {
//           return (
//             <button 
//               key={cat}
//               onClick={() => {
//                 getproductsInCategories(cat);
//               }}
//               className="btn btn-info"
//             >
//               {cat}
//             </button>
//           )
//         })}
        
//         <div className="row">
//           {products.map((product) => {
//             return (
//               <div className="col-2" key={product.id}>
//                 <Product2 product={product} showbutton={true}/>
//               </div>
//             );
//           })}
//           ;
//         </div>
//       </div>
//     </>
//   );
// }
// export default ProductsLists2;


// import "./productslists.css";
import Product2 from "./Product2";
import { useEffect, useState } from "react";

function ProductsLists2() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getproducts = () => {
    fetch(`${api_url}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  const getcategories = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  };

  const getproductsInCategories = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    getproducts();
    getcategories();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="d-flex justify-content-center mb-3">
          <button
            className="btn btn-dark me-2"
            onClick={() => {
              getproducts();
            }}
          >
            All
          </button>
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => {
                  getproductsInCategories(cat);
                }}
                className="btn btn-dark me-2"
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product2 product={product} showbutton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsLists2;
