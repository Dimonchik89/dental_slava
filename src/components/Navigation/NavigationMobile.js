"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { navLinks } from './NavigationList';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationMobile = ({handleOpen, open}) => {
    const pathname = usePathname()


    const list = () => (
        <Box
            role="presentation"
            onClick={handleOpen}
            onKeyDown={handleOpen}
            className=""
        >
          <ul className='flex flex-col items-center space-y-5 w-[250px] py-10'>
            {
                navLinks.map(({link, label, Icon}) => (
                  <div key={label} className='flex w-32'>
                    <Icon style={{color: pathname === link ? "#F0DE36" : "#d3d3d3"}}/>
                    <li className={`${pathname === link ? "text-yellow" : "text-white"} font-semibold text-base hover:text-yellow ease-in duration-300 flex-auto text-center`}>
                        <Link href={link}>{label}</Link>
                    </li>
                  </div>
                ))
            }
            </ul>
        </Box>
    ) 

  return (
    <div>
        <React.Fragment>
          <SwipeableDrawer
            anchor={"left"}
            open={open}
            onClose={handleOpen}
            onOpen={handleOpen}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>   
    </div>
  );
}

export default NavigationMobile;