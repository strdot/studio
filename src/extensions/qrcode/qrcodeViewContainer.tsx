import { useState } from 'react'
import type { Context } from '@ideanuxt/types'
import { Button, TextArea } from '@radix-ui/themes'
import QRCodeStyling from 'qr-code-styling'

export const QrcodeViewContainer = (props: Context) => {
  const [text, setText] = useState('')

  const handleGenerate = async () => {
    const qrCodeStyling = new QRCodeStyling({
      data: text
    })
    const blob = await qrCodeStyling.getRawData()
    const base64 = await blobToBase64(blob as Blob)

    props.editor.add({
      name: 'image',
      width: 200,
      height: 200,
      props: {
        src: base64
      }
    })
  }

  return (
    <div className="p-4">
      <h1 className="mb-4  font-extrabold text-gray-900 dark:text-white">
        <span className="bg-gradient-to-r from-cyan-200 to-emerald-600 bg-clip-text text-transparent">QR Code</span>
      </h1>
      <div className="mb-4">
        <TextArea onChange={(event) => setText(event.target.value)} placeholder="Enter text to generate QR code" />
      </div>
      <Button onClick={handleGenerate} className="w-full">
        Generate
      </Button>
    </div>
  )
}

function blobToBase64(blob: Blob) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.readAsDataURL(blob)
  })
}
