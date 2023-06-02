import {Header, Footer} from './components'; 
import { Allroutes } from './routes/Allroutes';
 

export const App = () => {
  return (
    <div>
      <Header />
        <Allroutes />
      <Footer />
    </div>
  );
}