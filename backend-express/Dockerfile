FROM node:8
RUN mkdir /app
WORKDIR /app
ADD package.json package.json
ADD src src
COPY index.js /app/index.js
RUN npm install
EXPOSE 4011
CMD ["npm", "start"]