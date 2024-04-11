import 'ideanuxt/dist/style.css'
import ideanuxt from 'ideanuxt'

function main() {
  import('./extensions/github/github').then(({ github }) => ideanuxt.use(github))
  import('./extensions/qrcode/qrcode').then(({ qrcode }) => ideanuxt.use(qrcode))

  ideanuxt.create(document.getElementById('root')!)
}

main()
