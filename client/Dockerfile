FROM node:alpine
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:alpine
RUN npm install -g serve
RUN adduser -D myuser
USER myuser
COPY --from=0 /app/build ./build
CMD serve -s build -l $PORT