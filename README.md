# DAZN_Task

#Run app in local
npm install
npm start

# Use the below curl commands to do Create , Read , Update and Delete operations on Movies collection.

# Fetch All Movies list 
curl --location 'http://localhost:3000/movies/' \
--data ''

# Add Movie API
curl --location 'http://localhost:3000/movies/' \
--header 'Content-Type: application/json' \
--data '{
    "title": "BB2", 
    "genre": "fantasy", 
    "rating": 5, 
    "streamingLink": "will be available soon"
}'

# Fetch Movie by title
curl --location 'http://localhost:3000/movies/search?q=bb2'

# Update Movie 
curl --location --request PUT 'http://localhost:3000/movies/676d39ce033777e880fe34ef' \
--header 'Content-Type: application/json' \
--data '{
        
        "title": "julayi",
        "genre": "comedy",
        "rating": 10,
  "streamingLink": "http://newlink.com"
    }'

# Delete Movie
curl --location --request DELETE 'http://localhost:3000/movies/676d395b033777e880fe34eb'



