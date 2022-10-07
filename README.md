
# POC do front-end em React

Primeiro precisaremos buildar, este comando abaixo é necessário para copiar todos or arquivos do react para o sistema de arquivos da imagem do docker, 
exceto o /node_modules, estes arrquivos do react ficarão localizados dentro da pasta /app no docker

```bash
$ docker build -t react-poc-front .
```


Depois buildar precisaremos rodar o projeto com o seguinte comando

```bash
$ docker run -p 10:3000 react-poc-front
```

Para simular uma página do front-end, acesse o seguinte link:

http://localhost:10/Slip-On-Reserva-Color-Branco-11990557.html