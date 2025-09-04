import Image from "next/image";

export default function BrandIcon() { 
    return (
        <>
            <Image 
                src="/images/site-logo.svg" 
                alt="Bookkeeprz Logo" 
                width={25} 
                height={25}
            />
        </>
    )
}