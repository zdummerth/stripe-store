import Link from 'next/link';
import s from './Navbar.module.css';

import Logo from 'components/icons/Logo';
import { useUser } from 'utils/useUser';
import { useRouter } from 'next/router';

const Navbar = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <nav className={s.root}>
      <a href="#skip" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link href="/">
              <a className={s.logo} aria-label="Logo">
                <Logo />
              </a>
            </Link>
            <nav className="flex-1 space-x-2 ml-6">
              <Link href="/public-blog">
                <a className={s.link}>Blog</a>
              </Link>
              <Link href="/account">
                <a className={s.link}>Account</a>
              </Link>
              <Link href="/blog">
                <a className={s.link}>Members</a>
              </Link>
              {user ? (
                <Link href="/api/auth/logout">
                  <a className={s.link}>Sign out</a>
                </Link>
              ) : (
                <Link href="/signin">
                  <a className={s.link}>Sign in</a>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
