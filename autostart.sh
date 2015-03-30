wget https://iojs.org/dist/v1.6.2/iojs-v1.6.2-linux-x64.tar.gz
tar zxf iojs-v1.6.2-linux-x64.tar.gz
cd iojs-v1.6.2-linux-x64
rm /usr/bin/node
rm /usr/bin/npm
ln -s /workspace/iojs-v1.6.2-linux-x64/bin/node /usr/bin/node
ln -s /workspace/iojs-v1.6.2-linux-x64/bin/npm /usr/bin/npm
ln -s /workspace/iojs-v1.6.2-linux-x64/bin/iojs /usr/bin/iojs
