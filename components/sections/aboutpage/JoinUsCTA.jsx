import React from 'react';
import { useTranslations } from 'next-intl';
import Button from '@components/ui/Button';
import { Link } from '@i18n/navigation';
const JoinUsCTA = () => {
    const t = useTranslations("AboutPage.JoinUsCta"); 
    const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL;
    
    return (
        <section 
            className="mx-auto my-8 w-full max-w-7xl p-4 text-center relative z-20 lg:rounded-3xl overflow-hidden"
            style={{ 
                backgroundImage: `url(${imagesUrl}/wallpapers/git-workshop-team-photo.png)`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' 
            }}
        >
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div className="mx-auto w-full max-w-7xl p-4 relative text-center z-20">
                <header className="my-8 md:my-8">
                    <h3 className="text-shadow h4 max-md:h5 text-p4 my-10">
                        {t('heading')}
                    </h3>
                    <p className="text-shadow my-10 h6 max-md:body-2 text-p5">
                        {t('paragraph')}
                    </p>
                </header>
                <Link href="/join">    
                    <Button 
                        icon='/assets/icons/people-add.svg'
                        iconHeight={38}
                        iconWidth={38}
                        textClassName='base-bold text-p1'
                    >
                        {t('ctaButtonText')}
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default JoinUsCTA;