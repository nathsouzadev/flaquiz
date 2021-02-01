import NextLink from 'next/link';

export default function Link({ children, href, ...props}){
    return(
        <NextLink href={href} passHref>
            <a>
                {children}
            </a>
        </NextLink>
    );
}
