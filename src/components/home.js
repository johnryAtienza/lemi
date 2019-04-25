import React from 'react';
import logo from '../assets/images/logo.svg';
import logoSmall from '../assets/images/logosmall.svg';
import appIphone from '../assets/images/app-store.png';
import appAndroid from '../assets/images/google-play-live.svg';
import bannerPhone from '../assets/images/hero-device.png';
import recommendation from '../assets/images/recommendation.svg';

class Home extends React.Component {
    componentDidMount() {
        $(document).scroll(this.onScrolling)
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: false
                }
            }
        })
    }

    onScrolling() {
        if ($(this).scrollTop() == 0) {
            $(".logo").attr("src", logo);
            $("header").removeClass("scrolled");
        } else if ($(this).scrollTop() > 10){
            $(".logo").attr("src", logoSmall);
            $("header").addClass("scrolled");
        }
        
    }
    render() {
        return (
            <div className="body-container">
                {/* header section */}
                <header>
                    <div>
                        <img src={logo} className="logo" alt="Lemi Logo"/>
                    </div>
                </header>
                {/* Body section */}
                <div className="body-section">
                    {/* banner section */}
                    <section className="banner-section">
                        <div className="container">
                            <div className="content section-splitter">
                                <h1>Inspired &nbsp;Trip Planning</h1>
                                <p>Lemi is a travel platform designed to save, map, and share recommendations anywhere in the world.</p>

                                <a className="appI" href="https://lemi.travel/app/ios"><img src={appIphone} width="144" height="48" /></a>
                                <a className="appA" href="https://lemi.travel/app/android"><img src={appAndroid} width="168" height="48" /></a>

                            </div>
                            <div className="banner-phone-media section-splitter">
                                <img src={bannerPhone} />
                                <div className="phone-shadow"></div>
                            </div>
                        </div>
                        <div className="banner-divider">
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1920 120">
                                <path fillRule="evenodd" d="M0,0 C320,60 640,90 960,90 C1280,90 1600,60 1920,0 L1920,120 L0,120 L0,0 Z"></path>
                            </svg>
                        </div>
                    </section>

                    {/* media section */}
                    <section className="media-section">
                        <div className="container">
                            <div className="play-video section-splitter">
                                <video id="about-video" width="400" muted="" autoPlay>
                                    <source src="https://app.lemi.travel/video/lemi-inspired.mp4" type="video/mp4" />>
			                    </video>
                                {/* <div>
                                    <a className="video-overlay" id="video-button">
                                        <img src="images/play70.svg" />>
                                    </a>
                                </div> */}
                            </div>
                            <div className="content media-content section-splitter">
                                <h1>Discover. Plan. Go.</h1>
                                <p>Lemi organizes recommendations into beautiful lists, and instantly maps them out for you.</p>

                                <a href="#" className="btn">Play Video</a>

                            </div>
                        </div>
                    </section>
                    {/* about section */}
                    <section className="about-section">
                        <div className="container content">
                            <h1 className="center">Why people use Lemi</h1>
                            <div className="map-center-sec">
                                <div className="about-content section-splitter">
                                    <h3 className="no-margin">Recommendations from your friends, all over the world</h3>
                                    <p className="no-width no-padding no-margin">View all posts from the Lemi community in one map. Filter to know what people you trust are saying, and what's recommended where you're going.</p>
                                </div>
                                <div className="section-splitter">
                                    <div className="map-sec-parallax">
                                        <img src="https://app.lemi.travel/images/back-map.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* never lose */}
                    <section className="never-lose-section">
                        <div className="container content">
                            <div className="map-center-sec">
                                <div className="section-splitter">
                                    <img src={recommendation} alt="Lemi stores contact details" />
                                </div>
                                <div className="section-splitter">
                                    <h3 className="no-margin">Never lose a recommendation</h3>
                                    <p className="no-width no-padding no-margin">Lemi automatically stores contact details and relevant information of places you add to your lists.</p>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </section>


                    <section className="organize-section">
                        <div className="carousel-container container">
                            <div className="section-splitter">
                                <div className="col-lg-6 detail-col tighten">
                                    <h3 id="organize">Organize ideas into beautiful&nbsp;lists</h3>
                                    <p>Create unlimited lists to collect wishlists, memories, and recommendations in!</p>
                                </div>
                                <div className="col-lg-6"></div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="owl-carousel section-splitter">
                                <div className="item">
                                    <a href="https://lemi.travel/lemi/party-in-thonglor"><img src="https://app.lemi.travel/images/ideas-1.png" alt="" /></a>
                                    <a href="https://lemi.travel/lemi/party-in-thonglor">Party in Thonglor</a>
                                    <p>Bangkok</p>
                                </div>
                                <div className="item">
                                    <a href="https://lemi.travel/lemi/english-mornings"><img src="https://app.lemi.travel/images/ideas-2.png" alt="" /></a>
                                    <a href="https://lemi.travel/lemi/english-mornings">English Mornings</a>
                                    <p>London</p>
                                </div>
                                <div className="item">
                                    <a href="https://lemi.travel/elzouille/delicious-dai-pai-dongs"><img src="https://app.lemi.travel/images/ideas-3.png" alt="" /></a>
                                    <a href="https://lemi.travel/elzouille/delicious-dai-pai-dongs">Delicious Dai Pai Dongs</a>
                                    <p>Hong Kong</p>
                                </div>
                                <div className="item">
                                    <a href="https://lemi.travel/mela/welcome-to-westeros"><img src="https://app.lemi.travel/images/ideas-4.png" alt="" /></a>
                                    <a href="https://lemi.travel/mela/welcome-to-westeros">Welcome to Westeros</a>
                                    <p>Global</p>
                                </div>
                                <div className="item">
                                    <a href="https://lemi.travel/lemi/seoul-street-food"><img src="https://app.lemi.travel/images/ideas-5.png" alt="" /></a>
                                    <a href="https://lemi.travel/lemi/seoul-street-food">Seoul (Street) Food</a>
                                    <p>Seoul</p>
                                </div>
                                <div className="item">
                                    <a href="https://lemi.travel/andreadelgado/musings-of-a-manila-munchie"><img src="https://app.lemi.travel/images/ideas-6.png" alt="" /></a>
                                    <a href="https://lemi.travel/andreadelgado/musings-of-a-manila-munchie">Musings of a Manila Munchie</a>
                                    <p>Manila</p>
                                </div>
                                <div className="item">
                                    <a href="https://lemi.travel/jica/hai-tokyo-to"><img src="https://app.lemi.travel/images/ideas-7.png" alt="" /></a>
                                    <a href="https://lemi.travel/jica/hai-tokyo-to">Hai, Tokyo-to!</a>
                                    <p>Japan</p>
                                </div>
                            </div>
                        </div>


                            

                    </section>

                </div>
                
            </div>
        );
    }
}

export default Home;