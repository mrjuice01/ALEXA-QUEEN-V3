
FROM quay.io/Diegoson/v3:beta
RUN git clone https://github.com/Diegoson/ALEXA-QUEEN-V3.git /root/Diegoson/
WORKDIR /root/Diegoson/
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
