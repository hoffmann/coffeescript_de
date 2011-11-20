import glob
import os
import subprocess
import json

samples = {'coffee':[], 'js':[]}

for filename in glob.glob('coffee/*.coffee'):
    coffee_sample = open(filename).read()
    js_sample = subprocess.check_output(['coffee', '-p', filename])
    samples['coffee'].append(coffee_sample)
    samples['js'].append(js_sample)

s = json.dumps(samples,  indent=2)
f = open('scripts/samples.js', 'w')
f.write('window.samples = ')
f.write(s)
f.close()
