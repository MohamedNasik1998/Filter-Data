import "./App.css";
import { data } from "./data.js";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="container mt-5">
        <h4 className="text-primary">Filter Table Data</h4>

        <form className="col-md-6">
          <input
            type="text" className="form-control mt-3 mb-3"
            placeholder="Search Text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <table className="table table-bordered mt-3 table-striped">
          <thead>
            <tr>
              <th>S.No</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search === ""
                  ? item
                  : item.first_name
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                      item.last_name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      item.email.toLowerCase().includes(search.toLowerCase()) ||
                      item.phone_number
                        .toLowerCase()
                        .includes(search.toLowerCase());
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone_number}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
 
  
}

export default App;
