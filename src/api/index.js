export default {
  getCategories (cb) {
    axios.get(window.SETTINGS.API_BASE_PATH + 'wp/v2/categories?sort=name&hide_empty=true&per_page=50')
      .then(response => {
        cb(response.data.filter(c => c.name !== "Uncategorized"))
      })
      .catch(e => {
        cb(e)
      })
  },

  getPages (cb) {
    axios.get(window.SETTINGS.API_BASE_PATH + 'wp/v2/pages?per_page=10')
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },

  getPage (id, cb) {
    if (_.isNull(id) || !_.isNumber(id)) return false
    axios.get(window.SETTINGS.API_BASE_PATH + 'wp/v2/pages/'+id)
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },

  getPosts (limit, cb) {
    if (_.isEmpty(limit)) { let limit = 5 }
    
    axios.get(window.SETTINGS.API_BASE_PATH + 'wp/v2/posts?per_page='+limit)
      .then(response => {
        cb(response.data)
      })
      .catch(e => {
        cb(e)
      })
  },

  getMenu (slug, cb) {
    if (_.isNull(id) || !_.isString(slug)) return false
    axios.get(window.SETTINGS.API_BASE_PATH + 'menus/v1'+slug)
    .then(response => {
      cb(response.data)
    })
    .catch(e => {
      cb(e)
    })
  }
}
