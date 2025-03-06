## Scenario Load Testing

- Target : https://reqres.in/
    - Path : 
        - Homepage Web.
        - Get User.
        - Create user.

- Jmeter Config 
    - Number of Thread (Users) = 5
    - Ramps-up period = 5
    - Loop Count = infinite
    - Same user on each iteration = `true`
    - Specify Thread lifetime = `true`
    - Duration = 10s
    - Startup Delay = 5s
