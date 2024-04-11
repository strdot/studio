import { QrcodeIcon } from './qrcodeIcon'
import { QrcodeViewContainer } from './qrcodeViewContainer'

export const qrcode = {
  name: 'qrcode',
  contributes: {
    viewsContainers: {
      activitybar: [
        {
          id: 'qrcode',
          title: 'QR Code',
          icon: QrcodeIcon,
          viewContainer: QrcodeViewContainer
        }
      ]
    }
  }
}
