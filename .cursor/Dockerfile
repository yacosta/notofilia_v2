# Cloud Agent base: Node >=22.19 for undici@8.10.0 (Astro 7.2.9).
# Keep OS close to the default Cloud Agent image (Ubuntu 24.04).
FROM ubuntu:24.04

ENV DEBIAN_FRONTEND=noninteractive
ENV NODE_VERSION=22.23.2

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        git \
        python3 \
        build-essential \
        xz-utils \
    && curl -fsSLo /tmp/node.tar.xz \
        "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz" \
    && tar -xJf /tmp/node.tar.xz -C /usr/local --strip-components=1 \
    && rm /tmp/node.tar.xz \
    && rm -rf /var/lib/apt/lists/* \
    && node -v \
    && npm -v \
    && (id ubuntu >/dev/null 2>&1 || useradd --create-home --uid 1000 --shell /bin/bash ubuntu)

USER ubuntu
