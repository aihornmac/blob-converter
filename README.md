# blob-converter
A tool to convert blob to arrayBuffer or string

#### Install
```bash
yarn add blob-converter
```
```bash
npm i -S blob-converter
```

#### Usage
```js
import { convert } from 'blob-converter'

const arrayBuffer = await convert(blob, 'buffer')
const arrayBuffer = await convert(blob, 'arrayBuffer')

const binaryString = await convert(blob, 'binary')
const binaryString = await convert(blob, 'binaryString')

const base64 = await convert(blob, 'base64')
const base64 = await convert(blob, 'dataURL')
```
