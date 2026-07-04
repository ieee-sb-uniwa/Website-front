import { cn } from "@/lib/utils";

const TechnologyTag = ({
                           technology,
                           themeClass,
                           className = "",
                       }) => {
    return (
        <span
            className={cn(
                `inline-flex rounded-20 items-center px-3 py-1 text-xs font-semibold ring-1 bg-${themeClass} text-white ring-white/50`,
                className
            )}
        >
      {technology}
    </span>
    );
};

export default TechnologyTag;