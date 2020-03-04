let status_code = {
  OK: 200,
  FOUR_ZERO_FOUR: 404,
  FOUR_ZERO_THREE: 403,
  FIVE_ZERO_ZERO: 500
}

let status_message = {
  SERVER_BUSY : 'Our Servers are busy. Please try again later.',
  DATA_UPDATED: 'Data updated successfully.',
  DELETE_DATA : 'Delete data successfully'
}

module.exports = {
  status_code: status_code,
  status_message: status_message
}
