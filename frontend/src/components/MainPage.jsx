import React, { Fragment } from 'react';
import Bestsellers from './Bestsellers';
import Catalog from './Catalog';

export default function MainPage() {
    return (
        <Fragment>
            <main className="container">
                <div className="row">
                    <div className="col">
                        <Bestsellers />
                        <section className='container catalog'>
                            <h2 className='text-center'>Каталог</h2>
                            <Catalog />
                        </section>
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

