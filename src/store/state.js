let defaultCity = '济宁'

try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}

export default {
  city: defaultCity
}
