import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import '../../styles/FilterableProductTable.css'

function FilterableProductTable({ products }) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div className='filterable-produc-table'>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
}

export default FilterableProductTable;