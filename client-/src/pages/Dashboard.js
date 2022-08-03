import React, { useEffect, useState } from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Row } from "react-bootstrap";
import { TransactionForm } from "../components/form/TransactionForm";
import { TransactionTable } from "../components/transaction-table/TransactionTable";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    !user._id && navigate("/");
  });

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete it?")) {
      return;
    }
  };

  return (
    <MainLayout>
      <Row>
        <h3 className="mt-4">Dashboard</h3>
        <hr />
        {/* form section */}
        <TransactionForm />
        <hr className="mt-5" />

        {/* table section */}
        <TransactionTable handleOnDelete={handleOnDelete} />
      </Row>
    </MainLayout>
  );
};

export default Dashboard;
