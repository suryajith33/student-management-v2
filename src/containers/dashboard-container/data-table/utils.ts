import { Item } from "../../../components/editable-cell/model";

export const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edward ${i}`,
    age: 32,
    email: `Edward ${i}@gmail.com`,
    studentId: i
  });
}