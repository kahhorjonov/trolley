import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOperations, setPage } from "../redux/slices/operationSlice";
import "../App.css";

const OperationTable = () => {
  const dispatch = useDispatch();
  const { data, loading, currentPage, total } = useSelector(
    (state) => state.operations
  );

  useEffect(() => {
    dispatch(
      fetchOperations({ page: currentPage, sort: "operationTimestampUtc" })
    );
  }, [currentPage, dispatch]);

  const columns = [
    { title: "Operation ID", dataIndex: "operationId", sorter: true },
    { title: "Operation Type", dataIndex: "operationType", sorter: true }, // To'g'ri dataIndex
    { title: "Aircraft Number", dataIndex: "aircraftNumber", sorter: true },
    { title: "Flight ID", dataIndex: "flightId", sorter: true },
    { title: "Trolley Type", dataIndex: "trolleyType", sorter: true },
    { title: "Trolley ID", dataIndex: "trolleyId", sorter: true },
    { title: "Leg", dataIndex: "leg" },
    { title: "Airport", dataIndex: "airport" },
    {
      title: "Timestamp UTC",
      dataIndex: "operationTimestampUtc",
      sorter: true,
    },
    { title: "Timestamp Local", dataIndex: "operationTimestampLocal" },
    { title: "Owner", dataIndex: "owner" },
    { title: "Comment", dataIndex: "comment" },
    { title: "User ID", dataIndex: "userId", sorter: true },
  ];

  const handleTableChange = (pagination, filters, sorter) => {
    dispatch(setPage(pagination.current));
    if (sorter.field) {
      dispatch(
        fetchOperations({ page: pagination.current, sort: sorter.field })
      );
    }
  };

  return (
    <div className="table-container">
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        onChange={handleTableChange}
        pagination={{
          current: currentPage,
          total: total,
          pageSize: 25,
          showSizeChanger: false,
        }}
        className="custom-table"
        rowKey="operationId"
      />
    </div>
  );
};

export default OperationTable;
