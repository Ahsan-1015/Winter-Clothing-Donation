import { NavLink, useLoaderData } from 'react-router-dom';

import FeedBack from '../FeedBack/FeedBack';
// import BannerSlider from '../BannerSlider/BannerSlider';
import BannerSlide from '../BannerSlide/BannerSlide';
import campaignCard from '../CampaignCard/CampaignCard';
// import Banner from '../Banner/Banner';

const Home = () => {
  const campaigns = useLoaderData();

  const { campaignsData, feedBackData } = campaigns;

  return (
    <div className="">
      {/* <Banner></Banner> */}
      {/* <BannerSlider></BannerSlider> */}
      <BannerSlide></BannerSlide>
      <div className="mt-10 grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {campaignsData.slice(0, 6).map(campaign => (
          <campaignCard campaign={campaign}></campaignCard>
        ))}
      </div>
      <button className="mx-auto block btn btn-primary mt-4">
        <NavLink to="/campaigns">Show more</NavLink>
      </button>

      <FeedBack feedBackData={feedBackData}></FeedBack>
    </div>
  );
};

export default Home;
