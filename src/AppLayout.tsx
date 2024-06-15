import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  text-align: center;
  gap: 10px;

  height: 100%;
  padding: 24px;
  margin: 24px;

  border-radius: 8px;
  background: #686d76;
`;

function AppLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

export default AppLayout;
