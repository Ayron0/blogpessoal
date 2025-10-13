# 📝 Blog Pessoal

### API RESTful desenvolvida com **NestJS**, que implementa o back-end completo de um Blog — incluindo autenticação, criação de postagens, categorização por temas e gerenciamento de usuários.

## 📖 Descrição

O **Blog Pessoal** é uma aplicação **back-end** desenvolvida com o framework **NestJS**, estruturada em **módulos independentes** para garantir **organização, escalabilidade e segurança**.  
O projeto simula o funcionamento de um blog completo, permitindo o **cadastro, autenticação e gerenciamento de usuários**, além da **criação e classificação de postagens** por temas.

A API foi construída seguindo **boas práticas de desenvolvimento**, utilizando **autenticação JWT**, **validação de dados com Class Validator** e **documentação automática via Swagger**.  
Pode ser consumida facilmente por ferramentas como **Insomnia**, **Postman** ou por um **front-end próprio**.

---
## 🧩 Módulos do Projeto

| Módulo | Descrição |
|--------|------------|
| **Postagem** | Gerencia as postagens (criação, atualização, exclusão e listagem). |
| **Tema** | Classifica as postagens através do objeto Tema. |
| **Usuário** | Define o objeto Usuário, utilizado pelo módulo Auth para autenticação e identificação do autor das postagens. |
| **Auth** | Implementa a segurança da aplicação utilizando autenticação JWT (JSON Web Token). |

> 💡 Este projeto foi desenvolvido com o objetivo de **consolidar o aprendizado de APIs RESTful com NestJS**, aplicando conceitos de **segurança, modularização e integração com banco de dados**.

---
## 🛠️ Tecnologias Utilizadas

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/MySQL-00758F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite" />
  <img src="https://img.shields.io/badge/TypeORM-FF6C37?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM" />
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" />
  <img src="https://img.shields.io/badge/Class%20Validator-5C2D91?style=for-the-badge&logo=nestjs&logoColor=white" alt="Class Validator" />
  <img src="https://img.shields.io/badge/SuperTest-FFCA28?style=for-the-badge&logo=jest&logoColor=black" alt="SuperTest" />
</p>

---
## ⚙️ Instalação e Configuração

Clone o repositório

```bash
git clone https://github.com/Ayron0/blogpessoal.git
```
Configuração do Projeto
```bash
npm install
```
Dependências principais utilizadas:
```bash
# TypeORM e o MySQL2
npm install --save @nestjs/typeorm typeorm mysql2

# Pacote Validation
npm install --save class-validator class-transformer

# Pacote Bcrypt
npm install --save bcrypt

# Pacote Passport-Local
npm install --save @nestjs/passport passport passport-local

# Pacotes Passport-Jwt e Nestjs-jwt
npm install --save @nestjs/jwt passport-jwt

# NestJS Swagger
npm install --save @nestjs/swagger swagger-ui-express
```
---

## API Endpoints

### Módulo Postagem 
| Método | Endpoint | Descrição |
|--------|-----------|------------|
| **GET** | `/postagens` | Lista todas as postagens. |
| **GET** | `/postagens/:id` | Retorna uma postagem pelo **ID**. |
| **GET** | `/postagens/titulo/:titulo` | Retorna postagens que contenham o **título** informado. |
| **POST** | `/postagens` | Cadastra uma nova postagem. |
| **PUT** | `/postagens` | Atualiza uma postagem existente. |
| **DELETE** | `/postagens/:id` | Deleta uma postagem pelo **ID**. |

### POST /postagens

**Response**
{
  "titulo": "Postagem 01",
  "texto": "Texto da Postagem 01",
  "tema": {
    "id": 1
  },
  "usuario": {
    "id": 1
  }
}

### PUT /postagens

**Response**
{
  "id": 1,
  "titulo": "Postagem 01 atualizada",
  "texto": "Texto da Postagem 01 - atualizado!",
  "tema": {
    "id": 1
  },
  "usuario": {
    "id": 1
  }
}

### Módulo Tema 

| Método | Endpoint | Descrição |
|--------|-----------|------------|
| **GET** | `/temas` | Lista todos os temas. |
| **GET** | `/temas/:id` | Retorna um tema pelo **ID**. |
| **GET** | `/temas/descricao/:descricao` | Retorna temas pela **descrição**. |
| **POST** | `/temas` | Cadastra um novo tema. |
| **PUT** | `/temas` | Atualiza um tema existente. |
| **DELETE** | `/temas/:id` | Deleta um tema pelo **ID**. |

### POST /temas
**Response**
{
  "descricao": "Tema 02"
}

### PUT /temas
**Response**
{
  "id": 1,
  "descricao": "Tema 01 - Atualizado"
}


### Módulo Usuário 

| Método | Endpoint | Descrição |
|--------|-----------|------------|
| **GET** | `/usuarios` | Lista todos os usuários. |
| **GET** | `/usuarios/:id` | Retorna um usuário pelo **ID**. |
| **POST** | `/usuarios` | Cadastra um novo usuário. |
| **PUT** | `/usuarios` | Atualiza um usuário existente. |
| **POST** | `/usuarios/logar` | Autentica um usuário (login). |

### POST /usuarios
**Response**
{
  "nome": "Caio",
  "usuario": "caio@gmail.com.br",
  "senha": "admin123",
  "foto": " "
}

### PUT /usuarios
**Response**
{
  "id": 1,
  "nome": "Administrador da Aplicação",
  "usuario": "admin@email.com.br",
  "senha": "admin123",
  "foto": "https://i.imgur.com/JR7kUFU.jpg"
}

### POST /usuarios/logar
**Response**
{
  "usuario": "caio@gmail.com.br",
  "senha": "admin123"
}
