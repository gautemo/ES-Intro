// ES9 has made regex improvements

// Lookbehind (similar to the existing lookahead)
const positiveBehind = /(?<=Gaute) Meek/.test('Gaute Meek Olsen');
console.log(positiveBehind); // true

const negativeBehind = /(?<!Gaute) Meek/.test('Gaute Meek Olsen');
console.log(negativeBehind); // false

/* \p and \P (negation) to match unicode characters
 uses brackets with [General_Category, Script, Script_Extensions] = something
 or these [Alphabetic, Uppercase, Lowercase, White_Space, Noncharacter_Code_Point, 
 Default_Ignorable_Code_Point, Any, ASCII, Assigned, ID_Start, ID_Continue, Join_Control, 
 Emoji_Presentation, Emoji_Modifier, Emoji_Modifier_Base, ++] 
 Needs u flag to treat pattern as a sequence of Unicode code points*/

const greek = /\p{Script=Greek}/u.test('μ');
console.log(greek); // true

const emoji = /\p{Emoji}/u.test('👽');
console.log(emoji); // true

// Named capture groups
const result = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('1991-08-31');
console.log(result.groups.year); // 1991 (alternative to result[1])

// s flag (. matches for any character except new lines. except for with the s flag)
const matchAcrossLines = /Gaute.Meek/s.test(`Gaute
Meek`);
console.log(matchAcrossLines); // true (because of s flag)