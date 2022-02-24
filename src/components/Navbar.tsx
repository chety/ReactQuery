import React from 'react';

interface INavbarProps {
    setPage: (page: string) => void;
    pageType: string;
}
export default function Navbar({setPage,pageType,} : INavbarProps) {
  return (
   <nav>
       <button className={pageType === 'people' ? 'active' : undefined} onClick={() => setPage('people')}>People</button>
       <button className={pageType === 'planets' ? 'active' : undefined} onClick={() => setPage('planets')}>Planets</button>
   </nav>
  )
}
