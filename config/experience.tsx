import { Link } from '@chakra-ui/react'

export type Company = 'NEOS' | 'BacchaKhanTrust' | 'KPCybers' | 'AwamiNationalParty'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  NEOS: {
    name: 'NEOS',
    longName: 'Neoteric Genetics',
    subDetail: 'Semens Production Unit - Dairy Farming / Breeding',
    url: 'https://neos.pk/',
    position: 'Web & Marketing Manager',
    duration: 'May 2024 - Present',
    logo: {
      light: '/worked_at_logos/neos/neos-light.png',
      dark: '/worked_at_logos/neos/neos-light.png',
    },
    roles: [
      <>
        Contributed to the design and development of a comprehensive dairy farm management system project for a this company
        That covered cattle records keeping from milking to pregnancy and pedigree management.
      </>,
      <>
        Managing social media accounts with related photos, videos and reels content.
      </>,
      <>
        Worked as a fullstack web developer on new{' '}
        <Link
          aria-label="Neoteric Genetics NEOS"
          href="https://neos.pk/"
          target="_blank"
          rel="noreferrer"
        >
          NEOS Official website.
        </Link>
      </>
    ],
  },
  BacchaKhanTrust: {
    name: 'BaachaKhanTrust',
    longName: 'Baacha Khan Trust',
    subDetail: 'Non-profit organization with variety of departments',
    url: 'https://www.scentregroup.com/',
    position: 'Software Engineer',
    duration: 'Feb 2016 - May 2024',
    logo: {
      light: '/worked_at_logos/bkt/bkt-dark.png',
      dark: '/worked_at_logos/bkt/bkt-light.png',
    },
    roles: [
      <>
        Redesigned the official website for{' '}
        <Link
          aria-label="Baacha Khan Trust"
          href="https://partner.scentregroup.com/"
          target="_blank"
          rel="noreferrer"
        >
          Baacha Khan Trust
        </Link>{' '}
        using NextJS and Typescript. Restructuring the old express app into a
        newer architectural design approach.
      </>,
      <>
        Created multiple database in ExpressJS and NodeJS for data keeping such as memberships and forms data.
      </>,
      <>
        Worked on maintaining{' '}
        <Link
          variant="primaryLink"
          href="https://www.westfield.com.au/"
          target="_blank"
          rel="noreferrer"
        >
          Khudai Khidmatgar Organization's
        </Link>{' '}
        main site and REST apis written in NodeJS.
      </>,
      <>
        Developed internal networking systems with connected devices (Eg: Printers, Scanners & other devices).
      </>,
      <>
        Hired at early 2016, first major task was redesigning 12 websites that can scale and also enable us to have
        personalisation as well.
      </>,
    ],
  },
  KPCybers: {
    name: 'KPCybers',
    longName: 'Khyber Cybers Pvt. Ltd.',
    subDetail: 'Software Developer Company',
    url: 'https://kpcybers.com/',
    position: 'CEO / Director',
    duration: 'Sep 2023 - Present',
    logo: {
      light: '/worked_at_logos/kpc/kpc.png',
      dark: '/worked_at_logos/kpc/kpc-light.png',
    },
    roles: [
      <>
        Found a this software company in 2023 for developing robust web and mobile applications and CMS.
      </>,
      <>
        On this position at KPC I have developed dozens of websites for clients under the umberalla of Khyber Cybers (Pvt.) Ltd.
      </>,
      <>
        Helped tens of software engineering students to sharp their skills with the help of our senior software engineers and faculty staff.
      </>
    ],
  },
  AwamiNationalParty: {
    name: 'AwamiNationalParty',
    longName: 'Awami National Party',
    subDetail: 'Progressive political party in Pakistan.',
    url: 'https://anp.org.pk/',
    position: 'Web Developer & Network Operator (Remote)',
    duration: 'Nov 2018 - Present',
    logo: {
      light: '/worked_at_logos/anp/anp-logo.png',
      dark: '/worked_at_logos/anp/anp-logo.png',
    },
    roles: [
      <>
        Developed a social media management system for ANP's social media team. This {" "}
        <Link
          variant="primaryLink"
          href="https://anp.social/"
          target="_blank"
          rel="noreferrer"
        >
          ANP Social Media Management System
        </Link>{' '}
        is a web application that helps the team to manage their social media accounts and schedule posts.
      </>,
      <>
        Developed {" "}
        <Link
          variant="primaryLink"
          href="https://anp.social/"
          target="_blank"
          rel="noreferrer"
        >
          Membership Management System
        </Link>{' '}
        for Awami National Party. This system helps the secreteriate to manage their members and their information through this MERN Stack app.
      </>,
      <>
        Create highly scalable Books shop e-commerce site with multiple payment integrations and responsive design.
      </>
    ],
  },
}

export const ExperiencesList = [
  Experiences.NEOS,
  Experiences.BacchaKhanTrust,
  Experiences.KPCybers,
  Experiences.AwamiNationalParty,
]
