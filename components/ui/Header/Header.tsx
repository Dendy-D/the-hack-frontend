import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Navigation from '../../Navigation';
import Button from '../../ui/Button';
import logo from '../../../public/icons/logo.svg';
import classes from './Header.module.scss';

const Header: React.FC = () => (
  <header className={classes.component}>
    <Link href="/">
      <a className={classes.logo}>
        <Image
          src={logo}
          width={150}
          height={60}
          alt="logo hack service"
        />
      </a>
    </Link>
    <Navigation />
    <Button>
      Вход
    </Button>
  </header>
);

export default Header;
