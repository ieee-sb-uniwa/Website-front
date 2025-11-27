import Image from 'next/image'

export default function TeamCollage({ images = [] }) {
  // Default placeholder image
  const placeholderImage = "/api/placeholder/400/320";
  
  // Ensure images is always an array with at least 8 items and properly formatted
  const safeImages = [];
  
  // Process the images array to ensure proper format
  if (Array.isArray(images)) {
    images.forEach(image => {
      if (typeof image === 'string') {
        // Handle case where image is a string URL
        safeImages.push({ url: image, title: "Team member" });
      } else if (image && typeof image === 'object') {
        // Handle case where image is an object
        safeImages.push({
          url: image.url || placeholderImage,
          title: image.title || "Team member"
        });
      }
    });
  }
  
  // Fill any missing image slots with placeholders
  while (safeImages.length < 8) {
    safeImages.push({ url: placeholderImage, title: "Team member" });
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-11/12 max-w-7xl py-4 md:py-6 lg:py-8">
        <div className="grid grid-cols-10 gap-2 md:gap-3 lg:gap-4" style={{ 
          maxHeight: "480px",
          height: "auto",
        }}>
          {/* Left column - Tall portrait */}
          <div className="col-span-2 h-full">
            <div className="h-5/6 rounded-lg overflow-hidden shadow-md">
              <Image
                src={safeImages[0]?.url || placeholderImage}
                alt={safeImages[0]?.title || ""}
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                unoptimized

              />
            </div>
          </div>
          
          {/* Middle left column - Two stacked images with uneven heights */}
          <div className="col-span-2 flex flex-col gap-2 md:gap-3 lg:gap-4">
            {/* Top image - slightly shorter */}
            <div className="h-2/5 rounded-lg overflow-hidden shadow-md">
              <Image
                src={safeImages[1]?.url || placeholderImage}
                alt={safeImages[1]?.title || ""}
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                unoptimized

              />
            </div>
            {/* Bottom image - slightly taller */}
            <div className="h-3/5 rounded-lg overflow-hidden shadow-md">
              <Image
                src={safeImages[2]?.url || placeholderImage}
                alt={safeImages[2]?.title || ""}
                width={800}
                height={1000}
                className="w-full h-full object-cover"
                unoptimized

              />
            </div>
          </div>
          
          {/* Center column - One centered image */}
          <div className="col-span-3 flex flex-col justify-center items-center gap-2 md:gap-3 lg:gap-4">
            {/* Center image */}
            <div className="h-3/4 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={safeImages[3]?.url || placeholderImage}
                alt={safeImages[3]?.title || ""}
                width={600}
                height={1000}
                className="w-full h-full object-cover"
                unoptimized

              />
            </div>
          </div>
          
          {/* Middle right column - Two stacked images with uneven heights */}
          <div className="col-span-2 flex flex-col gap-2 md:gap-3 lg:gap-4">
            {/* Top image - taller */}
            <div className="h-5/6 rounded-lg overflow-hidden shadow-md">
              <Image
                src={safeImages[4]?.url || placeholderImage}
                alt={safeImages[4]?.title || ""}
                width={600}
                height={1000}
                className="w-full h-full object-cover"
                unoptimized

              />
            </div>
            {/* Bottom image - shorter */}
            <div className="h-4/6 rounded-lg overflow-hidden shadow-md">
              <Image
                src={safeImages[5]?.url || placeholderImage}
                alt={safeImages[5]?.title || ""}
                width={600}
                height={1000}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
          
          {/* Right column - Tall portrait */}
          <div className="col-span-1 h-full">
            <div className="h-5/6 rounded-lg overflow-hidden shadow-md">
              <Image
                src={safeImages[6]?.url || placeholderImage}
                alt={safeImages[6]?.title || ""}
                width={600}
                height={1000}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}