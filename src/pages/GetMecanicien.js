import React, { useEffect, useState } from "react";
import adminLayout from "../hoc/adminLayout";

// img
import axios from "axios";

const GetMecanicien = () => {
  const [Facture, setFacture] = useState(null);
  async function fetchData() {
    // console.log("aaaaaaa");
    // fetch("http://localhost:8083/getGetMecanicien")
    //   .then((data) => data.json())
    //   .then((data) => setFacture(data));
    // console.log(Facture);
    axios
      .get(`http://localhost:8083/getMecanicien`, {
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
            <h5 className="pb-2 mb-0">Casse Auto</h5>
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
                <th>nomMecanicien</th>
              </tr>
            </thead>
            <tbody>
              {Facture?.map((item) => (
                <tr key={item.des} className="white-space-no-wrap">
                  <td>
                    <input type="checkbox" />
                  </td>

                  <td>{item.label}</td>
                  <td>{item.nomMecanicien}</td>

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
export default adminLayout(GetMecanicien);
