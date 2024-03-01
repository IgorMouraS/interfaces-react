import React from 'react';
import data_fruit from '../data/data-fruit';
import FilterableProductTable from '../components/Fruit/FilterableProductTable';

function Fruit() {
  return <FilterableProductTable products={data_fruit} />;
}

export default Fruit;