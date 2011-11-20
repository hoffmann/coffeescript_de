#!/bin/bash

python gen.py
scp scripts/samples.js ph@vps:/srv/www-coffeescript/scripts/
scp index.html ph@vps:/srv/www-coffeescript/
