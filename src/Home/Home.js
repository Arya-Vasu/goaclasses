import "./Home.css";
import { FloatingBanners } from "./FloatingBanners/FloatingBanners";
import { Teachers } from "./TeachersDetails/Teachers";

export function Home() {
  return (
    <div>
      <FloatingBanners />
      <Teachers />
    </div>
  );
}

