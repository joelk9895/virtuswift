import ChatBot from "./components/chatBot";
import MegaMenu from "./components/megamenu";
import Landing from "./screens/landing/landing";

export default function Home() {
  return (
    <>
      <MegaMenu />
      <Landing />
      <ChatBot />
    </>
  );
}
