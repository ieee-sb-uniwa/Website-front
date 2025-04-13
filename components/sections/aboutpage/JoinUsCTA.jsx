import React from 'react';
import { useTranslations } from 'next-intl';
import Button from '@components/ui/Button';
import { Link } from '@i18n/navigation';

const JoinUsCTA = () => {
    const t = useTranslations("JoinUsCta"); 
    const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL;
    
    return (
        <section 
            className="mx-auto my-16 w-full max-w-7xl p-4 text-center relative z-20 rounded-3xl overflow-hidden"
            style={{ 
                backgroundImage: `url(${imagesUrl}/wallpapers/IEEEXTREME_18.0.jpg)`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' 
            }}
        >
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="mx-auto w-full max-w-7xl px-4 relative py-4 text-center md:py-10 z-20">
                <header className="my-14 md:my-16">
                    <h3 className="h3 max-md:h5 text-p4 my-10">
                        {t('heading')}
                    </h3>
                    <p className="my-10 h6 max-lg:body-2 text-p5">
                        {t('paragraph')}
                    </p>
                </header>
                <Link href="/join">    
                    <Button 
                        icon='/assets/icons/people-add.svg'
                        iconHeight={38}
                        iconWidth={38}
                        className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
                    >
                        {t('ctaButtonText')}
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default JoinUsCTA;