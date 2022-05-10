import Link from 'next/link';

import classes from './Navigation.module.scss';

const Navigation: React.FC = () => (
  <nav className={classes.component}>
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
  </nav>
);

export default Navigation;
