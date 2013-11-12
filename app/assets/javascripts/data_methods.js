
var charity = {
  var data = {}
};

// send states and counties through this so that it will send each individual county and individual state to the add_to_data_hash method

Charity.seperate_data_arrays = function(big_array, key_array) {
  i = 0; 
  max = big_array.length;
  for (; i<=max;){
    add_to_data_hash(key_array, big_array[i]);
    i = i + 1
  }
};

// send USA directly through this since it is only a single array
Charity.add_to_data_hash = function(key_array, value_array){
  data ||= {};
  var temp_data = {};
  i = 0;
  max = key_array.length;
  for (; i <= max;){
    temp_data[key_array[i]] = value_array[i];
    i = i + 1;
  }
  return data[temp_data[:display_name]] = temp_data
};

// scope of data must be looked at
// entering any location and the data requested as the data_key and it will return requested data point
Charity.show_data = function(location, data_key){
  return data[location][data_key]
}
