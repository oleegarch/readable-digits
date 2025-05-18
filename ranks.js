export const ranks = [
	{
		unit: 1e3,
		unitName: 'thousand',
		abbr: 'K',
        locales: {
            'ru': {
                abbreviation: 'тыс.',
                unitName: {
                    'one': 'тысяча', // 1 тысяча
                    'few': 'тысячи', // 2 тысячи
                    'many': 'тысяч', // 10 тысяч
                    'other': 'тысячи' // 1.22 тысячи
                },
            }
        }
	},
	{
		unit: 1e6,
		unitName: 'million',
		abbr: 'M',
        locales: {
            'ru': {
                abbreviation: 'млн',
                unitName: 'миллион',
            }
        }
	},
	{
		unit: 1e9,
		unitName: 'billion',
		abbr: 'B',
        locales: {
            'ru': {
                abbreviation: 'млрд',
                unitName: 'миллиард',
            }
        }
	},
	{
		unit: 1e12,
		unitName: 'trillion',
		abbr: 'T',
        locales: {
            'ru': {
                abbreviation: 'трлн',
                unitName: 'триллион',
            }
        }
	},
	{
		unit: 1e15,
		unitName: 'quadrillion',
		abbr: 'QUAD',
        locales: {
            'ru': {
                abbreviation: 'QUAD',
                unitName: 'квадриллион',
            }
        }
	},
	{
		unit: 1e18,
		unitName: 'quintillion',
		abbr: 'QUIN',
        locales: {
            'ru': {
                abbreviation: 'QUIN',
                unitName: 'квинтиллион',
            }
        }
	},
	{
		unit: 1e21,
		unitName: 'sextillion',
		abbr: 'SEX',
        locales: {
            'ru': {
                abbreviation: 'SEX',
                unitName: 'секстиллион',
            }
        }
	},
	{
		unit: 1e24,
		unitName: 'septillion',
		abbr: 'SEP',
        locales: {
            'ru': {
                abbreviation: 'SEP',
                unitName: 'септиллион',
            }
        }
	},
	{
		unit: 1e27,
		unitName: 'octillion',
		abbr: 'OCT',
        locales: {
            'ru': {
                abbreviation: 'OCT',
                unitName: 'октиллион',
            }
        }
	},
	{
		unit: 1e30,
		unitName: 'nonillion',
		abbr: 'NON',
        locales: {
            'ru': {
                abbreviation: 'NON',
                unitName: 'нониллион',
            }
        }
	},
	{
		unit: 1e33,
		unitName: 'decillion',
		abbr: 'DEC',
        locales: {
            'ru': {
                abbreviation: 'DEC',
                unitName: 'дециллион',
            }
        }
	},
	{
		unit: 1e36,
		unitName: 'undecillion',
		abbr: 'UND',
        locales: {
            'ru': {
                abbreviation: 'UND',
                unitName: 'ундециллион',
            }
        }
	},
	{
		unit: 1e39,
		unitName: 'duodecillion',
		abbr: 'DUO',
        locales: {
            'ru': {
                abbreviation: 'DUO',
                unitName: 'дуодециллион',
            }
        }
	},
	{
		unit: 1e42,
		unitName: 'tredecillion',
		abbr: 'TRE',
        locales: {
            'ru': {
                abbreviation: 'TRE',
                unitName: 'тредециллион',
            }
        }
	},
	{
		unit: 1e45,
		unitName: 'quattuordecillion',
		abbr: 'QUAT',
        locales: {
            'ru': {
                abbreviation: 'QUAT',
                unitName: 'кватуордециллион',
            }
        }
	},
	{
		unit: 1e48,
		unitName: 'quindecillion',
		abbr: 'QUIN',
        locales: {
            'ru': {
                abbreviation: 'QUIN',
                unitName: 'квиндециллион',
            }
        }
	},
	{
		unit: 1e51,
		unitName: 'sexdecillion',
		abbr: 'SEXD',
        locales: {
            'ru': {
                abbreviation: 'SEXD',
                unitName: 'сексдециллион',
            }
        }
	},
	{
		unit: 1e54,
		unitName: 'septendecillion',
		abbr: 'SEPT',
        locales: {
            'ru': {
                abbreviation: 'SEPT',
                unitName: 'септендециллион',
            }
        }
	},
	{
		unit: 1e57,
		unitName: 'octodecillion',
		abbr: 'OCTO',
        locales: {
            'ru': {
                abbreviation: 'OCTO',
                unitName: 'октодециллион',
            }
        }
	},
	{
		unit: 1e60,
		unitName: 'novemdecillion',
		abbr: 'NOVE',
        locales: {
            'ru': {
                abbreviation: 'NOVE',
                unitName: 'новемдециллион',
            }
        }
	},
	{
		unit: 1e63,
		unitName: 'vigintillion',
		abbr: 'VIGI',
        locales: {
            'ru': {
                abbreviation: 'VIGI',
                unitName: 'вигинтиллион',
            }
        }
	},
	{
		unit: 1e66,
		unitName: 'unvigintillion',
		abbr: 'UNVI',
        locales: {
            'ru': {
                abbreviation: 'UNVI',
                unitName: 'унвигинтиллион',
            }
        }
	},
	{
		unit: 1e69,
		unitName: 'duovigintillion',
		abbr: 'DUOV',
        locales: {
            'ru': {
                abbreviation: 'DUOV',
                unitName: 'дуовигинтиллион',
            }
        }
	},
	{
		unit: 1e72,
		unitName: 'trevigintillion',
		abbr: 'TREV',
        locales: {
            'ru': {
                abbreviation: 'TREV',
                unitName: 'тревигинтиллион',
            }
        }
	},
	{
		unit: 1e75,
		unitName: 'quattuorvigintillion',
        locales: {
            'ru': {
                unitName: 'кватуорвигинтиллион',
            }
        }
	},
	{
		unit: 1e78,
		unitName: 'quinvigintillion',
        locales: {
            'ru': {
                unitName: 'квинвигинтиллион',
            }
        }
	},
	{
		unit: 1e81,
		unitName: 'sexvigintillion',
        locales: {
            'ru': {
                unitName: 'сексвигинтиллион',
            }
        }
	},
	{
		unit: 1e84,
		unitName: 'septenvigintillion',
        locales: {
            'ru': {
                unitName: 'септенвигинтиллион',
            }
        }
	},
	{
		unit: 1e87,
		unitName: 'octovigintillion',
        locales: {
            'ru': {
                unitName: 'октовигинтиллион',
            }
        }
	},
	{
		unit: 1e90,
		unitName: 'novemvigintillion',
        locales: {
            'ru': {
                unitName: 'новемвигинтиллион',
            }
        }
	},
	{
		unit: 1e93,
		unitName: 'trigintillion',
        locales: {
            'ru': {
                unitName: 'тригинтиллион',
            }
        }
	},
	{
		unit: 1e96,
		unitName: 'untrigintillion',
        locales: {
            'ru': {
                unitName: 'унтригинтиллион',
            }
        }
	},
	{
		unit: 1e99,
		unitName: 'duotrigintillion',
        locales: {
            'ru': {
                unitName: 'дуотригинтиллион',
            }
        }
	},
	{
		unit: 1e102,
		unitName: 'trestrigintillion',
        locales: {
            'ru': {
                unitName: 'третригинтиллион',
            }
        }
	},
	{
		unit: 1e105,
		unitName: 'quattuortrigintillion',
        locales: {
            'ru': {
                unitName: 'кватортригинтиллион',
            }
        }
	},
	{
		unit: 1e108,
		unitName: 'quintrigintillion',
        locales: {
            'ru': {
                unitName: 'квинтригинтиллион',
            }
        }
	},
	{
		unit: 1e111,
		unitName: 'sextrigintillion',
        locales: {
            'ru': {
                unitName: 'секстригинтиллион',
            }
        }
	},
	{
		unit: 1e114,
		unitName: 'septentrigintillion',
        locales: {
            'ru': {
                unitName: 'септентригинтиллион',
            }
        }
	},
	{
		unit: 1e117,
		unitName: 'octotrigintillion',
        locales: {
            'ru': {
                unitName: 'октотригинтиллион',
            }
        }
	},
	{
		unit: 1e120,
		unitName: 'novemtrigintillion',
        locales: {
            'ru': {
                unitName: 'новемтригинтиллион',
            }
        }
	},
	{
		unit: 1e123,
		unitName: 'quadragintillion',
        locales: {
            'ru': {
                unitName: 'квадрагинтиллион',
            }
        }
	},
	{
		unit: 1e126,
		unitName: 'unquadragintillion',
        locales: {
            'ru': {
                unitName: 'унквадрагинтиллион',
            }
        }
	},
	{
		unit: 1e129,
		unitName: 'duoquadragintillion',
        locales: {
            'ru': {
                unitName: 'дуоквадрагинтиллион',
            }
        }
	},
	{
		unit: 1e132,
		unitName: 'trequadragintillion',
        locales: {
            'ru': {
                unitName: 'треквадрагинтиллион',
            }
        }
	},
	{
		unit: 1e135,
		unitName: 'quattuorquadragintillion',
        locales: {
            'ru': {
                unitName: 'кваторквадрагинтиллион',
            }
        }
	},
	{
		unit: 1e138,
		unitName: 'quinquadragintillion',
        locales: {
            'ru': {
                unitName: 'квинквадрагинтиллион',
            }
        }
	},
	{
		unit: 1e141,
		unitName: 'sexquadragintillion',
        locales: {
            'ru': {
                unitName: 'сексквадрагинтиллион',
            }
        }
	},
	{
		unit: 1e144,
		unitName: 'septenquadragintillion',
        locales: {
            'ru': {
                unitName: 'септенквадрагинтиллион',
            }
        }
	},
	{
		unit: 1e147,
		unitName: 'octoquadragintillion',
        locales: {
            'ru': {
                unitName: 'октоквадрагинтиллион',
            }
        }
	},
	{
		unit: 1e150,
		unitName: 'novemquadragintillion',
        locales: {
            'ru': {
                unitName: 'новемквадрагинтиллион',
            }
        }
	},
	{
		unit: 1e153,
		unitName: 'quinquagintillion',
        locales: {
            'ru': {
                unitName: 'квинквагинтиллион',
            }
        }
	},
	{
		unit: 1e156,
		unitName: 'unquinquagintillion',
        locales: {
            'ru': {
                unitName: 'унквинкагинтиллион',
            }
        }
	},
	{
		unit: 1e159,
		unitName: 'duoquinquagintillion',
        locales: {
            'ru': {
                unitName: 'дуоквинкагинтиллион',
            }
        }
	},
	{
		unit: 1e162,
		unitName: 'trequinquagintillion',
        locales: {
            'ru': {
                unitName: 'треквинкагинтиллион',
            }
        }
	},
	{
		unit: 1e165,
		unitName: 'quattuorquinquagintillion',
        locales: {
            'ru': {
                unitName: 'кваторквинкагинтиллион',
            }
        }
	},
	{
		unit: 1e168,
		unitName: 'quinquinquagintillion',
        locales: {
            'ru': {
                unitName: 'квинквинкагинтиллион',
            }
        }
	},
	{
		unit: 1e171,
		unitName: 'sexquinquagintillion',
        locales: {
            'ru': {
                unitName: 'сексквинкагинтиллион',
            }
        }
	},
	{
		unit: 1e174,
		unitName: 'septenquinquagintillion',
        locales: {
            'ru': {
                unitName: 'септенквинкагинтиллион',
            }
        }
	},
	{
		unit: 1e177,
		unitName: 'octoquinquagintillion',
        locales: {
            'ru': {
                unitName: 'октоквинкагинтиллион',
            }
        }
	},
	{
		unit: 1e180,
		unitName: 'novemquinquagintillion',
        locales: {
            'ru': {
                unitName: 'новемквинкагинтиллион',
            }
        }
	},
	{
		unit: 1e183,
		unitName: 'sexagintillion',
        locales: {
            'ru': {
                unitName: 'сексагинтиллион',
            }
        }
	},
	{
		unit: 1e186,
		unitName: 'unsexagintillion',
        locales: {
            'ru': {
                unitName: 'унсексагинтиллион',
            }
        }
	},
	{
		unit: 1e189,
		unitName: 'duosexagintillion',
        locales: {
            'ru': {
                unitName: 'дуосексагинтиллион',
            }
        }
	},
	{
		unit: 1e192,
		unitName: 'tresexagintillion',
        locales: {
            'ru': {
                unitName: 'тресексагинтиллион',
            }
        }
	},
	{
		unit: 1e195,
		unitName: 'quattuorsexagintillion',
        locales: {
            'ru': {
                unitName: 'кваторсексагинтиллион',
            }
        }
	},
	{
		unit: 1e198,
		unitName: 'quinsexagintillion',
        locales: {
            'ru': {
                unitName: 'квинсексагинтиллион',
            }
        }
	},
	{
		unit: 1e201,
		unitName: 'sexsexagintillion',
        locales: {
            'ru': {
                unitName: 'секссексагинтиллион',
            }
        }
	},
	{
		unit: 1e204,
		unitName: 'septensexagintillion',
        locales: {
            'ru': {
                unitName: 'септенсексагинтиллион',
            }
        }
	},
	{
		unit: 1e207,
		unitName: 'octosexagintillion',
        locales: {
            'ru': {
                unitName: 'октосексагинтиллион',
            }
        }
	},
	{
		unit: 1e210,
		unitName: 'novemsexagintillion',
        locales: {
            'ru': {
                unitName: 'новемсексагинтиллион',
            }
        }
	},
	{
		unit: 1e213,
		unitName: 'septuagintillion',
        locales: {
            'ru': {
                unitName: 'септагинтиллион',
            }
        }
	},
	{
		unit: 1e216,
		unitName: 'unseptuagintillion',
        locales: {
            'ru': {
                unitName: 'унсептагинтиллион',
            }
        }
	},
	{
		unit: 1e219,
		unitName: 'duoseptuagintillion',
        locales: {
            'ru': {
                unitName: 'дуосептагинтиллион',
            }
        }
	},
	{
		unit: 1e222,
		unitName: 'treseptuagintillion',
        locales: {
            'ru': {
                unitName: 'тресептагинтиллион',
            }
        }
	},
	{
		unit: 1e225,
		unitName: 'quattuorseptuagintillion',
        locales: {
            'ru': {
                unitName: 'кваторсептагинтиллион',
            }
        }
	},
	{
		unit: 1e228,
		unitName: 'quinseptuagintillion',
        locales: {
            'ru': {
                unitName: 'квинсептагинтиллион',
            }
        }
	},
	{
		unit: 1e231,
		unitName: 'sexseptuagintillion',
        locales: {
            'ru': {
                unitName: 'секссептагинтиллион',
            }
        }
	},
	{
		unit: 1e234,
		unitName: 'septenseptuagintillion',
        locales: {
            'ru': {
                unitName: 'септенсептагинтиллион',
            }
        }
	},
	{
		unit: 1e237,
		unitName: 'octoseptuagintillion',
        locales: {
            'ru': {
                unitName: 'октосептагинтиллион',
            }
        }
	},
	{
		unit: 1e240,
		unitName: 'novemseptuagintillion',
        locales: {
            'ru': {
                unitName: 'новемсептагинтиллион',
            }
        }
	},
	{
		unit: 1e243,
		unitName: 'octogintillion',
        locales: {
            'ru': {
                unitName: 'октогинтиллион',
            }
        }
	},
	{
		unit: 1e246,
		unitName: 'unoctogintillion',
        locales: {
            'ru': {
                unitName: 'уноктогинтиллион',
            }
        }
	},
	{
		unit: 1e249,
		unitName: 'duooctogintillion',
        locales: {
            'ru': {
                unitName: 'дуооктогинтиллион',
            }
        }
	},
	{
		unit: 1e252,
		unitName: 'treoctogintillion',
        locales: {
            'ru': {
                unitName: 'треоктогинтиллион',
            }
        }
	},
	{
		unit: 1e255,
		unitName: 'quattuoroctogintillion',
        locales: {
            'ru': {
                unitName: 'кватороктогинтиллион',
            }
        }
	},
	{
		unit: 1e258,
		unitName: 'quinoctogintillion',
        locales: {
            'ru': {
                unitName: 'квиноктогинтиллион',
            }
        }
	},
	{
		unit: 1e261,
		unitName: 'sexoctogintillion',
        locales: {
            'ru': {
                unitName: 'сексоктогинтиллион',
            }
        }
	},
	{
		unit: 1e264,
		unitName: 'septoctogintillion',
        locales: {
            'ru': {
                unitName: 'септоктогинтиллион',
            }
        }
	},
	{
		unit: 1e267,
		unitName: 'octooctogintillion',
        locales: {
            'ru': {
                unitName: 'октооктогинтиллион',
            }
        }
	},
	{
		unit: 1e270,
		unitName: 'novemoctogintillion',
        locales: {
            'ru': {
                unitName: 'новемоктогинтиллион',
            }
        }
	},
	{
		unit: 1e273,
		unitName: 'nonagintillion',
        locales: {
            'ru': {
                unitName: 'нонагинтиллион',
            }
        }
	},
	{
		unit: 1e276,
		unitName: 'unnonagintillion',
        locales: {
            'ru': {
                unitName: 'уннонагинтиллион',
            }
        }
	},
	{
		unit: 1e279,
		unitName: 'duononagintillion',
        locales: {
            'ru': {
                unitName: 'дуононагинтиллион',
            }
        }
	},
	{
		unit: 1e282,
		unitName: 'trenonagintillion',
        locales: {
            'ru': {
                unitName: 'тренонагинтиллион',
            }
        }
	},
	{
		unit: 1e285,
		unitName: 'quattuornonagintillion',
        locales: {
            'ru': {
                unitName: 'кваторнонагинтиллион',
            }
        }
	},
	{
		unit: 1e288,
		unitName: 'quinnonagintillion',
        locales: {
            'ru': {
                unitName: 'квиннонагинтиллион',
            }
        }
	},
	{
		unit: 1e291,
		unitName: 'sexnonagintillion',
        locales: {
            'ru': {
                unitName: 'секснонагинтиллион',
            }
        }
	},
	{
		unit: 1e294,
		unitName: 'septennonagintillion',
        locales: {
            'ru': {
                unitName: 'септеннонагинтиллион',
            }
        }
	},
	{
		unit: 1e297,
		unitName: 'octononagintillion',
        locales: {
            'ru': {
                unitName: 'октононагинтиллион',
            }
        }
	},
	{
		unit: 1e300,
		unitName: 'novemnonagintillion',
        locales: {
            'ru': {
                unitName: 'новемнонагинтиллион',
            }
        }
	},
	{
		unit: 1e303,
		unitName: 'centillion',
        locales: {
            'ru': {
                unitName: 'центиллион',
            }
        }
	},
];



ranks.forEach(rank => {
	if(typeof rank.locales['ru'].unitName === 'string') {
		rank.locales['ru'].unitName = {
            'one': rank.locales['ru'].unitName, // 1 миллион
            'few': rank.locales['ru'].unitName + 'а', // 2 миллиона
            'many': rank.locales['ru'].unitName + 'ов', // 10 миллионов
            'other': rank.locales['ru'].unitName + 'а' // 1.22 миллиона
        };
	}
})


export function getRankProperty(rank, locale, prop) {
    if(rank.locales[locale] != null) {
        return rank.locales[locale][prop] ?? rank[prop];
    }
    return rank[prop];
}