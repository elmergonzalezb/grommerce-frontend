import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Card, CardBody, Badge } from 'reactstrap';
import { Colxx } from '../../components/CustomBootstrap';
import ReactSiema from '../../components/ReactSiema/ReactSiemaCarousel';
import { Link } from 'react-router-dom';
import { LineShadow } from '../../components/Charts';
import { lineChartConfig } from '../../config/chartConfig';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { products } from '../../Data/products';
import { routes } from '../../config/routes';
import { HeaderStoreContext } from 'src/stores/header';

const Dashboard: React.FC = observer(() => {
  const headerStore = React.useContext(HeaderStoreContext);
  return (
    <div className="dashboard-wrapper">
      <Row>
        <Colxx lg="12" xl="6">
          <div className="icon-cards-row">
            {/* <ReactSiema
              perPage={{
                0: 1,
                320: 2,
                576: 3,
                1800: 4
              }}
              controls={false}
              loop={false}
            ></ReactSiema> */}
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sales</h5>
              <div className="dashboard-line-chart">
                {/* <LineShadow {...lineChartConfig} /> */}
              </div>
            </div>
          </div>
        </Colxx>
        <Colxx lg="12" xl="6">
          <div className="card mt-lg-0 mt-4">
            <div className="card-body">
              <h5 className="card-title">Recent Orders</h5>
              <div className="scroll dashboard-list-with-thumbs">
                {products.map((product, index) => {
                  return (
                    <div className="d-flex mb-3">
                      <Link
                        className="position-relative"
                        to={routes.productInfo.replace(':id', product.id)}
                      >
                        <img
                          src={`https://gogo-react.coloredstrategies.com/${product.img}`}
                          alt={product.name}
                          className="list-thumbnail"
                        />
                        <Badge
                          pill
                          className="position-absolute badge-top-right"
                        >
                          {product.status}
                        </Badge>
                      </Link>
                      <div className="pl-3 pr-2 pt-2 pb-2">
                        <Link
                          to={routes.productInfo.replace(':id', product.id)}
                        >
                          <p className="list-item-heading">{product.name}</p>
                          <div className="pr-4">
                            <p className="text-muted text-small">
                              {product.description}
                            </p>
                          </div>
                          <div className="text-primary text-small font-weight-medium d-none d-sm-block">
                            {product.createDate}
                          </div>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Colxx>
      </Row>
    </div>
  );
});

export default Dashboard;
