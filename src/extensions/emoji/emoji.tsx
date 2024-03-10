import { EmojiIcon } from './EmojiIcon'

const EmojiViewContainer = () => {
  return (
    <div>
      Emoji View Container
    </div>
  )
}

export const emoji = {
    name: 'emoji',
    contributes: {
      viewsContainers: {
        activitybar: [
          {
            id: "emoji",
            title: "Emoji",
            icon: EmojiIcon,
            viewContainer: EmojiViewContainer
          }
        ]
      },
  }
}
