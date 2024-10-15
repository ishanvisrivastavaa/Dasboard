import React, { useContext } from "react";
import { Data } from "../components/Layout";
import ClientCard from "../components/ClientCard";

const Clients = () => {
  const { clients } = useContext(Data);
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold my-5">Current Clients</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {clients.map((client) => (
          <ClientCard key={client.name} client={client} />
        ))}
      </div>
    </div>
  );
};

export default Clients;
