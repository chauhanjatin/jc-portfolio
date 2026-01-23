import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Menu({ open, setOpen }) {
  return (
    <button
      className="bg-[--primary-color] flex items-center justify-center cursor-pointer rounded-[80px] py-[10px] px-[16px] fixed sm:right-[50px] sm:top-[50px] top-[20px] right-[20px] z-[999]"
      onClick={() => setOpen(!open)}
    >
      <div className="relative flex items-center justify-center">
        {open ? (
          <FontAwesomeIcon
            icon={faXmark}
            className="text-[18px] transition-all duration-300"
          />
        ) : (
          <p className="font-medium text-[16px] transition-all duration-300">
            Menu
          </p>
        )}
      </div>
    </button>
  );
}
