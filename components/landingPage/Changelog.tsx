import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "../ui/priority-badge";

enum TaskStatus {
  TODO = "Do zrobienia",
  IN_PROGRESS = "W trakcie",
  DONE = "Zrobione",
}

interface Status {
  status: TaskStatus;
  taskName: string;
}

const tasks: Status[] = [
  {
    status: TaskStatus.IN_PROGRESS,
    taskName: "Demo Oferty",
  },
  {
    status: TaskStatus.TODO,
    taskName: "Demo Dodawanie",
  },
  {
    status: TaskStatus.TODO,
    taskName: "Integracja AI",
  },
  {
    status: TaskStatus.TODO,
    taskName: "Weryfikacja",
  },
  {
    status: TaskStatus.TODO,
    taskName: "Token Governance",
  },
  {
    status: TaskStatus.IN_PROGRESS,
    taskName: "Audyt",
  },
  {
    status: TaskStatus.TODO,
    taskName: "Demo Arbitraż",
  },
];

export function Changelog() {
  return (
    <Table>
      <TableCaption>Lista obecnych zadań ze statusami.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Zadanie</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task, index) => (
          <TableRow key={index}>
            <TableCell>{task.taskName}</TableCell>
            <TableCell className="text-right">
              <StatusBadge status={task.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
