import React, { Component } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import {
  CellValueChangedEvent,
  ColDef,
  GridApi,
  GridReadyEvent,
  RowNode,
} from "ag-grid-community";
import isEmpty from "lodash/isEmpty";
import includes from "lodash/includes";

import {
  fetchShipments,
  getColumnDefs,
  getDefaultColumnDefs,
  setShipmentValueInDB,
} from "../utils/gridUtils";
import { Shipment } from "../entities/commonEntities";

interface Props {
  filter: string;
}
interface State {
  columnDefs: ColDef[];
  defaultColDef: ColDef;
  rowData: Shipment[];
}

class Grid extends Component<Props, State> {
  private gridApi: GridApi | undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      columnDefs: getColumnDefs(),
      defaultColDef: getDefaultColumnDefs(),
      rowData: [],
    };
  }

  componentDidMount(): void {
    fetchShipments().then(data => this.setState({ rowData: data }));
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.gridApi && this.props.filter !== prevProps.filter) {
      this.gridApi.onFilterChanged();
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.resizeGrid);
  }

  onGridReady = (params: GridReadyEvent): void => {
    this.gridApi = params.api;
    this.resizeGrid();
    window.addEventListener("resize", this.resizeGrid);
  };

  resizeGrid = (): void => {
    if (this.gridApi && window.innerWidth >= 768) {
      this.gridApi.sizeColumnsToFit();
    }
  };

  onCellValueChanged = ({ data }: CellValueChangedEvent): void => {
    setShipmentValueInDB(data);
  };

  isExternalFilterPresent = (): boolean => !isEmpty(this.props.filter);

  doesExternalFilterPass = (node: RowNode): boolean =>
    includes(node.data.id, this.props.filter);

  render(): JSX.Element {
    const { columnDefs, defaultColDef, rowData } = this.state;
    return (
      <div className="ag-theme-balham grid">
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          doesExternalFilterPass={this.doesExternalFilterPass}
          isExternalFilterPresent={this.isExternalFilterPresent}
          onCellValueChanged={this.onCellValueChanged}
          onGridReady={this.onGridReady}
          pagination
          paginationPageSize={10}
          rowData={rowData}
        />
      </div>
    );
  }
}

export default Grid;
