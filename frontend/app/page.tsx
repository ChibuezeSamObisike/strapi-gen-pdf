import { LastPage } from '@/component/last-page';
import { Page } from '@/component/page';
import { getSingleReport } from '@/lib/http';
import { AboutPage } from '@/modules/about-page';
import { FrontPage } from '@/modules/front-page';
import { ReturnDetailsPage } from '@/modules/return-details-page';

export default async function Home({
  searchParams,
}: {
  searchParams: { documentId: string };
}) {
  const singleReport = await getSingleReport(searchParams?.documentId);

  return (
    <>
      <Page noPadding>
        <FrontPage
          title={singleReport?.data?.title}
          about={singleReport?.data?.about}
        />
      </Page>
      <Page>
        <AboutPage
          about={singleReport?.data?.about}
          articles={singleReport?.data?.articles}
        />
      </Page>
      <Page>
        <ReturnDetailsPage
          topStats={singleReport?.data?.topstats}
          graph={singleReport?.data?.graphs}
          topFeatures={singleReport?.data?.topfeature}
        />
      </Page>
      <Page noPadding>
        <LastPage />
      </Page>
    </>
  );
}
