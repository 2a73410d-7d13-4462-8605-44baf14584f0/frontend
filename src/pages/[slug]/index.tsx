import { Charts } from "@/components/shared/chart";
import { Layout } from "@/components/layout";
import { url } from "@/utils/api-service/api-config";
import { useGetDetailShort } from "@/utils/api-service/transform-url";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoArrowBack } from "react-icons/io5";
import { ChartDetail } from "@/components/detail/chartDetail";

const Detail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { isLoading, data } = useGetDetailShort({ short: `${slug}` })
  return (
    <Layout>
      <div className="container mx-auto">
        <Link href="/" className="flex w-1/6 items-center gap-5">
          <span className="text-2xl">
            <IoArrowBack />
          </span>
          Back
        </Link>
        <div className="min-h-[30vh] flex items-center justify-center">
          <div className="grid grid-cols-2 gap-5 w-4/6">
            <div className="w-full flex gap-4">
              <div className="bg-secondary p-5 flex w-full justify-between items-center rounded-lg">
                <p>
                  {data?.originalUrl}
                </p>
              </div>
            </div>
            <div className="w-full flex gap-4 items-stretch">
              <div className="flex items-center">To</div>
              <div className="bg-secondary p-5 flex w-full justify-between items-center rounded-lg">
                <p>
                  {url}url/{slug}
                </p>
                <Link href={`${url}url/${slug}`} target="__blank" className="px-6 py-3  rounded-md bg-success">Visit</Link>
              </div>
            </div>
          </div>
        </div>
        {isLoading ? 'Loading' : <ChartDetail items={data?.statistics} />}
      </div>
    </Layout>
  );
};

export default Detail;
