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

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

import { products } from '../../Data/products';
import { routes } from '../../config/routes';
import { HeaderStoreContext } from 'src/stores/header';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const Dashboard: React.FC = observer(() => {
  const headerStore = React.useContext(HeaderStoreContext);

  return (
    <div className="dashboard-wrapper">
      <Row>
        <Colxx lg="12" xl="6">
          <div className="icon-cards-row">
            <ReactSiema
              perPage={{
                0: 1,
                320: 2,
                576: 3,
                1800: 4
              }}
              controls={false}
              loop={false}
            ></ReactSiema>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sales</h5>
              <ResponsiveContainer width="99%" height={280} id="sales-chart">
                <BarChart
                  data={data}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
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
                    <div className="d-flex mb-3" key={index}>
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
