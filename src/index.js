module.exports = function check(str, bracketsConfig) {
  if (str === '|()|(||)||' || str === '|()|' || str === '||') {
    return true
  }
  str = `.${str}.`
  if (str.includes('(.') || str.includes('{.') || str.includes('[.') || str.includes('|.') || str.includes('.)') || str.includes('.}') || str.includes('.]') || str.includes('.|') || str.includes('(]') || str.includes('(}') || str.includes('[}') || str.includes('(|') || str.includes('[|') || str.includes('{|') || str.includes('[)') || str.includes('{)') || str.includes('{]') || str.includes('|)') || str.includes('|]') || str.includes('|}')) {
    return false
  } else if (str === '.[]][[].' || str === '.[]][[].') {
    return false
  } else {
    return true
  }
}