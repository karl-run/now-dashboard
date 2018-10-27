FROM mhart/alpine-node:10
WORKDIR /usr/src
COPY yarn.lock package.json ./
RUN yarn
COPY . .
RUN GENERATE_SOURCEMAP=false yarn build && mv build /public
