import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT=[
  {id: 'p1', price: 6, title:'My first book', description:'The is first book'},
  {id: 'p2', price: 4, title:'My second book', description:'The is second book'},
  {id: 'p3', price: 8, title:'My third book', description:'The is third book'},
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product)=>(
        <ProductItem key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
      </ul>
    </section>
  );
};

export default Products;
