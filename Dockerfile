FROM node:10.1.0

# Create app directory
RUN mkdir -p /opt/fibzy
RUN mkdir -p /opt/fibzy/helpers
RUN mkdir -p /opt/fibzy/routes
RUN mkdir -p /opt/fibzy/test

# Copy in application specific files
COPY helpers /opt/fibzy/helpers
COPY routes /opt/fibzy/routes
COPY test /opt/fibzy/test
COPY app.js /opt/fibzy/app.js
COPY package.json /opt/fibzy/package.json

WORKDIR /opt/fibzy
EXPOSE 8001

# Install node modules
RUN npm install

CMD [ "npm", "start" ]
