import React, { useEffect, useState } from "react";
import adminLayout from "../hoc/adminLayout";

// img
import axios from "axios";

const GetVehicules = () => {
  const [Facture, setFacture] = useState(null);
  async function fetchData() {
    // console.log("aaaaaaa");
    // fetch("http://localhost:8083/getGetVehicules")
    //   .then((data) => data.json())
    //   .then((data) => setFacture(data));
    // console.log(Facture);
    axios
      .get(`http://localhost:8083/getVehicules`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          mode: "no-cors",
          headers: { "Content-Type": "application/json charset=UTF-8" },
          body: "entityJson",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        var str = "^^http://www.w3.org/2001/XMLSchema#integer";
        str = str.replace("^^", "");
        res.data.prixVoiture=
        setFacture(res.data);
      });
  }
  console.log(Facture);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="table-container">
        <div className="row">
          <div className="col">
            <h5 className="pb-2 mb-0">Voiture</h5>
          </div>
          <div className="col text-right">
            <button className="btn btn-default low-height-btn">
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>

        <div className="d-flex text-muted">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>

                <th>Label</th>
                <th>Nom du Voiture</th>
                <th>prix du Voiture</th>
              </tr>
            </thead>
            <tbody>
              {Facture?.map((item) => (
                <tr key={item.des} className="white-space-no-wrap">
                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>{item.label}</td>
                  <td>{item.nomVoiture}</td>
                  <td>{item.prixVoiture.replace("^^http://www.w3.org/2001/XMLSchema#integer", "")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <nav
          className="table-bottom-center-pagination"
          aria-label="Page navigation example "
        >
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default adminLayout(GetVehicules);
