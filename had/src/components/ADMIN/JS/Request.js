import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import '../CSS/Request.css'
export const Request = ({ showModal, handleClose }) => {
  const doctors = [
    { id: 1, name: 'Dr. Smith' },
    { id: 2, name: 'Dr. Johnson' },
    
    // Add more doctors as needed
  ];

  return (
    <Modal  className="request-modal"  show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Doctor Approval</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Doctor ID</th>
              <th>Doctor Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td className='Buttons'>
                  <Button variant="success" size="sm" className="mr-2">
                    Approve
                  </Button>
                  <Button variant="danger" size="sm">
                    Decline
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
};

export default Request;
