import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Albums from "./Albums";
import Playlists from "./Playlists";
import Search from "./Search";
export default function MusicMenu() {
  return (
    <Tabs
      defaultValue="search"
      className={`flex flex-col w-[60%] items-center  transition-opacity duration-400`}
    >
      <TabsList className="w-3/4">
        <TabsTrigger value="playlists">Playlists</TabsTrigger>
        <TabsTrigger value="albums">Albums</TabsTrigger>
        <TabsTrigger value="search">Search</TabsTrigger>
      </TabsList>
      <TabsContent value="albums">
        <Albums />
      </TabsContent>
      <TabsContent value="playlists">
        <Playlists />
      </TabsContent>
      <TabsContent value="search">
        <Search />
      </TabsContent>
    </Tabs>
  );
}
