FROM ubuntu:14.04

RUN sudo apt-get update
RUN sudo apt-get -q -y install git ssh sshpass 
  
RUN sudo apt-get -q -y install nodejs npm
RUN sudo ln -s "$(which nodejs)" /usr/bin/node
RUN npm install -g npm bower grunt-cli

RUN wget https://iojs.org/dist/v1.6.2/iojs-v1.6.2-linux-x64.tar.gz
RUN tar zxf iojs-v1.6.2-linux-x64.tar.gz
WORKDIR iojs-v1.6.2-linux-x64
RUN rm /usr/bin/node
RUN cp bin/* /usr/bin
