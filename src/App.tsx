//core
import { Suspense } from 'react';
import { PublicRoutes } from 'routes';

//components
import { MainNavigation } from 'components/MainNavigation/MainNavigation';

const App:React.FC=()=> {
  return(<>
    <MainNavigation/>
      <Suspense fallback={'Loading...'}>
        <PublicRoutes/>
      </Suspense>
</>)
}

export default App;
