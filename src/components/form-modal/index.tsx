import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import StudentForm from '../student-form';

const FormModal: React.FC = () => {
    const [modal2Open, setModal2Open] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setModal2Open(true)}>
               Add Student
            </Button>
            <Modal
                title="Enter Student Details"
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
            >
             <StudentForm/>
            </Modal>
        </>
    );
};

export default FormModal;