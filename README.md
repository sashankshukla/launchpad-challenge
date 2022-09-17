# Launchpad Challenge - IOS

- To build the app, I would use React Native or Swift to develop the screens required.

- Their both great, React Native just has the advantage of being platform independent

- Upon deciding on 'X hours before' as the threshold for when we should inform a user if it may rain, we need to have some sort of a backend server that incorporates a real-time weather API to check if it may rain.

- This may be one of the challenges as we need to check data for every location worldwide, and if found that it might rain we need to send a push notification asynchronously as soon as we are aware of the rain info. We would require server sent events (SSE or Event source) to incorporate this feature.

- Additionally we would require a push notification service(eg; Firebase, PushAlerts) to inform the user. Here the catch is that we must only send the push notification to those users whose current location is that of the location of the rain. Swift has something known as the CLLocationManager that gets the location of every user(unsure of how I would do it with react native). Then our backend must find all users who are within "K kilmometers" from the region of rain and send the push notif to only them.

