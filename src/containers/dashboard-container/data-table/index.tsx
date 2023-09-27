import React, { useState } from "react";
import {
  Button,
  Form,
  Popconfirm,
  Table,
  Typography
} from "antd";
import EditableCell from "../../../components/editable-cell";
import { Item } from "../../../components/editable-cell/model";
import { originData } from "./utils";
import { useAppSelector } from "../../../modal/hooks";
import Loader from "../../../components/loader";


const DataTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const { studentList, loading } = useAppSelector((state: any) => state.student)

  console.log('rendered')

  const isEditing = (record: Item) => record.key === editingKey;

  const edit = (record: Partial<Item> & { key: React.Key }) => {
    form.setFieldsValue({ name: "", age: "", email: "", ...record });
    setEditingKey(record.key);
    console.log(isEditing, 'record')
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Item;
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "firstName",
      dataIndex: "firstName",
      width: "25%",
      editable: true
    },
    {
      title: "StudentId",
      dataIndex: "id",
      width: "25%",
      editable: true
    },
    {
      title: "Age",
      dataIndex: "age",
      width: "15%",
      editable: true
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "40%",
      editable: true
    },
    {
      title: "Action",
      dataIndex: "operation",
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      }
    },
    {
      title: "Operation",
      dataIndex: "DeleteOperation",
      render: (_: any, record: Item) => {
        const editable = isEditing(record);
        return editable ? (
          <Button danger disabled>
            Delete Student
          </Button>
        ) : (
          <Button type="primary" danger>
            Delete Student
          </Button>
        );
      }
    },
    {}
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Item) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record)
      })
    };
  });

  return (
    <Form form={form} component={false}>
      {loading ? <Loader/>
        : <Table
          components={{
            body: {
              cell: EditableCell
            }
          }}
          bordered
          dataSource={studentList}
          columns={mergedColumns}
          rowClassName="editable-row"
        />}
    </Form>
  );
};

export default DataTable;