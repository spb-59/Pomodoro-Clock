import { ClockSection, SideBar, MusicSection } from "./MainSections";
import { MusicSectionAuth } from "./MainSections/MusicSection";
import { Skeleton } from "./ui/skeleton";

export default function Homepage({
  token,
  noAuth,
}: {
  token?: string;
  noAuth?: boolean;
}) {
  if (noAuth) {
    return (
      <main className="flex w-full  min-w-[100vw] h-[100vh]  overflow-hidden bg-background p-10 dark">
        <SideBar />
        <ClockSection />
        <MusicSectionAuth />
      </main>
    );
  }
  if (!token) return;

  return (
    <main className="flex w-full  min-w-[100vw] h-[100vh]  overflow-hidden bg-background p-10  dark">
      <SideBar />
      <ClockSection />
      <MusicSection token={token} />
    </main>
  );
}
