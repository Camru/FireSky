$(function(){var o=$("#state"),n=$("#country");$(".search-form").on("submit",function(e){e.preventDefault();var a=$(this).serializeArray(),t=a[0].value;console.log(t),$.get("http://api.wunderground.com/api/42e0777a5e56eeaf/forecast/geolookup/conditions/q/CA/"+t+".json",function(e){var a=e.location.city,t=e.location.country_name;o.append(a),n.append(t)})})}());