import { GithubIcon } from './GithubIcon'

export const github = {
  name: 'github',
  contributes: {
    viewsContainers: {
      titlebar: [
        {
          id: 'github',
          title: 'Github',
          icon: GithubIcon
        }
      ]
    }
  }
}
