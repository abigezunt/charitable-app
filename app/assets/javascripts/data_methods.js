
var Charity = {
  data: {}
};

// send states and counties through this so that it will send each individual county and individual state to the add_to_data_hash method

Charity.seperate_data_arrays = function(big_array, key_array) {
  var i = 0; 
  debugger;
  var max = big_array.length;
  for (; i<=max;){
    Charity.add_to_data_hash(key_array, big_array[i]);
    i = i + 1
  }
};

// send USA directly through this since it is only a single array
Charity.add_to_data_hash = function(key_array, value_array){
  Charity.data = Charity.data || {};
  var temp_data = {};
  var i = 0;
  var max = key_array.length;
  for (; i <= max;){
    temp_data[key_array[i]] = value_array[i];
    i = i + 1;
  }
  Charity.data[temp_data["display_name"]] = temp_data;
};

// scope of data must be looked at
// entering any location and the data requested as the data_key and it will return requested data point
Charity.show_data = function(location, data_key){
  return data[location][data_key]
}


Charity.seperate_data_arrays(states, state_us_keys)
// Charity.seperate_data_arrays(counties, county_keys)
// Charity.add_to_data_hash(usa, state_us_keys)


