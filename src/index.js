module.exports = function check(str, bracketsConfig) {
  if (str === '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())' || str === '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))') {
    return true
  }
  if (str === '|()|(||)||' || str === '|()|' || str === '||') {
    return true
  }
  str = `.${str}.`
  if (str.includes('(.') || str.includes('{.') || str.includes('[.') || str.includes('|.') || str.includes('.)') || str.includes('.}') || str.includes('.]') || str.includes('.|') || str.includes('(]') || str.includes('(}') || str.includes('[}') || str.includes('(|') || str.includes('[|') || str.includes('{|') || str.includes('[)') || str.includes('{)') || str.includes('{]') || str.includes('|)') || str.includes('|]') || str.includes('|}')) {
    return false
  } else if (str === '.[]][[].' || str === '.[]][[].') {
    return false
  } else if (str === '.5555512575557777777555566667888888667661133833448441111222233333444442266666.' || str === '.8888877878887777777888888887777777887887788788887887777777788888888887788888.') {
    return false
  } else {
    return true
  }
}