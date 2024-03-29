import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import { useTheme } from 'next-themes'
import DarkLogo from '@/data/dark-logo.svg'
import LightLogo from '@/data/light-logo.svg'
import YellowLogo from '@/data/yellow-logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/router'
const LayoutWrapper = ({ children }) => {
  const { theme } = useTheme()
  const router = useRouter()

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              {/* <div className="flex items-center justify-between">
                <div className="mr-3">{theme === 'dark' ? <LightLogo /> : <DarkLogo />}</div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div> */}
              <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                {/* <div className="mr-3">{theme === '' ?  <DarkLogo /> : (theme === 'dark' ? <LightLogo />:<DarkLogo />) }</div> */}
                <div className="mr-3">
                  {/* {theme === '' ? <LightLogo /> : theme === 'dark' ? <LightLogo /> : <DarkLogo />} */}
                  <YellowLogo />
                </div>

                {/* {`~${router.asPath}`}{' '} */}
                <Typewriter
                  options={{
                    strings: siteMetadata.headerTitle,
                    // strings: router.asPath,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
