FROM hayd/ubuntu-deno:1.2.2

WORKDIR /home/app
ENV PORT 1995

ENTRYPOINT ["/bin/bash"]
