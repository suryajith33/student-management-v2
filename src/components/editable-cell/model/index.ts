// CELL ITEM TYPES //

export interface Item {
    key: string;
    name: string;
    age: number;
    email: string;
    studentId: number;
}

// EDITABLE CELL PROP TYPES //

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: "number" | "text";
    record: Item;
    index: number;
    children: React.ReactNode;
}