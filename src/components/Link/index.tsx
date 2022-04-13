import React, { ReactNode } from 'react'
import NextLink from 'next/link'

interface linkProps {
  href: string,
  children: ReactNode;
}

export default function Link({href, children}: linkProps){
  return (
    <NextLink href={href} passHref>
       <a>
         {children}
       </a>
    </NextLink>
  )
}