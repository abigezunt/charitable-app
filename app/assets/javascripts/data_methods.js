
var Charity = {
  data: {}
};
// send states and counties through this so that it will send each individual county and individual state to the add_to_data_hash method

Charity.seperate_data_arrays = function(big_array, key_array) {
  var i = 0; 
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
};

Charity.retrieve_data = function(abbrev){
  for(var i in Charity.data){
      if(Charity.data[i].match_name === abbrev){
        return Charity.data[i].display_name;
     }
  }
};

Charity.create_divs = function(){
  for(var i in Charity.data){
    $("#data-div").append("<div id=\'"+Charity.data[i].match_name+"\'>"+"<h3>"+Charity.data[i].display_name+"</h3>"+"<h4>State's Total Charitable Contributions:</h4>"+"$"+parseInt(Charity.data[i].tot_contrib).formatMoney(0)+"<h4>Average Household Contribution:</h4>"+"$"+parseInt(Charity.data[i].em_contrib).formatMoney(0)+"<h4>Average Percent Household Income:</h4>"+Charity.data[i].pctgiv+"</div>");
  }
};

Number.prototype.formatMoney = function(c, d, t){
var n = this, 
    c = isNaN(c = Math.abs(c)) ? 2 : c, 
    d = d == undefined ? "." : d, 
    t = t == undefined ? "," : t, 
    s = n < 0 ? "-" : "", 
    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

Charity.seperate_data_arrays(states, state_us_keys)
Charity.seperate_data_arrays(counties, county_keys)
Charity.add_to_data_hash(usa, state_us_keys)
