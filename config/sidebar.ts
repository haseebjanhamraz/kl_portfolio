import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/haseebjanhamraz',
    icon: FaTwitter,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/haseebjanhamraz',
    icon: FaInstagram,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/haseebjanhamraz',
    icon: FaLinkedin,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/channel/@Pashtology',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/haseebjanhamraz',
    icon: FaGithub,
  },
]
