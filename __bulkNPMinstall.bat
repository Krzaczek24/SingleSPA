@echo off

cd root-config
echo starting [npm install] for 'root-config'
START npm install
cd ..

cd menu-bar
echo starting [npm install] for 'menu-bar'
START npm install
cd ..

cd alpha
echo starting [npm install] for 'alpha'
START npm install
cd ..

cd beta
echo starting [npm install] for 'beta'
START npm install
cd ..