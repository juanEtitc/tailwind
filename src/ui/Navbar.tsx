import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  return (
    <div className="bg-red-500 lg:bg-blue-500  p-2 flex justify-between h-9">
      <img src="/next.svg" alt="" className="h-5" />

      <div>
        <ul>
          <li></li>
        </ul>
      </div>

      <div className="flex">
        <ShoppingCartIcon className="h-5" />
        <UserCircleIcon className="h-5" />
      </div>
    </div>
  );
};
