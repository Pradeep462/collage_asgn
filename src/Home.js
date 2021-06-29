

import Row from "./Row";
import Banner from "./Banner";
import { cold_places } from "./data";
import { natural_city } from "./data";
import { holy_places } from "./data";
import { heritage_city } from "./data";
import { national_parks } from "./data";
import { beech_city } from "./data";
import { warm_palces } from "./data";


const Home =() => {
  return (
    <div className="App">
      {/* {Nav} */}
      <Banner  />
      <Row title="Natural Beauty Cities"  data={natural_city}/> 
      <Row title="Heritage Cities"  data={heritage_city}/>
      <Row title="Holy Places"  data={holy_places}/> 
      <Row title="Best Places to visit in Summer Holydays" data={cold_places} isLargeRow/>
      <Row title="Best Places to visit in winter Holydays"  data={warm_palces} />
      <Row title="Beaches"  data={beech_city}/>
      
     
      <Row title="National Park"  data={national_parks} />
             

    </div>
  );
}

export default Home;
