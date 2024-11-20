import { useLoaderData } from 'react-router-dom';

import CampaignCard from '../CampaignCard/CampaignCard';

const Campaign = () => {
  const campaigns = useLoaderData();

  return (
    <>
      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-6">
        {campaigns.map(campaign => (
          <CampaignCard key={campaign.id} campaign={campaign}></CampaignCard>
        ))}
      </div>
    </>
  );
};

export default Campaign;
