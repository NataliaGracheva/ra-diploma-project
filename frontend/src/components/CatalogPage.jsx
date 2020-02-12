import React from 'react';
import Catalog from './Catalog';
import Search from './Search';

export default function CatalogPage() {
    return (
        <section className='container catalog'>
            <h2 className='text-center'>Каталог</h2>
            <Search />
            <Catalog />
        </section>
      
    );
}
