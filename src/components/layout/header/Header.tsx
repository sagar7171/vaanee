import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoDark from 'public/images/logo-two.png';
import LogoLight from 'public/images/logo.png';
import LogoTwoDark from 'public/images/logo-three.png';
import LogoTwoLight from 'public/images/logo-four.png';
import LogoThreeDark from 'public/images/logo-light.png';
import VaaneeLogo from 'public/images/vaaneeLogo.png';
import { useAppDispatch } from '@/components/hooks/redux-hooks';
import { toggleUploadVideoModal } from '../../store/actions/modalActions';
import { useAppSelector } from '@/components/hooks/redux-hooks';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react';
import ChevronDownIcon from '../../../../public/images/svg/ChevronDownIcon';
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { logout } from '@/components/store/actions/authActions';
import { toast } from 'react-toastify';
import AvatarComp from '@/components/common/AvtarComp';
interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const Header = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const closeNav = () => {
    setOpenNav(false);
    setOpenSubMenu(null);
  };
  const { auth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? ' nav__dropdown-active' : ' ';
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu
      ? ' nav__menu-link--dropdown-active'
      : ' ';
  };

  // window resize
  useEffect(() => {
    const handleResizeHeader = (): void => {
      setOpenNav(false);
      setOpenSubMenu(null);
    };

    window.addEventListener('resize', handleResizeHeader);

    return () => {
      window.removeEventListener('resize', handleResizeHeader);
    };
    // eslint-disable-next-line
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // conditional classes for header
  const defaultClasses = 'header';

  // let logoSrc = LogoLight;
  // let logoSrcMobile = LogoLight;
  let logoSrc = VaaneeLogo;
  let logoSrcMobile = VaaneeLogo;

  const getPageHeaderClass = (pathname: string): string => {
    if (pathname === '/' || pathname === '/create-project') {
      // logoSrc = LogoDark;
      // logoSrcMobile = LogoDark;
      logoSrc = VaaneeLogo;
      logoSrcMobile = VaaneeLogo;
      return 'header--dark';
    } else if (pathname === '/index-light') {
      // logoSrc = LogoLight;
      // logoSrcMobile = LogoLight;
      logoSrc = VaaneeLogo;
      logoSrcMobile = VaaneeLogo;
      return '';
    } else if (pathname === '/index-two') {
      // logoSrc = LogoTwoDark;
      // logoSrcMobile = LogoTwoDark;
      logoSrc = VaaneeLogo;
      logoSrcMobile = VaaneeLogo;
      return 'header--dark header-two';
    } else if (pathname === '/index-two-light') {
      // logoSrc = LogoTwoLight;
      // logoSrcMobile = LogoTwoLight;
      logoSrc = VaaneeLogo;
      logoSrcMobile = VaaneeLogo;
      return 'header--light header-two';
    } else if (pathname === '/index-three') {
      // logoSrc = LogoThreeDark;
      // logoSrcMobile = LogoThreeDark;
      logoSrc = VaaneeLogo;
      logoSrcMobile = VaaneeLogo;
      return 'header--dark';
    } else if (pathname === '/index-three-light') {
      // logoSrc = LogoLight;
      // logoSrcMobile = LogoLight;
      logoSrc = VaaneeLogo;
      logoSrcMobile = VaaneeLogo;
      return 'header--light';
    }
    return '';
  };

  const router = useRouter();
  const headerClass = getPageHeaderClass(router.pathname);

  const combinedClasses = `${scrolled ? 'header-active' : ''
    } ${headerClass} ${defaultClasses}`.trim();

  return (
    <header className={combinedClasses}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <nav className='nav'>
              <div className='nav__content'>
                <div
                  className='nav__logo'
                  style={{ width: '20%' }}>
                  <Link href='/'>
                    <Image
                      src={logoSrc}
                      priority
                      alt='Logo'
                    />
                  </Link>
                </div>
                {/* <div
                  className={
                    (openNav ? " nav__menu-active" : " ") + " nav__menu"
                  }
                >
                  <div className="nav__menu-logo d-flex d-xl-none">
                    <Link href="/" className="text-center hide-nav">
                      <Image src={logoSrcMobile} priority alt="Logo" />
                    </Link>
                    <button
                      aria-label="close the menu"
                      className="nav__menu-close"
                      onClick={closeNav}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <ul className="nav__menu-items">
                    <li className="nav__menu-item nav__menu-item--dropdown">
                      <a
                        className={`nav__menu-link nav__menu-link--dropdown ${isSubMenuButton(
                          "home"
                        )}`}
                        onClick={() => handleSubmenu("home")}
                      >
                        Home
                      </a>
                      <div
                        className={`nav__dropdown nav__dropdown--alt ${isSubMenuOpen(
                          "home"
                        )}`}
                      >
                        <ul>
                          <li>
                            <Link
                              className="nav__dropdown-item hide-nav"
                              href="/"
                            >
                              Home 01
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="nav__dropdown-item hide-nav"
                              href="/index-two"
                            >
                              Home 02
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="nav__dropdown-item hide-nav"
                              href="/index-three"
                            >
                              Home 03
                            </Link>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <Link
                              className="nav__dropdown-item hide-nav"
                              href="/index-light"
                            >
                              Home 01 Light
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="nav__dropdown-item hide-nav"
                              href="/index-two-light"
                            >
                              Home 02 Light
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="nav__dropdown-item hide-nav"
                              href="/index-three-light"
                            >
                              Home 03 Light
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nav__menu-item">
                      <Link
                        href="/about-us"
                        className="nav__menu-link hide-nav"
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="nav__menu-item nav__menu-item--dropdown">
                      <a
                        className={`nav__menu-link nav__menu-link--dropdown ${isSubMenuButton(
                          "case"
                        )}`}
                        onClick={() => handleSubmenu("case")}
                      >
                        Use Case
                      </a>
                      <ul className={`nav__dropdown ${isSubMenuOpen("case")}`}>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="/use-case"
                          >
                            Use Case
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="/use-case-single"
                          >
                            Use Case Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav__menu-item nav__menu-item--dropdown">
                      <a
                        className={`nav__menu-link nav__menu-link--dropdown ${isSubMenuButton(
                          "pages"
                        )}`}
                        onClick={() => handleSubmenu("pages")}
                      >
                        Pages
                      </a>
                      <ul className={`nav__dropdown ${isSubMenuOpen("pages")}`}>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="/error"
                          >
                            Error
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="/register"
                          >
                            Sign Up
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="/sign-in"
                          >
                            Sign In
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="/teams"
                          >
                            Our Teams
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="/about-us"
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="/contact-us"
                          >
                            Contact Us
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav__menu-item nav__menu-item--dropdown">
                      <a
                        className={`nav__menu-link nav__menu-link--dropdown ${isSubMenuButton(
                          "blog"
                        )}`}
                        onClick={() => handleSubmenu("blog")}
                      >
                        Blog
                      </a>
                      <ul className={`nav__dropdown ${isSubMenuOpen("blog")}`}>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="/blog"
                          >
                            Blog Layout One
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="/blog-two"
                          >
                            Blog Layout Two
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__dropdown-item hide-nav"
                            href="/blog-single"
                          >
                            Blog Single
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav__menu-item">
                      <Link
                        href="/contact-us"
                        className="nav__menu-link hide-nav"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav__menu-item d-block d-md-none">
                      <Link href="/register" className="btn btn--secondary">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                  <div className="social">
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="/" aria-label="social media">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </div>
                </div> */}
                <div className='nav__uncollapsed'>
                  {/* <div className='nav__uncollapsed-item d-none d-md-flex'> */}
                  {auth ? (
                    // <div
                    // 	style={{
                    // 		color: 'white',
                    // 		cursor: 'pointer',
                    // 	}}
                    // 	onClick={() => {
                    // 		dispatch(
                    // 			toggleUploadVideoModal(),
                    // 		);
                    // 	}}>
                    // 	Create Project
                    // </div>
                    <AvatarComp />
                  ) : (
                    <div
                      style={
                        router.pathname === '/'
                          ? { color: 'white' }
                          : {}
                      }>
                      <Link
                        href='/register'
                        style={
                          router.pathname === '/'
                            ? { color: 'white' }
                            : {}
                        }>
                        Sign Up
                      </Link>
                      &nbsp;/&nbsp;
                      <Link
                        href='/sign-in'
                        style={
                          router.pathname === '/'
                            ? { color: 'white' }
                            : {}
                        }>
                        Sign In
                      </Link>
                      {/* <Link
											href='/register'
											className='btn btn--secondary'>
											Sign Up
										</Link> */}
                    </div>
                  )}
                  <button
                    className={
                      (openNav
                        ? ' nav__bar-toggle'
                        : ' ') +
                      ' nav__bar d-block d-xl-none'
                    }
                    onClick={handleNav}>
                    <span className='icon-bar top-bar'></span>
                    <span className='icon-bar middle-bar'></span>
                    <span className='icon-bar bottom-bar'></span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div
        className={(openNav ? ' backdrop-active' : ' ') + ' backdrop'}
        onClick={closeNav}></div>
    </header>
  );
};

export default Header;
