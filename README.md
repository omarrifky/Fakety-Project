# ACML_Fakety

This application is developed by three students 
 
1 - Omar Khaled Rifky
2 - Ahmed Mostafa Mahdy
3 - Mohamed Ashraf Mohamed Lotfy

-This is simply an electronic wallet for the clients of a store so that these clients can perform electronic money flow transactions to and from this store, These transactions are controlled by the vendor (store). 
We used the MEAN stack technology to develop this app together with docker and redis.
to run this application simply navigate to the acml_fakety folder and open the terminal/bash and type in this command [ docker compose up --build ]


-The link to the private gitlab repo : https://gitlab.com/mash197/acml_fakety.git

-The example for the config file : 
this would be used for a development enviroment
{
    "development": {
        "config_id": "development",
        "app_name": "fakety",
        "app_desc": "an electronic wallet for small change",
        "node_port": 3000,
        "json_indentation": 4,
        "database": "db_dev"
    }
}
Another config file would be used for testing enviroment as follows
{
    "development": {
        "config_id": "testing",
        "app_name": "faketyTesting",
        "app_desc": "an electronic wallet for small change",
        "node_port": 3000,
        "json_indentation": 4,
        "database": "db_test"
    }
}



