## 🚀 Installation

```bash
npm install readable-digits
```

---

## 📦 Usage Example
#### readableDigits - a method that converts the value of a number into a value that is as readable as possible for humans

```js
import { readableDigitsXS, readableDigitsSM, readableDigits } from 'readable-digits'

/*
* standart size
*/
readableDigits(1000) // 1 thousand
readableDigits(10000) // 10 thousand
readableDigits(1000000) // 1 million
readableDigits(2100000) // 2.1 million
readableDigits(11111111) // 11.11 million
readableDigits(1234567890) // 1.23 billion
readableDigits(1234567890123) // 1.23 trillion
readableDigits(1.222e15) // 1.22 quadrillion
readableDigits(1.222e18 + 2) // 1.22 quintillion
readableDigits(1.222e21 + 2) // 1.22 sextillion

/*
* small size
*/
readableDigitsSM(1000) // 1K
readableDigitsSM(10000) // 10K
readableDigitsSM(1000000) // 1M
readableDigitsSM(11111111) // 11.11M
readableDigitsSM(1234567890) // 1.23B
readableDigitsSM(1234567890123) // 1.23T
readableDigitsSM(1.222e15) // 1.22 QUAD
readableDigitsSM(1.222e18 + 2) // 1.22 QUIN
readableDigitsSM(1.222e21 + 2) // 1.22 SEX

/*
* extra small size
*/
// xs and sm in english version difference:
readableDigitsXS(1.222e21 + 2) // 1.2 SEX (not 1.22 SEX)
```

##### Change locale to russian:
```js
import { setGlobalLocale, readableDigitsXS, readableDigitsSM, readableDigitsMD, readableDigits } from 'readable-digits'

setGlobalLocale('ru')

/*
* standart size
*/
readableDigits(1000) // 1 тысяча
readableDigits(10000) // 10 тысяч
readableDigits(1000000) // 1 миллион
readableDigits(2100000) // 2.1 миллиона
readableDigits(11000000) // 11 миллионов
readableDigits(1234567890) // 1.23 миллиарда
readableDigits(1234567890123) // 1.23 триллиона
readableDigits(1.222e15) // 1.22 квадриллиона
readableDigits(1.222e18 + 2) // 1.22 квинтиллиона
readableDigits(1.222e21 + 2) // 1.22 секстиллиона

/*
* small size
*/
readableDigitsSM(1000) // 1 тыс.
readableDigitsSM(10000) // 10 тыс.
readableDigitsSM(1000000) // 1 млн
readableDigitsSM(2100000) // 2.1 млн
readableDigitsSM(11000000) // 11 млн
readableDigitsSM(1234567890) // 1.23 млрд
readableDigitsSM(1234567890123) // 1.23 трлн
readableDigitsSM(1.222e15) // 1.22 QUAD
readableDigitsSM(1.222e18 + 2) // 1.22 QUIN
readableDigitsSM(1.222e21 + 2) // 1.22 SEX

/*
* extra small size
*/
readableDigitsXS(10000) // 10K
readableDigitsXS(1000000) // 1M
readableDigitsXS(2100000) // 2.1M
readableDigitsXS(11000000) // 11M
readableDigitsXS(1234567890) // 1.2B
readableDigitsXS(1234567890123) // 1.2T
readableDigitsXS(1.222e15) // 1.2 QUAD
readableDigitsXS(1.222e18 + 2) // 1.2 QUIN
readableDigitsXS(1.222e21 + 2) // 1.2 SEX
```

##### options:
```js
/* using certain unit rank: */
readableDigitsXS(500, { withUnit: 1e3 }) // 0.5K
readableDigitsXS(1e9, { withUnit: 1e3 }) // 1KKK
readableDigitsXS(1e12, { withUnit: 1e3 }) // 1KKKK
readableDigitsXS(1e12, { withUnit: 1e6 }) // 1MM

/* using certain locale: */
readableDigitsMD(1e9, { locale: 'ru' }) // 1 миллион
readableDigitsMD(1e9, { locale: 'en' }) // 1 billion

/* using certain fraction count: */
readableDigitsSM(1111111, { fractionDigits: 4, locale: 'ru' }) // 1.1111 млн

/* using certain size: */
readableDigits(1e9, 'sm', { locale: 'ru' }) // 1 млрд
readableDigits(1e9, 'md', { locale: 'en' }) // 1 billion
```

#### divisionDigits - make the number readable, but display it completely

```js
import { divisionDigits } from 'readable-digits'

divisionDigits(1000000) // 1 000 000
divisionDigits(100123123123123) // 100 123 123 123 123
divisionDigits(1000000000, ',') // 1,000,000,000
```

#### avoidExponentialNotation - divisionDigits is based on it.

```js
import { avoidExponentialNotation } from 'readable-digits'

avoidExponentialNotation(1e21) // 1000000000000000000000
```

#### countUnits - count the number of digits after the first one

```js
import { countUnits } from 'readable-digits'

countUnits(1000) // 3
countUnits(10000) // 4
countUnits(11111) // 4
```

#### dashNumbers - connect the numbers if they come in sequence

```js
import { dashNumbers } from 'readable-digits'

dashNumbers([1,2,3,4,5, 100, 200,201,202,203]) // 1-5, 100, 200-203
dashNumbers([1,2,3,4,5, 100, 200,201,202,203], ' to ', ' and ') // 1 to 5 and 100 and 200 to 203
```

#### round and beutifulRound - round up the number

```js
import { round, floor, ceil, beutifulRound, beutifulFloor, beutifulCeil } from 'readable-digits'

round(1.55) // 2
round(1.55, 1) // 1.6
floor(1.99) // 1
floor(1.99, 1) // 1.9
ceil(1.01) // 2
ceil(1.019, 2) // 1.02

beutifulRound(111111) // 110000
beutifulRound(111111, 2) // 111000
beutifulFloor(111111) // 110000
beutifulFloor(111111, 2) // 111000
beutifulCeil(111111) // 120000
beutifulCeil(111111, 2) // 112000
```

#### textToDigits - get numbers from text string

```js
import { textToDigits } from 'readable-digits'

textToDigits('user input: 10 тысяч') // { digits: [10000], textWithoutDigits: 'user input: ' }
textToDigits('1 миллион') // { digits: [1000000], textWithoutDigits: '' }
textToDigits('1.1 млн') // { digits: [1100000], textWithoutDigits: '' }
textToDigits('1.11 млн') // { digits: [1110000], textWithoutDigits: '' }
textToDigits('1.23 млрд') // { digits: [1230000000], textWithoutDigits: '' }
textToDigits('1.23 трлн') // { digits: [1230000000000], textWithoutDigits: '' }
textToDigits('1.22 квадриллиона') // { digits: [1.22e15], textWithoutDigits: '' }
textToDigits('1.22 квинтиллионов') // { digits: [1.22e18], textWithoutDigits: '' }
textToDigits('1.22 секстиллионов') // { digits: [1.22e21], textWithoutDigits: '' }
```

#### includes some more important well-known methods: lerp, clamp, fract
```js
import { lerp, clamp, fract } from 'readable-digits'
```