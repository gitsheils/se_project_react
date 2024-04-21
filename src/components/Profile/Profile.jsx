import "./Profile.css";
//import { defaultClothingItems } from "../../utils/constants.js";
import SideBar from "../SideBar/SideBar.jsx";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";

function Profile(props) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        handleAddClick={props.handleAddClick}
        clothingItems={props.clothingItems}
        handleCardClick={props.handleCardClick}
      />
    </section>
  );
}

export default Profile;
