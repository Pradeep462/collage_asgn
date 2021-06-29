

import Row from "./Row";
import Banner from "./Banner";
import { cold_places } from "./data";
import { natural_city } from "./data";
import { holy_places } from "./data";
import { heritage_city } from "./data";
import { national_parks } from "./data";
import { beech_city } from "./data";
import { warm_palces } from "./data";


const Home =({clickedImg,  setClickedImg}) => {
  return (
    <div className="App">
      {/* {Nav} */}
      <Banner  />
      <Row title="Natural Beauty Cities"  data={natural_city} clickedImg={clickedImg} setClickedImg={setClickedImg}/> 
      <Row title="Heritage Cities"  data={heritage_city} clickedImg={clickedImg} setClickedImg={setClickedImg}/>
      <Row title="Holy Places"  data={holy_places} clickedImg={clickedImg} setClickedImg={setClickedImg}/> 
      <Row title="Best Places to visit in Summer Holydays" data={cold_places} clickedImg={clickedImg} setClickedImg={setClickedImg}/>
      <Row title="Best Places to visit in winter Holydays"  data={warm_palces} clickedImg={clickedImg} setClickedImg={setClickedImg}/>
      <Row title="Beaches"  data={beech_city} clickedImg={clickedImg} setClickedImg={setClickedImg}/>
      
     
      <Row title="National Park"  data={national_parks} clickedImg={clickedImg} setClickedImg={setClickedImg}/>
             

    </div>
  );
}

export default Home;
