import { Layout } from "@/components/layout";
import { Banner } from "@/components/shared/banner";
import { ListCard } from "@/components/home/listCard";
import { InputText } from "@/components/shared/inputText";
import { useStatistics } from "@/utils/api-service/transform-url";
import { useState } from "react";
import { ChartHome } from "@/components/home/chartHome";

export default function Home() {
  const { isLoading, data } = useStatistics();
  const [search, setSearch] = useState<string>("");
  const filterData = data?.list.filter((item) => {
    if (search == "") {
      return item;
    } else {
      return item.original_url.toLocaleLowerCase().includes(search);
    }
  });
  return (
    <Layout>
      <div className="container mx-auto">
        <Banner />
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <ChartHome items={data?.statistics} />
        )}
        <div className="flex justify-between items-center mb-5">
          <div>
            <h2 className="m-0">List Your URLs</h2>
            <div className="flex items-center gap-10">
            <h3>Total URL - {data?.list.length}</h3>
            <h3>Found In Search - {filterData?.length}</h3>
            </div>
          </div>
          <div className="w-1/4">
            <InputText
              value={search}
              onchange={(e) => setSearch(e.target.value)}
              className="bg-base border border-secondary"
              placeholder="Search URL"
            />
          </div>
        </div>
        <div className="grid gap-5">
          {filterData?.map((item, i) => (
            <ListCard
              key={i}
              original={item.original_url}
              short={item.short_url}
              clicked={item.count}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
