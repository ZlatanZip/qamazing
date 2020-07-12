import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { Link } from "react-router-dom";

import "./style.css";
import CustomButton from "../CustomButton/CustomButton";

const CustomTable = (props) => {
  const { users } = props;
  const {
    id,
    name,
    lastName,
    email,
    job,
    level,
    phone,
    address,
    contract_type,
    resource_tag,
    skills,
    active,
    deleted,
    date_created,
    contract_start,
    contract_end,
  } = users;
  return (
    <div>
      <Table className="responsiveTable">
        <Thead className="thead">
          <Tr>
            <Th>Action</Th>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Lastname</Th>
            <Th>E-mail</Th>
            <Th>Job</Th>
            <Th>Level</Th>
            <Th>Phone</Th>
            <Th>Address</Th>
            <Th>Contract Type</Th>
            <Th>Resource Tag</Th>
            <Th>Skills</Th>
            <Th>Active</Th>
            <Th>Deleted</Th>
            <Th>Date Created</Th>
            <Th>Contrac Start</Th>
            <Th>Contract End</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users &&
            users.map((user) => (
              <Tr className="tr">
                <Link key={user.userId} to={`/dashboard/users/${user.id}`}>
                  <Td>
                    <CustomButton buttonText={`Edit`} />
                  </Td>
                </Link>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.lastName}</Td>
                <Td>{user.email}</Td>
                <Td>{user.job}</Td>
                <Td>{user.level}</Td>
                <Td>{user.phone}</Td>
                <Td>{user.address}</Td>
                <Td>{user.contract_type}</Td>
                <Td>{user.resource_tag}</Td>
                <Td>{user.skills}</Td>
                <Td>{user.active}</Td>
                <Td>{user.deleted}</Td>
                <Td>{user.date_created}</Td>
                <Td>{user.contract_start}</Td>
                <Td>{user.contract_end}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default CustomTable;
