import model from 'platform/models/model'
import Website from './website'

export default model.extend({

  tableName: 'cms_aliases',

  website: function() {
    return this.belongsTo(Website, 'website_id')
  }

})
