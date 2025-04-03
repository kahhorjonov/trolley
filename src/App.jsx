import "./App.css";
import OperationsTable from "./components/OperationsTable";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <div className="app-container">
        <h1 className="title">Trolley Operations</h1>
        <OperationsTable />
      </div>
    </MainLayout>
  );
};

export default App;
