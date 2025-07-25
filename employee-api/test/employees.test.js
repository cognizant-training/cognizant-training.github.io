const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const path = require('path');
const app = require('../app'); // Import your app

chai.use(chaiHttp);
const { expect } = chai;
const dataFilePath = path.join(__dirname, '../data', 'employees.json');

describe('Employee API', () => {
    beforeEach(() => {
        fs.writeFileSync(dataFilePath, JSON.stringify([])); // Clear data before each test
    });

    it('should add a new employee', (done) => {
        chai.request(app)
            .post('/v1/employees')
            .send({ name: 'John Doe', position: 'Developer' })
            .end((err, res) => {
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('name', 'John Doe');
                expect(res.body).to.have.property('position', 'Developer');
                done();
            });
    });

    it('should remove an employee', (done) => {
        chai.request(app)
            .post('/v1/employees')
            .send({ name: 'Jane Doe', position: 'Manager' })
            .end((err, res) => {
                const employeeId = res.body.id;
                chai.request(app)
                    .delete(`/v1/employees/${employeeId}`)
                    .end((err, res) => {
                        expect(res).to.have.status(200);
                        expect(res.body).to.have.property('id', employeeId);
                        done();
                    });
            });
    });

    it('should return 404 when trying to remove a non-existing employee', (done) => {
        chai.request(app)
            .delete('/v1/employees/non-existing-id')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});
