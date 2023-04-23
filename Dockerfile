FROM node:19-slim

RUN apt-get update && \
    apt-get install -y --no-install-recommends sqlite3 && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /home/node/app

USER node

CMD [ "tail", "-f", "/dev/null" ]