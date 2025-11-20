import { GreetingPicture } from "./MainSectionContent/GreetingPicture";
import "./GreetingSectionStyles.css";

export const GreetingSection = () => {
  return (
    <div className="greeting-section-container">
      <h1 className="crimson-text-regular browse-text">Browse everything.</h1>
      <GreetingPicture />
    </div>
  );
};
