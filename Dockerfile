FROM node:alpine

ENV PORT 3000
ENV NODE_ENV dev

# Install dependencies by using layer caching (no changes)
ADD . /usr/src/app

RUN cd /usr/src/app && \
    npm i npm@latest @frctl/fractal -g && \
    npm install

WORKDIR /usr/src/app

EXPOSE 3000

VOLUME [ "/usr/src/app" ]

CMD ["fractal", "start", "--sync"]

# docker build --rm -t marcusbaer/fractal-example .
# cat Dockerfile | envsubst | docker build --rm -t marcusbaer/fractal-example .
# docker run -d -p 3000:3000 -e PORT=3000 -v $(pwd):/usr/src/app --restart always --name fractal-example marcusbaer/fractal-example
