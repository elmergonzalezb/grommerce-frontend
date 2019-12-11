import * as React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ProductCard from '../../components/ProductCard';

import AddProductModal from '../../components/Modals/AddProductModal';
import { debouncedSearch } from '../../Util/Utils';

import gql from 'graphql-tag';
import { ProductStoreContext } from 'src/stores/products';
import { useQuery } from '@apollo/react-hooks';
import { observer } from 'mobx-react';

const BreadcrumbItems = [
  { name: 'Home', link: '/' },
  { name: 'Pages', link: '/pages' },
  { name: 'Product', link: '/product' }
];

const GET_PRODUCTS = gql`
  {
    allProducts {
      nodes {
        id
        name
        quantity
        img: imageUrl
        mrp: marketPrice
        discounted_price: discountedPrice
        description: productDescription
        company: companyByCompanyId {
          name
          email
        }
      }
    }
  }
`;

export const AllProducts: React.FC = observer(() => {
  const [addProductModal, setAddProductModal] = React.useState(false);
  const productStore = React.useContext(ProductStoreContext);
  const { loading, data } = useQuery(GET_PRODUCTS);

  return loading ? (
    <p>Loading....</p>
  ) : (
    <div className="dashboard-wrapper">
      <div className="row">
        <div className="col-12">
          <h1>All Products</h1>
          <nav className="pt-0 breadcrumb-container d-none d-sm-block d-lg-inline-block">
            <Breadcrumb items={BreadcrumbItems} />
          </nav>
          <button
            className="btn btn-primary float-right"
            onClick={() => setAddProductModal(true)}
          >
            Add Product
          </button>
        </div>
        <div className="col-12 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search for Products"
            // onChange={e => onSearch(e.target.value)}
          />
        </div>
        {/* If state is loading, i.e., if the request has gone for searching */}
        {data.allProducts.nodes.map((product: any) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
      <AddProductModal
        isOpen={addProductModal}
        toggle={() => setAddProductModal(!addProductModal)}
      />
    </div>
  );
});
