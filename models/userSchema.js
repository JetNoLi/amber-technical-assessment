const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  gender:{
    type: String,
    required: false
  },

  name:{
    type: {
      title: {
        type: String,
        required: true
      },
      first: {
        type: String,
        required: true
      },
      last: {
        type: String,
        required: true
      }
    },
    required: true
  },

  location: {
    type: {
      street: {
        number: {
          type: mongoose.Schema.Types.Number, 
          required: true
        },
        name: {
          type: String,
          required: true
        }
      },

      city: {
        type: String,
        required: true
      },

      state: {
        type: String,
        required: true
      },

      country: {
        type: String,
        required: true
      },

      postcode: {
        type: mongoose.Schema.Types.Number,
        required: true
      },
      
      coordinates: {
        type: {
          latitude: {
            type: String,
            required: false
          },
          longitude: {
            type: String,
            required: false
          }
        },
        required: false
      },

      timezone: {
        type: {
          offset : {
            type: String,
            required: false
          },
          description: {
            type: String,
            required: false
          }
        },
        required: false
      }
    },
    required : false
  },

  email: {
    type: String,
    required: true
  },

  login: {
    uuid: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    salt: {
      type: String,
      required: true
    },
    md5: {
      type: String,
      required: true
    },
    sha1: {
      type: String,
      required: true
    },
    sha256: {
      type: String,
      required: true
    }
  },

  dob: {
    type: {
      date: {
        type: Date,
        required: true
      }, 
      age: {
        type: mongoose.Schema.Types.Number,
        required: true
      }
    }
  }, 
  
  registered: {
    date: {
      type: String,
      required: true
    },
    age: {
      type: mongoose.Schema.Types.Number,
      required: true
    }
  },

  phone: {
    type: String,
    required: true
  },
  
  cell: {
    type: String,
    required: true
  },

  ID: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },

  picture: {
    large: {
      type: String, 
      required: false
    },
    medium: {
      type: String,
      required: false
    },
    thumbnail: {
      type: String, 
      required: false
    }
  },

  nat: {
    type: String, 
    required: true
  }
});

const User = new mongoose.model('User', userSchema);

module.exports = User;