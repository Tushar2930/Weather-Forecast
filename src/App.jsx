import React from "react";

export default function App() {

    const [city, setCity] = React.useState("");
    function handleChange(event) {
        setCity(event.target.value);
    }
    // var temp, feelLike, ch, wd, ws, Humidity, ihumidity, Pressure, cloudCover, Visibility;
    const [temp, settemp] = React.useState("");
    const [feelLike, setfeelLike] = React.useState("");
    const [ch, setch] = React.useState("");
    const [wd, setwd] = React.useState("");
    const [ws, setws] = React.useState("");
    const [Humidity, setHumidity] = React.useState("");
    const [ihumidity, setihumidity] = React.useState("");
    const [Pressure, setPressure] = React.useState("");
    const [cloudCover, setcloudCover] = React.useState("");
    const [Visibility, setVisibility] = React.useState("");
    function handleClick() {

        var xhrRequest = new XMLHttpRequest();
        xhrRequest.onload = function () {
            var answer = JSON.parse(xhrRequest.response);
            settemp(answer.current.temperature);
            setfeelLike(answer.current.feelslike);
            setch(answer.current.weather_descriptions[0]);
            setwd(answer.current.wind_dir);
            setws(answer.current.wind_speed);
            setHumidity(answer.current.humidity);
            setihumidity(answer.current.humidity);
            setPressure(answer.current.pressure);
            setcloudCover(answer.current.cloudcover);
            setVisibility(answer.current.visibility);
            console.log(temp, feelLike, ch, wd, ws, Humidity, ihumidity, Pressure, cloudCover, Visibility);
        }
        var src = "http://api.weatherstack.com/current?access_key=ff9d547b9e77d7b8ffe6bbf21965262c&query=" + city;
        // console.log(src);
        xhrRequest.open('get', src, true);
        xhrRequest.send();
    }

    return (
        <div className="root">
            <div className="App">
                <nav class="navbar navbar-light bg-cust ">
                    <a class="acolor">WEATHER TODAY</a>
                    <div class="form-inline">
                        <input class="form-control mr-sm-2" type="search" onChange={handleChange} placeholder="Search Location" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" onClick={handleClick} >Search</button>
                    </div>
                </nav>
            </div>
            <div className="cardw">
                <div className="current-weather-card card-module content-module ">
                    <div className="card-header spaced-content">
                        <h1>Current Weather</h1>
                        <p className="sub">9:55 PM</p>
                    </div>

                    <div className="card-content">
                        <div className="current-weather">
                            <div className="current-weather-info">
                                <svg className="icon" data-src="/images/weathericons/33.svg" viewBox="0 0 288 288" width="62" height="62"><path d="M221.96 203.022a106.311 106.311 0 0 1-106.68-106.31 105.34 105.34 0 0 1 19.875-61.661C85.26 42.978 47.299 84.06 43.33 134.424c-3.97 50.363 27.09 96.885 75.125 112.53 48.035 15.645 100.534-3.664 126.986-46.705a106.311 106.311 0 0 1-23.481 2.773Z" stroke="#686763" strokeWidth="9.244" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="bevel"></path></svg>
                                <div className="temp">
                                    <div className="display-temp">{temp}<span className="sub"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="phrase">{ch}</div>
                        </div>
                        <div className="current-weather-extra">
                            <div>
                                RealFeel® {feelLike}

                                <div className="label-tooltip" data-js="prevent-accordion-toggle">
                                    <div className="label clickable ">Hot</div>
                                    <div className="label-tooltip-overlay ">
                                        <div className="label-tooltip-header spaced-content">
                                            <span>RealFeel Guide</span>
                                            <svg className="close-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18">
                                                <g fillRule="evenodd" transform="translate(-1 -1)">
                                                    <rect width="2" height="24" x="9" y="-2" rx="1" transform="rotate(45 10 10)"></rect>
                                                    <rect width="2" height="24" x="9" y="-2" rx="1" transform="rotate(-45 10 10)"></rect>
                                                </g></svg>
                                        </div>
                                        <div className="label-tooltip-content">
                                            <div className="label-tooltip-content__subtitle spaced-content">
                                                <div>Hot</div>
                                                <div className="label-tooltip-content__reference">32° to 37°</div>
                                            </div>
                                            <div className="label-tooltip-content__content">
                                                <h6>Caution advised. Possible danger of dehydration, heat stroke, heat exhaustion and heat cramps if outside for extended periods, and especially while doing strenuous activities.</h6>
                                            </div>
                                        </div>
                                        <a className="label-tooltip-cta" href="/en/realfeel-guide">LEARN MORE <svg className="icon-arrow" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                            <defs><path id="a" d="m8.495.505 5 5v.99l-5 5-.99-.99 3.805-3.806L0 6.7V5.3l11.31-.001-3.805-3.804.99-.99z">
                                            </path></defs><use fill="#000" fillRule="nonzero" transform="translate(2 3)">
                                            </use></svg></a>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>



                    <div className="current-weather-details">
                        <div className="left">
                            <div className="detail-item spaced-content">
                                <div>Wind</div>
                                <div>{wd} {ws} km/h</div>
                            </div>
                            <div className="detail-item spaced-content">
                                <div>Wind Gusts</div>
                                <div>{ws} km/h</div>
                            </div>
                            <div className="detail-item spaced-content">
                                <div>Humidity</div>
                                <div>{Humidity}%</div>
                            </div>
                            <div className="detail-item spaced-content">
                                <div>Indoor Humidity</div>
                                <div>{Humidity}% (Extremely Humid)</div>
                            </div>
                            <div className="detail-item spaced-content">
                                <div>Dew Point</div>
                                <div>24° C</div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="detail-item spaced-content">
                                <div>Pressure</div>
                                <div>↔ {Pressure} mb</div>
                            </div>
                            <div className="detail-item spaced-content">
                                <div>Cloud Cover</div>
                                <div>{cloudCover}%</div>
                            </div>
                            <div className="detail-item spaced-content">
                                <div>Visibility</div>
                                <div>{Visibility} km</div>
                            </div>
                            <div className="detail-item spaced-content">
                                <div>Cloud Ceiling</div>
                                <div>9100 m</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}
