import Link from 'next/link';
import Image from 'next/image';

import Button from '../ui/Button';
import logo from '../../public/icons/logo.svg';
import classes from './Navigation.module.scss';

const Navigation: React.FC = () => (
  <nav className={classes.component}>
    <Link href="/">
      <a>
        <Image
          src={logo}
          width={200}
          height={200}
          alt="logo hack service"
        />
      </a>
    </Link>
    <Link href="/hack">
      <a>Взломать</a>
    </Link>
    <Link href="/advantages">
      <a>Преимущества</a>
    </Link>
    <Link href="/about">
      <a>О сервисе</a>
    </Link>
    <Link href="/prices">
      <a>Тарифы</a>
    </Link>
    <Link href="/reviews">
      <a>Отзывы</a>
    </Link>
    <Button>
      Вход
    </Button>
  </nav>
);

export default Navigation;
