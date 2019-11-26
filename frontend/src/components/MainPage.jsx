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
                        <Catalog />
                    </div>
                </div>
            </main>
        </Fragment>
    );
}

