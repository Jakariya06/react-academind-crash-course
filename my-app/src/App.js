import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorite from "./pages/Favorite";
import NewMeetups from "./pages/NewMeetups";

function App() {
  return (
  
     <Layout>
       <Switch>
        <Route path="/" exact>
          <AllMeetups />
        </Route>

        <Route path="/new">
          <NewMeetups />
        </Route>

        <Route path="/favorite">
          <Favorite />
        </Route>
      </Switch>
     </Layout>
      
    
  );
}

export default App;
