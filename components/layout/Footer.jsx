import Image from "next/image"; // Import Next.js Image component
import { socials } from "../../constants/socials.js"; // Import your socials data

export const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70 text-p4">© 2024 IEEE UNIWA SB | All Rights Reserved</p>
          </div>
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon" target="_blank" rel="noopener noreferrer"> {/* Open links in a new tab */}
                  <Image
                    src={icon}
                    alt={title}
                    width={30} // Set appropriate width
                    height={30} // Set appropriate height
                    className="size-2/3 object-contain" // Maintain your existing class
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
