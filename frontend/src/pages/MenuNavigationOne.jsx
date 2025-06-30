import { useParams } from "react-router-dom";
import { menuOneItems } from "../data/navigationData";

export default function MenuNavigationOnePage() {
  const { section } = useParams();

  const label = menuOneItems.find(
    (item) => item.toLowerCase().replace(/[^a-z0-9]/g, "-") === section
  );

  return (
    <div className="max-w-4xl mx-auto text-center w-full">
      <h2 className="text-2xl font-semibold">
        Menu Navigation One - {label || section}
      </h2>
      <p className="mt-2 text-gray-600">
        This is the {label || section} section of Menu Navigation One.
      </p>
    </div>
  );
}
