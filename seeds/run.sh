#!/bin/bash

# to run this script:
# 1. cd into your Develop directory
#   cd Develop
# 2. run shell script
#   sh seeds/run

mysql -u root -p -e "source db/schema.sql"
node seeds/seed.js
