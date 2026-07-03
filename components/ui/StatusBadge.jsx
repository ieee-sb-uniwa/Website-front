import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaSkull } from "react-icons/fa";

const StatusBadge = ({ status, className = "" }) => {
    if (!status) return null;

    const isActive = status === "Active";

    return (
        <span
            className={`inline-flex rounded-20 items-center px-3 py-1 text-xs font-semibold ring-1 ${
                isActive
                    ? "bg-green-800 text-white ring-green-500"
                    : "bg-gray-800 text-white ring-gray-500"
            } ${className}`}
        >
      {isActive ? (
          <>
              In Progress
              <AiOutlineLoading3Quarters className="ml-2 h-3.5 w-3.5 animate-spin" />
          </>
      ) : (
          <>
              Inactive
              <FaSkull className="ml-2 h-3.5 w-3.5 animate-pulse" />
          </>
      )}
    </span>
    );
};

export default StatusBadge;