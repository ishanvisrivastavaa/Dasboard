import React, { useContext} from "react";
import { Data } from "../components/Layout";
import MemberCard from "../components/MemberCard";

const Members = () => {
 
  const { members } = useContext(Data);
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold my-5">Members</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {members.map((member, i) => (
          <MemberCard key={i} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Members;
