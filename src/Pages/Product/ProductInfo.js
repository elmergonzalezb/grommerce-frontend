import React from 'react';

import { products } from '../../Data/products';

const ProductInfo = props => {
  const param = props.match.params.id;
  const product = products.filter(product => product.id == param);
  return (
    <div className="dashboard-wrapper">
      {product.map((p, index) => {
        return (
          <div className="row">
            <div className="col-12">
              <h1>{p.name}</h1>
              <nav
                className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block"
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/" className="active" aria-current="page">
                      <span>Home</span>
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/" className="active" aria-current="page">
                      <span>Products</span>
                    </a>
                  </li>
                  <li className="active breadcrumb-item">
                    <span>{p.name}</span>
                  </li>
                </ol>
              </nav>
              <ul className="separator-tabs ml-0 mb-5 nav nav-tabs">
                <li className="nav-item">
                  <a className="active nav-link text-uppercase">Details</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-uppercase">
                    <span>Orders</span>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active">
                  <div className="row">
                    <div className="mb-4 col-12 col-lg-4">
                      <div className="card mb-4">
                        <div className="position-absolute card-top-buttons">
                          <button className="icon-button btn btn-outline-white">
                            <i className="simple-icon-pencil"></i>
                          </button>
                        </div>
                        <img
                          src={`https://gogo-react.coloredstrategies.com/${p.img}`}
                          alt={p.category}
                          className="card-img-fluid card-img-top"
                        />

                        <div className="card-body">
                          <p className="text-muted text-small mb-2">
                            <span>Description</span>
                          </p>
                          <p className="mb-3">{p.description}</p>
                          <p className="text-muted text-small mb-2">
                            <span>Price</span>
                          </p>
                          <p className="mb-3">${p.stock}</p>
                          <p className="text-muted text-small mb-">
                            <span>Ingredients</span>
                          </p>
                          <div className="mb-3">
                            <p className="d-sm-inline-box mb-1">
                              <span className="badge badge-outline-secondary mb-1 mr-1 badge-pill">
                                Flour
                              </span>
                              <span className="badge badge-outline-secondary mb-1 mr-1 badge-pill">
                                Chocolate
                              </span>
                              <span className="badge badge-outline-secondary mb-1 mr-1 badge-pill">
                                Caster Sugar
                              </span>
                              <span className="badge badge-outline-secondary mb-1 mr-1 badge-pill">
                                Baking Powder
                              </span>
                              <span className="badge badge-outline-secondary mb-1 mr-1 badge-pill">
                                Milk
                              </span>
                              <span className="badge badge-outline-secondary mb-1 mr-1 badge-pill">
                                Eggs
                              </span>
                              <span className="badge badge-outline-secondary mb-1 mr-1 badge-pill">
                                Vegetable Oil
                              </span>
                            </p>
                            <p className="text-muted text-small mb-2">
                              <span>Is Vegan</span>
                            </p>
                            <p>No</p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="mb-4 col-12">
                          <div className="card">
                            <div className="d-flex justify-content-between align-items-center card-body">
                              <div className="mb-0 card-title">
                                Order Status
                              </div>
                              <div className="progress-bar-circle"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-8">
                      <div className="row">
                        <div className="mb-4 col-6">
                          <div className="dashboard-small-chart-analytics card">
                            <div className="card-body">
                              <div>
                                <p className="lead color-theme-1 mb-1 value">
                                  ${p.sales}
                                </p>
                                <p className="mb-0 label text-small">
                                  Total Orders-Mon
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 col-6">
                          <div className="dashboard-small-chart-analytics card">
                            <div className="card-body">
                              <div>
                                <p className="lead color-theme-1 mb-1 value">
                                  $115
                                </p>
                                <p className="mb-0 label text-small">
                                  Pending Orders
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 col-6">
                          <div className="dashboard-small-chart-analytics card">
                            <div className="card-body">
                              <div>
                                <p className="lead color-theme-1 mb-1 value">
                                  $350
                                </p>
                                <p className="mb-0 label text-small">
                                  Total Orders-Mon
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4 col-6">
                          <div className="dashboard-small-chart-analytics card">
                            <div className="card-body">
                              <div>
                                <p className="lead color-theme-1 mb-1 value">
                                  $200
                                </p>
                                <p className="mb-0 label text-small">
                                  Total Orders-Mon
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductInfo;
