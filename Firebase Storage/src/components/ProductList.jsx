import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { collection, doc, deleteDoc, getDocs } from "firebase/firestore";
import { db } from "../service/firebase";

const ProductList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sorting, setSort] = useState(null);
  const [ascdesc, setOrder] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Fetch data from Firestore
  async function DataFetch() {
    const datafire = await getDocs(collection(db, "Product"));
    let userdata = datafire.docs.map((el) => ({
      ...el.data(),
      id: el.id,
    }));

    // Apply search filter
    if (search) {
      userdata = userdata.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply sorting
    if (sorting) {
      userdata = userdata.filter((item) => item.category === sorting);
    }

    // Apply ordering
    if (ascdesc) {
      userdata.sort((a, b) => {
        if (ascdesc === "asc") return a.price - b.price;
        else return b.price - a.price;
      });
    }

    setData(userdata);
  }

  // Delete product function
  async function deleteProduct(id) {
    try {
      await deleteDoc(doc(db, "Product", id));
      alert("Product deleted successfully");
      DataFetch(); // refresh data after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  }

  useEffect(() => {
    DataFetch();
  }, [page, sorting, ascdesc, search]);

  // Logout function
  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <div>
      <button className="btn btn-dark m-auto d-block mt-2" onClick={logout}>
        Logout
      </button>

      <div className="d-flex align-items-center justify-content-around mt-2">
        <Form.Select
          aria-label="Default select example"
          className="w-25 mt-2"
          onChange={(e) => setSort(e.target.value)}
        >
          <option>Sorting By</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
        </Form.Select>
        <input
          type="text"
          placeholder="Search by title"
          className="pe-2 ps-2"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-dark" onClick={() => setOrder("asc")}>
          Low to High
        </button>
        <button className="btn btn-dark" onClick={() => setOrder("desc")}>
          High to Low
        </button>
      </div>

      <div className="d-flex flex-wrap justify-content-around">
        {data.length > 0 ? (
          data.map((e, index) => (
            <Card
              style={{ width: "18rem" }}
              className="mb-2 mt-4 text-center"
              key={e.id}
            >
              {index + 1}
              <Link
                style={{ textDecoration: "none" }}
                to={`/productdetail/${e.id}`}
              >
                <Card.Img
                  variant="top"
                  src={e.image}
                  height={250}
                  width={250}
                  className="object-fit-contain"
                />
              </Link>
              <Card.Body>
                <Card.Title>{e.title}</Card.Title>
                <Card.Title>{e.category}</Card.Title>
                <Card.Title>${e.price}</Card.Title>
                <Card.Text>{e.description.substring(0, 100)}</Card.Text>
                <Button variant="primary me-3">
                  <Link to={`/editProduct/${e.id}`} style={{ color: "white" }}>
                    Edit
                  </Link>
                </Button>
                <Button variant="danger" onClick={() => deleteProduct(e.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))
        ) : (
          <h1>No Products available here...</h1>
        )}
      </div>

      <div className="d-flex align-items-center justify-content-center">
        <button
          className="btn btn-secondary"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        {page}
        <button
          className="btn btn-secondary"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
