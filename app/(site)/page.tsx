import Header from "@/components/Header";
import ListItem from "@/components/ListItems";

export default function Home() {
  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white font-semibold text-3xl">Welcome back</h1>
          <div className="grid gird-col-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem image="/images/liked.png" name="liked" href="ref" />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-semibold">Newest release</h1>
        </div>
        <div className="">list of Songs!</div>
      </div>
    </div>
  );
}
