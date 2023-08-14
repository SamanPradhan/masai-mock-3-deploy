# masai-mock-3-deploy

routes -
1. user route 
3. flights route
4. booking route
5. Dashboard route

   User route -
   register(POST)  -- req.body ->
   {
   name: String,
   email: String
   password: String
   }
   login(POST) -- req.body ->
   {
   email: String
   password: String
   }

    User route -
   register(POST)  -- req.body ->
   {
   name: String,
   email: String
   password: String
   }
   login(POST) -- req.body ->
   {
   email: String
   password: String
   }


   Flights route -
   add flights(POST)  -- req.body ->
   {
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
}
   get all flights(GET)

   get a flight by id(GET) 
   req.params - flight id

   edit a flight(PATCH)  --
req.params -id,
   req.body ->
   {
  airline: String,
  flightNo: String,
  departure: String,
  arrival: String,
  departureTime: Date,
  arrivalTime: Date,
  seats: Number,
  price: Number
}
delete a flight(DELETE)  --
req.params -flight id,


 Flights route -
   add bookings (POST)  -- req.body ->
   {
	 user : { type: ObjectId, ref: 'User' },
	 flight : { type: ObjectId, ref: 'Flight' }
}
   get all bookings(GET)

  

   edit a booking(Patch)  --
req.params -booking id,
   req.body ->
   {
  user : { type: ObjectId, ref: 'User' },
	 flight : { type: ObjectId, ref: 'Flight' }
}
delete a flight(DELETE)  --
req.params - booking id,
