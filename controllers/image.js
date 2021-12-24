const Clarifai = require('clarifai');
const fetch = require('cross-fetch');

const handleApiCall = (req, res) => {
  requestOptions.body = getRawData(req.body.input);
  fetch("https://api.clarifai.com/v2/models/" + Clarifai.FACE_DETECT_MODEL + "/outputs", requestOptions)
    .then(response => response.text())
    .then(data => res.json(data))
    .catch(err => res.status(400).json("unable to call clarifai"));
}

const handleImage = (req, res, db) => {
  const { id } = req.body;
  db('users').where({ id: id })
    .increment('entries', 1)
    .returning('entries')
    .then(user => {
      res.json(user[0]);
    })
    .catch(err => res.status(400).json(err));
}

const getRawData = (url) => {
  url = url ? url : "https://samples.clarifai.com/metro-north.jpg";
  return JSON.stringify({
    "user_app_id": {
      "user_id": "sreekanth414",
      "app_id": "8255f3a1326c4fe2b27cb931a332df26"
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": url
          }
        }
      }
    ]
  });
}

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key da4425dbc98c46059145b67131433001'
  },
  body: getRawData()
};

module.exports = {
  handleImage: handleImage,
  handleApiCall: handleApiCall
}