import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Banner from './Banner';
import "./ShowCityData.css";
import { findCity } from './data';

const ShowCityData = () => {
    const [clickedImg,setClickedImg] = useState({});
     let params = useParams();
    useEffect(() => {
        //console.log(findCity(params.id))
       setClickedImg(findCity(params.id));
    }, [])
    return (
        <>
      {!clickedImg.main_image ? <div>Not get Data</div>:<div className="show_city_data">
        <Banner bannerImg={clickedImg.main_image} />
        <div className="content-container">
            <div className="banner_description"> <p >
                {clickedImg.descripton}

            </p>
            </div>

            <div className="banner_description">
                <p >
                    Major tourist Attractions
                </p>
                <ol className=" banner_description_child ">
                    {clickedImg.major_tourist_attractions.map(place => (
                        <li>{place}</li>
                    ))}
                </ol>
            </div>
            <div className="banner_description">
                <p >  Best things to so  </p>
                <ol className=" banner_description_child ">
                    {clickedImg.best_things_to_do.map(thing => (
                        <li>{thing}</li>
                    ))}
                </ol>
            </div>


            <div className="banner_description">
                <span>Best time to visit : </span><span className=" banner_description_child ">{clickedImg.best_time_to_visit}</span>
            </div>
            <div className="banner_description">
                <span> How to reach : </span><span className=" banner_description_child "> {clickedImg.how_to_reach}</span>
            </div>
            <div className="banner_description">
                <p >  Places to stay   </p>
                <ol className=" banner_description_child ">
                    {clickedImg.places_to_stay.map(stay_pace => (
                        <li>{stay_pace}</li>
                    ))}
                </ol>
            </div>
            <div className="banner_description">
                <p >  Famous food  </p>
                <ol className=" banner_description_child ">
                    {clickedImg.famous_food.map(food => (
                        <li>{food}</li>
                    ))}
                </ol>
            </div>
            <div className="banner_description">
                <p > places_to_eat  </p>
                <ol className=" banner_description_child ">
                    {clickedImg.places_to_eat.map(pl => (
                        <li>{pl}</li>
                    ))}
                </ol>

            </div>
            <div className="banner_description ">
                <span >  Tips to remember :   </span ><span className=" banner_description_child ">{clickedImg.tips_to_remember}</span>
            </div>
        </div>
</div> } 
</> 
)}
export default ShowCityData;
