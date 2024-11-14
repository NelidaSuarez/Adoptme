import { expect } from "chai";
import supertest from "supertest";

const sessionRequest = supertest("http://localhost:8080/api/sessions");
const request = supertest("http://localhost:8080/api/users");

describe("Test de integración Users ", () => {
    let userTest1 ;
    it("[POST] /api/sessions/register - Debe registrar un usuario", async () => {
      const newUser1 = {
        first_name: "luis",
        last_name: "Test",
        email: "usertest2@gmail.com",
        password: "123",
      };
  
      const { status, body } = await sessionRequest.post("/register").send(newUser1);
      userTest1 = body.payload;
  
      expect(status).to.be.equal(201);
      expect(body.status).to.be.equal("success");
      expect(body.payload).to.be.an("object");
      expect(body.payload.email).to.be.equal(newUser1.email);
      expect(body.payload.first_name).to.be.equal(newUser1.first_name);
      expect(body.payload.last_name).to.be.equal(newUser1.last_name);
      expect(body.payload.password).to.not.be.equal(newUser1.password);
    });


    it("[GET] /api/users - Debe devolver un array de usuarios", async () => {
      const { status, body } = await request.get("/");
      expect(status).to.be.equal(200);
      expect(body.payload).to.be.an("array");
    });

    
    it("[GET] /api/users/:pid - Debe devolver un usuario por Id ", async () => {
        
          
        const { status, body } = await request.get(`/${userTest1._id}`);
    
        expect(status).to.be.equal(200);
        expect(body.payload).to.be.an("object");
        expect(body.payload.first_name).to.be.equal("luis");
       
      });
    
     
      

      it("[PUT] /api/users/:uid - Debe actualizar un usuario", async () => {
        const newUser1 = {
          first_name: "luisa",
        };
    
        const { status, body } = await request.put(`/${userTest1._id}`).send(newUser1);
    
        expect(status).to.be.equal(200);
        expect(body.payload).to.be.an("object");
        expect(body.payload.first_name).to.be.equal("luisa");
        
      });
    
      it("[DELETE] /api/users/:uid - Debe eliminar un usuario", async () => {
        const { status, body } = await request.delete(`/${userTest1._id}`);
        expect(status).to.be.equal(200);
        expect(body).to.have.property("message").that.includes("User deleted");
      })
        



});
