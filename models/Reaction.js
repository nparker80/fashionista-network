const { Schema, model } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema({
  reactionId: {
    type: Types.ObjectId,
    default: new Types.ObjectId()
  },
  reactionBody: {
    type: 'String',
    required: true,
    maxLength: 280,
  },
  username: {
    type: 'String',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.Now,
    get: (createdAtVal) => moment(createdAtVal). format('MMM DDD, YYYY [at] hh:mm a')
  }
},
{ 
  toJSON: {
    getters: true
  },
  id: false
});

module.exports = reactionSchema;

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;