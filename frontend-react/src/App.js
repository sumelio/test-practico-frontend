import React, { Suspense, lazy, Fragment } from 'react';
import * as serviceWorker from "./serviceWorker";

import './sass/main.scss';

const Home = lazy(()=> import('./components/home/Home'));

const App = () => (
            <Suspense fallback={<Fragment />} >
                <Home></Home>
            </Suspense>
    )


serviceWorker.register();

export default App;