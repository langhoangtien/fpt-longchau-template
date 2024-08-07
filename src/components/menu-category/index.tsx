import MenuItem from "./menu-item";
import "./style.css";
export default function MenuCategory() {
  return (
    <div className="container md:container hidden md:block omd:relative omd:z-[100] css-1zrptk">
      <div className="d-none relative z-[13] md:flex md:justify-center md:bg-white css-18zbqn2">
        <ul className="relative w-full justify-between md:flex md:items-center">
          <MenuItem />
        </ul>
      </div>
    </div>
  );
}
