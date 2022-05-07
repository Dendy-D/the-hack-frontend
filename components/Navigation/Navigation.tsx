import Link from 'next/link';
import Image from 'next/image';

import classes from './Navigation.module.scss';

const Navigation: React.FC = () => (
  <nav>
    <Link href="/">
      <a>
        <Image src="../../public/icons/logo.svg" />
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
    <button>Hello</button>
  </nav>
);

export default Navigation;
