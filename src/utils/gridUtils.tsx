import React from "react";
import DetailButton from "../components/DetailButton";
import { ColDef, ICellRendererParams } from "ag-grid-community";
import { Shipment, ShipmentDetails } from "../entities/commonEntities";
import { SHIPMENT_API_URL } from "./commonUtils";

export const getColumnDefs = (): ColDef[] => [
  { headerName: "ID", field: "id" },
  { headerName: "Name", field: "name", editable: true },
  { headerName: "Mode", field: "mode" },
  { headerName: "Total", field: "total" },
  { headerName: "Status", field: "status" },
  {
    headerName: "Check Details",
    cellRendererFramework: (params: ICellRendererParams): JSX.Element => (
      <DetailButton id={params.data.id} />
    ),
  },
];

export const getDefaultColumnDefs = (): ColDef => ({
  resizable: true,
  sortable: true,
});

export const fetchShipments = async (): Promise<Shipment[]> => {
  const res = await fetch(`${SHIPMENT_API_URL}`);
  return res.json();
};

export const setShipmentValueInDB = (data: ShipmentDetails): void => {
  fetch(`${SHIPMENT_API_URL}/${data.id}`, {
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
  });
};
