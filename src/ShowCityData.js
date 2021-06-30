import React from 'react';
import Banner from './Banner';
import "./ShowCityData.css";

const ShowCityData = ({ clickedImg }) => {
    return (
        <div>
            <Banner bannerImg={clickedImg.main_image} />
            <div className="content-container">
                <div className="banner_description"> <p >
                    {clickedImg.descripton}

                </p>
                </div>
                <div className="smal-container">
                    <div>
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
                                {clickedImg.best_things_to_so.map(thing => (
                                    <li>{thing}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    {/* <div>
                        <img scr={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAlK0Mozbqsabup985OSqBnLYUimQpM9MjQ&usqp=CAU`} alt="Image Loading.."> </img>
                    </div> */}
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
        </div>
    );
};

export default ShowCityData;