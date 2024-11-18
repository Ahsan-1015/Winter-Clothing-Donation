import React from 'react';
import { useLoaderData } from 'react-router-dom';

import campaignCard from '../CampaignCard/CampaignCard';

const Campaign = () => {
  const campaigns = useLoaderData();
  console.log(campaigns);
  return (
    <>
      <div className="grid gap-6 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-6">
        {campaigns.map(campaign => (
          <campaignCard key={campaign.id} campaign={campaign}></campaignCard>
        ))}
      </div>
    </>
  );
};

export default Campaign;
