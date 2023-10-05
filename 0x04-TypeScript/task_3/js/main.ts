///<reference path ="./crud.d.ts">
import * as CRUD from './crud';
import { RowElement, RowID } from './interface';

export const row: RowElement = {
  firstName: "Guillame",
  lastName: "Salva",
};
export const newRowID: RowID = CRUD.insertRow(row);
export const updateRow: RowID = CRUD.updateRow(newRowID, row);
CRUD.deleteRow(newRowID);
