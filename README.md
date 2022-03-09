# docker-salesbot

## Docker Install Steps for AWS Server

* Mostly taken from: https://docs.docker.com/engine/install/debian/
* sudo apt-get update
* sudo apt-get install ca-certificates curl gnupg lsb-release
* curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
* echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
* sudo apt-get update
* sudo apt-get install docker-ce docker-ce-cli containerd.io
* sudo docker run hello-world
* sudo groupadd docker
* sudo usermod -aG docker $USER
* docker run hello-world (verify you can run docker commands without sudo)
* Configure Docker to start on boot
* sudo systemctl enable docker.service
* sudo systemctl enable containerd.service
* "docker ps" and "docker images" commands should work without errors at this point




