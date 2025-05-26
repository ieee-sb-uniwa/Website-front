import React from 'react';
import Button from '@components/ui/Button';
import { Link } from '@i18n/navigation';

const ReusableCTA = ({ 
    backgroundImage, 
    heading, 
    paragraph, 
    buttonText, 
    buttonLink = "/join",
    buttonIcon = '/assets/icons/people-add.svg',
    buttonIconWidth = 38,
    buttonIconHeight = 38,
    overlayOpacity = 60,
    className = ""
}) => {
    const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL;
    
    // Construct full image URL if backgroundImage doesn't start with http
    const fullImageUrl = backgroundImage?.startsWith('http') 
        ? backgroundImage 
        : `${imagesUrl}/${backgroundImage}`;
    
    return (
        <section 
            className={`mx-auto my-8 w-full max-w-7xl p-4 text-center relative z-20 lg:rounded-3xl overflow-hidden ${className}`}
            style={{ 
                backgroundImage: `url(${fullImageUrl})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' 
            }}
        >
            <div className={`absolute inset-0 bg-black/${overlayOpacity} z-10`}></div>
            <div className="mx-auto w-full max-w-7xl p-4 relative text-center z-20">
                <header className="my-8 md:my-8">
                    <h3 className="text-shadow h4 max-md:h5 text-p4 my-10">
                        {heading}
                    </h3>
                    <p className="text-shadow my-10 h6 max-md:body-2 text-p5">
                        {paragraph}
                    </p>
                </header>
                <Link href={buttonLink}>    
                    <Button 
                        icon={buttonIcon}
                        iconHeight={buttonIconHeight}
                        iconWidth={buttonIconWidth}
                        textClassName='base-bold text-p1'
                    >
                        {buttonText}
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default ReusableCTA;